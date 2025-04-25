// 필요한 아이콘, 컴포넌트, 스타일, 컨텍스트 등 import
import { FaHeart, FaShareAlt, FaUserCircle } from 'react-icons/fa';
import Button from '../../shared/ui/Button';
import './ReadPage.css';
import { usePageContext } from '../../app/providers/PageContext';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CommentArea from '../../shared/ui/Comment';
import logo from '../../app/assets/logo2.png';
import { marked } from 'marked';

export default function ReadPage() {
  // URL 파라미터에서 postId 추출
  const { postId } = useParams();
  const Navigate = useNavigate();

  // 상태 관리
  const [post, setPost] = useState(null); // 게시글 정보
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  const { setPageInfo } = usePageContext(); // 페이지 상단 정보 설정용 컨텍스트
  const [comments, setComments] = useState([]); // 댓글 목록
  const [newComment, setNewComment] = useState(""); // 새로운 댓글 입력값

  // 로컬스토리지에서 로그인한 유저 정보 불러오기
  const userReply = JSON.parse(localStorage.getItem('user'));
  const id = userReply ? userReply.id : null;
  console.log("commentid: ", userReply.id);

  // 게시글 & 댓글 데이터 fetch
  useEffect(() => {
    console.log('post 데이터 확인:', post);
  }, [post]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:8080/api/read/${postId}`);
        if (!response.ok) throw new Error("게시글을 불러오는 데 실패했습니다.");
        const data = await response.json();
        setPost(data);
        
        setPageInfo({
          title: "B",
          author: data.userNick,
          isHome: false,
        });
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/comments/${postId}`);
        if (!response.ok) throw new Error('댓글을 불러오는 데 실패했습니다.');
        const data = await response.json();
        setComments(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPost();
    fetchComments();

    // 언마운트 시 페이지 정보를 초기화
    return () => {
      setPageInfo({ title: 'Banana', author: null, isHome: true });
    };
  }, [postId, setPageInfo]);

  // 댓글 작성
  const submitComment = async () => {
    if (newComment.trim() === "") {
      alert("댓글 내용을 입력해주세요.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/comments/${postId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-USER-ID': id,
        },
        body: JSON.stringify({ content: newComment }),
      });

      if (response.ok) {
        setNewComment(""); // 입력창 비우기
        const commentRes = await fetch(`http://localhost:8080/api/comments/${postId}`);
        const commentData = await commentRes.json();
        setComments(commentData); // 댓글 목록 새로고침
      } else {
        alert('댓글 작성에 실패했습니다');
      }
    } catch (err) {
      console.error(err);
      alert('댓글 작성에 실패했습니다');
    }
  };
  const handleDeletePost = async() => {

    const deletedPost = window.confirm("삭제하시겠습니까?");
    if(!deletedPost) return;

    try {
      await fetch(`http://localhost:8080/api/read/delete/${postId}`, {method: 'GET',});
    } catch (err){
      console.error(err);
      alert('네트워크 오류 발생');
    }
    Navigate("/");
  };
  function handleUpdatePost (){
    Navigate(`/write/${post.postId}`);
  }

  const handleDelete = async (commentId) => {
    if (window.confirm("정말로 이 댓글을 삭제하시겠습니까?")) {
      
      try {
        const response = await fetch(`http://localhost:8080/api/comments/delete/${commentId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'X-USER-ID': id, // 사용자 ID를 헤더에 포함
          },
        });
  
        if (response.ok) {
          // 삭제 성공 후 댓글 목록을 다시 불러오기
          const updatedComments = comments.filter(comment => comment.commentId !== commentId);
          setComments(updatedComments); // 댓글 목록에서 해당 댓글 삭제
        } else {
          alert("댓글 삭제에 실패했습니다.");
        }
      } catch (err) {
        console.error(err);
        alert("댓글 삭제에 실패했다잉.");
      }
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!post) return null;

  return (
    <div className="read-page-wrapper">
      <main className="read-page">
        {/* 게시글 헤더 영역 */}
        <section className="post-header">
          <h1 className="post-title">{post.postTitle}</h1>
          <div className="post-meta">
            <div className="author-info">
              {post.userProfileImage ? (
                <img src={post.userProfileImage} alt={post.userNick} className="author-avatar" />
              ) : (
                <FaUserCircle className="author-avatar" />
              )}
              <div className="author-details">
                <span className="author-name">{post.userNick}</span>
              </div>
            </div>
            <Button className="follow-btn" size="m" value="팔로우" />
          </div>
        </section>
        
      {/* 게시글 본문 영역 */}
      <section className="post-content">
        <div className="post-content-wrapper">
          {post.postContent.split('\n\n').map((paragraph, index) => (
            <div key={index}><div
                      className="markdown-body"
                      dangerouslySetInnerHTML={{ __html: marked(paragraph)}}
                    />
            </div>
          ))}
        </div>
        <div className="reaction-buttons">
          <button className="reaction-btn"><FaHeart /><span>{post.likeCount}</span></button>
          <button className="reaction-btn"><FaShareAlt /></button>
          {(post.userId == userReply?.id)?<button className='post-update-button'
            onClick={handleUpdatePost}>수정하기</button>:""}
          {(post.userId == userReply?.id)?<button className='post-delete-button'
            onClick={handleDeletePost}>삭제하기</button>:""}
        </div>
      </section>

      {/* 작성자 프로필 */}
      <section className="author-profile">
        <div className="profile-info">
          {post.userProfileImage ? (
            <img src={post.userProfileImage} alt={post.userNick} className="profile-avatar" />
          ) : (
            <FaUserCircle className="profile-avatar" />
          )}
          <div className="profile-details">
            <h3>{post.userNick}</h3>
          </div>
        </div>
        <Button className="follow-btn" size="m" value="팔로우" />
      </section>

      {/* 댓글 작성 폼 */}
      <section className="comment-form">
        <textarea
          placeholder="댓글을 작성하세요"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button 
          className="submit-comment" 
          size="m" 
          value="댓글 작성"
          onClick={submitComment}
        />
      </section>

      {/* 댓글 목록 */}
      <section className="comments">
        {comments.map((comment) => (
          <div key={comment.commentId} className="comment-wrapper">
            <CommentArea
              comment={comment}
              userId={comment.userId}
              userProfileImage={comment.userProfileImage}
              author={comment.userNick}
              createdDateTime={comment.createdDateTime}
              content={comment.content}
              onDeleteClick={() => handleDelete(comment.commentId)}
            />
            {userReply.userId === comment.userId && (
              <div className="comment-footer">
                <button
                  className="comment-delete"
                  onClick={() => handleDelete(comment.commentId)}
                >
                  삭제
                </button>
              </div>
            )}
          </div>
        ))}
        </section>
      </main>
    </div>
  );
}

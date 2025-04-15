import { FaHeart, FaShareAlt, FaUserCircle } from 'react-icons/fa';
import Button from '../../shared/ui/Button';
import readImg from './img/img1.jpg';
import './ReadPage.css';
import { usePageContext } from '../../app/providers/PageContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/**
 * 날짜를 'YYYY년 M월 D일' 형식으로 변환하는 함수
 * @param {string} dateString - ISO 형식의 날짜 문자열 (예: '2024-03-31T00:00:00.000Z')
 * @returns {string} 변환된 날짜 문자열 (예: '2024년 3월 31일')
 */
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  return `${year}년 ${month}월 ${day}일`;
};

/**
 * 임시 데이터 구조 (실제로는 API에서 가져와야 함)
 * @typedef {Object} PostData
 * @property {number} id - 포스트 고유 ID
 * @property {string} title - 포스트 제목
 * @property {string} content - 포스트 내용 (줄바꿈 포함)
 * @property {Object} author - 작성자 정보
 * @property {string} author.username - 작성자 아이디
 * @property {string|null} author.profileImage - 프로필 이미지 URL
 * @property {string} author.bio - 작성자 소개
 * @property {boolean} author.isFollowing - 현재 사용자의 팔로우 여부
 * @property {string} createdAt - 작성일 (YYYY.MM.DD 형식)
 * @property {string[]} tags - 태그 목록
 * @property {number} likes - 좋아요 수
 * @property {Object[]} comments - 댓글 목록
 */

// read ==> posts/{id}
const mockPostData = {
  id: 1,
  title: 'KakaoDevelopers를 활용한 만우절 장난치기',
  content: '안녕하세요! 오늘은 만우절을 맞아 카카오 개발자 API를 활용한 장난을 준비해봤습니다.\n\n이번 프로젝트에서는 카카오톡 메시지 API를 활용하여...',
  author: {
    username: 'zzae_zze',
    profileImage: null,
    bio: '개발자 블로거입니다.',
    isFollowing: false
  },
  createdAt: '2024-03-31T00:00:00.000Z',  // ISO 형식으로 변경
  tags: ['카카오', '만우절', '개발'],
  likes: 30,
  comments: [
    {
      id: 1,
      author: '댓글 작성자',
      content: '재미있는 프로젝트네요!',
      createdAt: '2024-03-31T00:00:00.000Z'  // ISO 형식으로 변경
    },
    {
      id: 2,
      author: '개발자A',
      content: '카카오 API 활용이 정말 유용하네요. 좋은 글 감사합니다!',
      createdAt: '2024-04-01T10:30:00.000Z'
    },
    {
      id: 3,
      author: '디자이너B',
      content: '만우절 장난 아이디어가 창의적이에요. 다음에도 이런 글 기대합니다!',
      createdAt: '2024-04-01T15:45:00.000Z'
    },
    {
      id: 4,
      author: '기획자C',
      content: '실제로 적용해보니 정말 효과적이었어요. 추천합니다!',
      createdAt: '2024-04-02T09:15:00.000Z'
    }
  ]
};

/**
 * 포스트 상세 페이지 컴포넌트
 * @returns {JSX.Element} 포스트 상세 페이지 UI
 */
export default function ReadPage() {
  // URL에서 postId 파라미터 추출 (예: /read/1)
  const { postId } = useParams();
  
  // 포스트 데이터 상태 관리
  const [post, setPost] = useState(mockPostData);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // 헤더 정보를 업데이트하기 위한 Context
  const { setPageInfo } = usePageContext();
  
  /**
   * 컴포넌트 마운트 시 실행되는 효과
   * - 포스트 데이터 로드
   * - 헤더 정보 업데이트
   */
  useEffect(() => {
    // 실제 구현 시 API 호출 로직
    // const fetchPost = async () => {
    //   try {
    //     setIsLoading(true);
    //     const response = await fetch(`/api/posts/${postId}`);
    //     const data = await response.json();
    //     setPost(data);
    //   } catch (err) {
    //     setError(err);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchPost();

    // 헤더 정보 업데이트
    setPageInfo({
      title: 'B',
      author: post.author.username,
      isHome: false
    });
    
    // 컴포넌트 언마운트 시 헤더 정보 초기화
    return () => {
      setPageInfo({
        title: 'Banana',
        author: null,
        isHome: true
      });
    };
  }, [postId, post.title, post.author.username]);

  // 로딩 및 에러 상태 처리
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="read-page">
      {/* 1. 포스트 상단 영역: 제목, 작성자 정보, 태그 */}
      <section className="post-header">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <div className="author-info">
            {/* 프로필 이미지가 있으면 이미지 표시, 없으면 기본 아이콘 */}
            {post.author.profileImage ? (
              <img src={post.author.profileImage} alt={post.author.username} className="author-avatar" />
            ) : (
              <FaUserCircle className="author-avatar" />
            )}
            <div className="author-details">
              <span className="author-name">{post.author.username}</span>
              <span className="post-date">{formatDate(post.createdAt)}</span>
            </div>
          </div>
          {/* 팔로우 상태에 따라 버튼 텍스트 변경 */}
          <Button 
            className="follow-btn" 
            size="m" 
            value={post.author.isFollowing ? "팔로잉" : "팔로우"} 
          />
        </div>
        {/* 태그 목록 렌더링 */}
        <div className="post-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">#{tag}</span>
          ))}
        </div>
      </section>

      {/* 2. 컨텐츠 영역: 포스트 내용과 반응 버튼 */}
      <section className="post-content">
        <div className="content-wrapper">
          {/* 줄바꿈 기준으로 내용을 단락으로 분리하여 렌더링 */}
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <img src={readImg} alt={post.title} className="content-image" />
        </div>
        {/* 좋아요, 공유 버튼 */}
        <div className="reaction-buttons">
          <button className="reaction-btn">
            <FaHeart />
            <span>{post.likes}</span>
          </button>
          <button className="reaction-btn">
            <FaShareAlt />
          </button>
        </div>
      </section>

      {/* 3. 작성자 프로필 영역 */}
      <section className="author-profile">
        <div className="profile-info">
          {/* 프로필 이미지 처리 */}
          {post.author.profileImage ? (
            <img src={post.author.profileImage} alt={post.author.username} className="profile-avatar" />
          ) : (
            <FaUserCircle className="profile-avatar" />
          )}
          <div className="profile-details">
            <h3>{post.author.username}</h3>
            <p>{post.author.bio}</p>
          </div>
        </div>
        {/* 팔로우 버튼 */}
        <Button 
          className="follow-btn" 
          size="m" 
          value={post.author.isFollowing ? "팔로잉" : "팔로우"} 
        />
      </section>

      {/* 4. 댓글 작성 폼 */}
      <section className="comment-form">
        <textarea placeholder="댓글을 작성하세요" />
        <Button className="submit-comment" size="m" value="댓글 작성" />
      </section>

      {/* 5. 댓글 목록 */}
      <section className="comments">
        {post.comments.map((comment) => (
          <div key={comment.id} className="comment">
            <FaUserCircle className="comment-avatar" />
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-date">{formatDate(comment.createdAt)}</span>
              </div>
              <p>{comment.content}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
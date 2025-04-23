import { FaHeart, FaShareAlt, FaUserCircle } from 'react-icons/fa';
import Button from '../../shared/ui/Button';
import './ReadPage.css';
import { usePageContext } from '../../app/providers/PageContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentArea from '../../shared/ui/Comment';

export default function ReadPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setPageInfo } = usePageContext();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:8080/api/read/${postId}`);
        if (!response.ok) {
          throw new Error("게시글을 불러오는 데 실패했습니다.");
        }
        const data = await response.json();
        setPost(data);
        setPageInfo({
          title: 'B',
          author: data.userNick,
          isHome: false,
        });
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();

    return () => {
      setPageInfo({
        title: 'Banana',
        author: null,
        isHome: true,
      });
    };
  }, [postId, setPageInfo]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!post) return null;

  return (
    <main className="read-page">
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
          <Button
            className="follow-btn"
            size="m"
            value="팔로우"
          />
        </div>
      </section>

      <section className="post-content">
        <div className="content-wrapper">
          {post.postContent.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {post.thumbnail && (
            <img src={post.thumbnail} alt={post.postTitle} className="content-image" />
          )}
        </div>
        <div className="reaction-buttons">
          <button className="reaction-btn">
            <FaHeart />
            <span>{post.likeCount}</span>
          </button>
          <button className="reaction-btn">
            <FaShareAlt />
          </button>
        </div>
      </section>

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
        <Button
          className="follow-btn"
          size="m"
          value="팔로우"
        />
      </section>

      <section className="comment-form">
        <textarea placeholder="댓글을 작성하세요" />
        <Button className="submit-comment" size="m" value="댓글 작성" />
      </section>

      <section className="comments">
        {post.comments?.map((comment) => (
          <CommentArea
            key={comment.commentId}
            author={comment.userNick}
            createdAt={comment.createdAt}
            content={comment.content}
          />
        ))}
      </section>
    </main>
  );
}

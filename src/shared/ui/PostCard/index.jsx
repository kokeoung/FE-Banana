import './PostCard.css';
import { Link } from 'react-router-dom';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

export default function PostCard({postId, postTitle,postContent,imageUrl,createDate,likeCount,children}){

  return(<>
  <Link href={`/posts/${postId}`} className="postcard-link"></Link>
    <div className="postcard-card">
      <div className="postcard-header">
        <img src={imageUrl} className="postcard-img"/>
      </div>
      <div className="postcard-main">
        <div className="postcard-title">{postTitle}</div>
        <div className="postcard-content">{postContent}</div>
        <div className="postcard-date">{createDate}</div>
      </div>
      <div className="postcard-footer">

        <div>{children}</div>
        <div className="postcard-like">
          <div>🖤</div>
          <div className="postcard-likes">{likeCount}</div>

        </div>
      </div>
    </div>
  </>)
}
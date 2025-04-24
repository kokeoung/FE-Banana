import React from 'react';
import './comment.css';
import '../../../pages/ReadPage/index'
import { useNavigate } from 'react-router-dom';

export default function CommentArea({author,userId,userProfileImage,createdAt,content,onReplyClick,onDeleteClick,isMyComment,}) {

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/my/${userId}`); 
  };

  return (
    <div className="comment">
      <div className="comment-content">
        <div className="comment-header" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
            <img className="profile-image" src={userProfileImage} alt="유저 이미지" />
          <span className="comment-author">{author}</span>
          <span className="comment-date">{createdAt}</span>
        </div>
        <p>{content}</p>
        <div className="comment-footer">
            <button className="comment-delete" onClick={onDeleteClick}>삭제</button>
        </div>
      </div>
    </div>
  );
}

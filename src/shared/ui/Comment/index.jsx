import React from 'react';
import './comment.css';
import '../../../pages/ReadPage/index'
import { useNavigate } from 'react-router-dom';
import defaultImage from '../../../app/assets/userprofile.png';

export default function CommentArea({author,userId,userProfileImage,createdDateTime,content}) {
  
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/my/${userId}`); 
  };

  return (
    <div className="comment">
      <div className="comment-content">
        <div className="comment-header" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
            <img className="profile-image" src={userProfileImage || defaultImage} alt="유저 이미지" />
          <span className="comment-author">{author}</span>
          <span className="comment-date">{createdDateTime}</span>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
}

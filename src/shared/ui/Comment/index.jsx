import React from 'react';
import './comment.css';
import '../../../pages/ReadPage/index'



import {  FaUserCircle } from 'react-icons/fa';









export default function CommentArea({author,createdAt,content}){
  
  return ( 
<>
      <div className="comment">
                <FaUserCircle className="comment-avatar" />
                <div className="comment-content">
                  <div className="comment-header">
                    <span className="comment-author">{author}</span>
                    <span className="comment-date">{createdAt}</span>
                  </div>
                  <p>{content}</p>
                </div>
              </div>
    </>    
  );

}
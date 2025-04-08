<<<<<<< HEAD
import "./PostCard.css"
=======
import './PostCard.css';
>>>>>>> 4588d8b79a5fcf2dd8cc967f9d8dade0e41b4e64

export default function PostCard({title,imageUrl,createdAt,likes,children}){

  return(<>
    <div className="post-card">
      <div className="post-header">
        <img src={imageUrl} className="post-img"/>
      </div>
      <div className="post-main">
        <div className="post-title">{title}</div>
        <div className="post-date">{createdAt}</div>
      </div>
      <div className="post-footer">
<<<<<<< HEAD
        <div className="post-child">{children}</div>
        <div className="post-likes">
          <div>❤</div>
          <div>{likes}</div>
=======
        <div>{children}</div>
        <div className="post-like">
          <div>🖤</div>
          <div className="post-likes">{likes}</div>
>>>>>>> 4588d8b79a5fcf2dd8cc967f9d8dade0e41b4e64
        </div>
      </div>
    </div>
  </>)
}
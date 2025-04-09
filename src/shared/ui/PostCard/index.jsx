import './PostCard.css';


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

        <div>{children}</div>
        <div className="post-like">
          <div>🖤</div>
          <div className="post-likes">{likes}</div>

        </div>
      </div>
    </div>
  </>)
}
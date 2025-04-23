import './PostCard.css';


export default function PostCard({title,imageUrl,createdAt,likes,children}){
  
  return(<>
    <div className="postcard-card">
      <div className="postcard-header">
        <img src={imageUrl} className="postcard-img"/>
      </div>
      <div className="postcard-main">
        <div className="postcard-title">{title}</div>
        <div className="postcard-date">{createdAt}</div>
      </div>
      <div className="postcard-footer">

        <div>{children}</div>
        <div className="postcard-like">
          <div>🖤</div>
          <div className="postcard-likes">{likes}</div>

        </div>
      </div>
    </div>
  </>)
}
import "./MyPostCard.css"

export default function MyPostCard({imageUrl,title,content,createdAt,liked}){
  return(<>
    <div className="mypostcard-container">
      <div className="mypostcard-header">
        <img src={imageUrl} alt="포스트 이미지" />
      </div>
      <div className="mypostcard-main">
        <div className="mypostcard-title">{title}</div>
        <div className="mypostcard-content">{content}</div>
      </div>
      <div className="mypostcard-footer">
        <div className="mypostcard-date">{createdAt}</div>
        <span>&nbsp;·&nbsp;</span>
        <div className="mypostcard-liked">
          <div>❤</div>
          
          <div>{liked}</div>
        </div>
      </div>
    </div>
  </>)
}
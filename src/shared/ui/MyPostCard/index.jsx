import { Slice } from "lucide-react"
import "./MyPostCard.css"

export default function MyPostCard({thumbnail,postTitle,postContent,createDateTime,likeCount}){
  const previewText = (postContent.length > 150)?postContent.slice(0, 150) + "...":postContent;
  return(<>
    <div className="mypostcard-container">
      <div className="mypostcard-header">
        <img src={thumbnail} alt="포스트 이미지" />
      </div>
      <div className="mypostcard-main">
        <div className="mypostcard-title">{postTitle}</div>
        <div className="mypostcard-content">{previewText}</div>
      </div>
      <div className="mypostcard-footer">
        <div className="mypostcard-date">{createDateTime}</div>
        <span>&nbsp;·&nbsp;</span>
        <div className="mypostcard-liked">
          <div>❤</div>
          
          <div>{likeCount}</div>
        </div>
      </div>
    </div>
  </>)
}
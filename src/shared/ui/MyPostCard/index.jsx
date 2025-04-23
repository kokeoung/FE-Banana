import { Slice } from "lucide-react"
import "./MyPostCard.css"

export default function MyPostCard({imageUrl,title,content,createdAt,liked}){

  const cleanedText = content.replace(/!\[.*?\]\(data:image\/.*?\)/g, '');
  const previewText = (cleanedText.length > 150)?cleanedText.slice(0, 150) + "...":cleanedText;
  const time = createdAt.split('T')[0];
  return(<>
    <div className="mypostcard-container">
      <div className="mypostcard-header">
        <img src={imageUrl} alt="포스트 이미지" />
      </div>
      <div className="mypostcard-main">
        <div className="mypostcard-title">{title}</div>
        <div className="mypostcard-content">{previewText}</div>
      </div>
      <div className="mypostcard-footer">
        <div className="mypostcard-date">{time}</div>
        <span>&nbsp;·&nbsp;</span>
        <div className="mypostcard-liked">
          <div>❤</div>
          
          <div>{liked}</div>
        </div>
      </div>
    </div>
  </>)
}
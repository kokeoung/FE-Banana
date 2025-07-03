import "./MyPostCard.css"
import defaultImage from "../../../app/assets/default_background.svg"

export default function MyPostCard({thumbnail,postTitle,postContent,createDateTime,likeCount}){

  const cleanedText = postContent.replace(/<[^>]*>/g, "");
  const previewText = (cleanedText.length > 150)?cleanedText.slice(0, 150) + "...":cleanedText;
  const time = createDateTime.split('T')[0];

  return(<>
    <div className="mypostcard-container">
      <div className="mypostcard-header">
        <img src={thumbnail || defaultImage} alt="포스트 이미지" />
      </div>
      <div className="mypostcard-main">
        <div className="mypostcard-title">{postTitle}</div>
        <div className="mypostcard-content">{previewText}</div>
      </div>
      <div className="mypostcard-footer">
        <div className="mypostcard-date">{time}</div>
        <span>&nbsp;·&nbsp;</span>
        <div className="mypostcard-liked">
          <div>❤</div>          
          <div>{likeCount}</div>
        </div>
      </div>
    </div>
  </>)
}
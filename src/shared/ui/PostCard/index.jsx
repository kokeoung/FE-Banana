import './PostCard.css';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

export default function PostCard({postTitle,postContent,thumbnail,createDateTime,likeCount,children}){

  const cleanedText = postContent.replace(/<[^>]*>/g, "");
  const previewText = (cleanedText.length > 150)?cleanedText.slice(0, 150) + "...":cleanedText;

  return(<>
    <div className="postcard-card">
      <div className="postcard-header">
        <img src={thumbnail} className="postcard-img"/>
      </div>
      <div className="postcard-main">
        <div className="postcard-title">{postTitle}</div>
        <div className="postcard-content">{previewText}</div>
        <div className="postcard-date">{formatDate(createDateTime)}</div>
      </div>
      <div className="postcard-footer">
        <div>{children}</div>
        <div className="postcard-like">
          <div>🖤</div>
          <div className="postcard-likes">{likeCount}</div>
        </div>
      </div>
    </div>
  </>)
}
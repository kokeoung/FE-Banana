import './SearchPostCard.css';


export default function SearchPostCard({ postTitle, postContent, thumbnail, createDateTime, likeCount, comments, children }) {

  const formatDate = (dateStr) => {
    const date = new Date(dateStr+"T00:00:00");
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  };

  return (<>

    <div className="search-post-card">
      <div className="search-post-user">
        <div className="search-post-profile">{children}</div>
      </div>
      <img
        src={thumbnail}
        alt="썸네일"
        className="search-post-thumbnail"
        onError={(e) => (e.target.style.display = 'none')} // 이미지 오류 처리
      />

      <div className="search-post-content">
        <h3 className="search-post-title">{postTitle}</h3>

        {/* <p className="search-post-date">{createdAt}</p> */}
        {/* <div className="search-post-footer"> */}
        <p className="search-post-excerpt">{postContent}</p>
        <div className="search-post-meta">
          {formatDate(createDateTime)} · {comments}개의 댓글 · 🖤 {likeCount}
        </div>
      </div>
    </div>

  </>)
}
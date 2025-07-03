import { Link } from 'react-router-dom';
import './SearchPostCard.css';


export default function SearchPostCard({ postId, postTitle, postContent, thumbnail, createDateTime, likeCount, comments, children }) {

  const cleanedText = postContent.replace(/!\[.*?\]\(data:image\/.*?\)/g, '');
  const previewText = (cleanedText.length > 150) ? cleanedText.slice(0, 150) + "..." : cleanedText;

  //게시글 검색 시, 글 작성 시간 현재 기준으로 상대적 날짜 표시
  const formatDate = (dateStr) => {
    const now = new Date();
    const target = new Date(dateStr);
    const diffMs = now - target;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.round(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);

    if (diffHour < 24 && now.toDateString() === target.toDateString()) {
      //같은 날이면 시간 단위로 표시해 줌
      if (diffSec < 30) return `방금 전`; //30초 이내면 '방금 전'
      if (diffMin < 60) return `약 ${diffMin}분 전`; //반올림
      return `약 ${diffHour}시간 전`;
    }
    //1~3일 이내면 n일 전으로 표시
    if (diffDay >= 1 && diffDay <= 3) {
      return `${diffDay}일 전`;
    }
    //3일 이상이면 날짜 단위로 표시
    return target.toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (<>

    <div className="search-post-card">
      <div className="search-post-user">
        <div className="search-post-profile">{children}</div>
      </div>
      <div className="search-post-img">
        <img
          src={thumbnail}
          alt="썸네일"
          className="search-post-thumbnail"
          onError={(e) => (e.target.style.display = 'none')} // 이미지 오류 처리
        />
      </div>
      <div className="search-post-content">
        <h3 className="search-post-title">
          <Link to={`/posts/${postId}`}>{postTitle}</Link>
        </h3>

        {/* <p className="search-post-date">{createdAt}</p> */}
        {/* <div className="search-post-footer"> */}
        <p className="search-post-excerpt">{previewText}</p>
        <div className="search-post-meta">
          {formatDate(createDateTime)} · {comments ?? 0}개의 댓글 · 🖤 {likeCount}
        </div>
      </div>
    </div>

  </>)
}
import './SearchUserProfile.css';

export default function SearchUserProfile({ profileImage, nickname }) {
  return (<>
    <div className="search-profile-container">
      <img
        src={profileImage}
        className="search-profile-img"
        onError={(e) => (e.target.src = 'https://via.placeholder.com/32')} // fallback 이미지
      />
      <span className="search-profile-nickname">{nickname}</span>
    </div>
  </>)
}
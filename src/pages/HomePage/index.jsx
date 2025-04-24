import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PostCard from '../../shared/ui/PostCard';
import UserProfile from '../../shared/ui/UserProfile';
import FilterDropdown from '../../shared/ui/FilterDropdown';
import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
    .then((res) => res.json())
    .then((data) => {
      console.log("받은 포스트 데이터: ", data);
      setPosts(data);
    })
    .catch((error) => {
      console.log("포스트 데이터 가져오기 실패: ", error)
    });
    console.log(posts)
  }, []);

  return (
    <div className="content-wrapper">
      <div className="filter-area" ref={dropdownRef}>
        <FilterDropdown
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          onChange={(value) => {
            console.log("선택된 필터:", value);
          }}
        />
      </div>

      <div className="post-list-container">
        {posts.map((post) => (
          <div
            key={post.postId}
            onClick={() => navigate(`/posts/${post.postId}`)}
            style={{ cursor: 'pointer' }}
          >
          <PostCard
            key={post.postId}
            postTitle={post.postTitle}
            postContent={post.postContent}
            thumbnail={post.thumbnail}
            createDateTime={post.createDateTime}
            likeCount={post.likeCount}
          >
            <Link 
              to={`/my/${post.userId}/posts`}
              onClick={(e) => e.stopPropagation()}>
              <UserProfile
                userProfileImage={post.userProfileImage}
                userNick={post.userNick}
              />
            </Link>
          </PostCard>
          </div>
        ))}
      </div>
    </div>
  );
}

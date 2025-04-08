import { Button } from 'react-bootstrap';
import PostCard from '../../shared/ui/PostCard';
import UserProfile from '../../shared/ui/UserProfile'
import './HomePage.css';

const dummyPosts = [
  {
    id: 1,
    title: '테스트1',
    imageUrl: 'https://mblogthumb-phinf.pstatic.net/20120615_30/snaps1_1339721440666NgJXG_JPEG/%BA%B0%BB%E7%C1%F8%C0%DF%C2%EF%B4%C2%B9%FD%B9%E3%BE%DF%B0%E6%BB%E7%C1%F8%C0%DF%C2%EF%B4%C2%B9%FD.jpg?type=w420',
    createdAt: '2025년 04월 06일',
    profileImage: 'https://i.pinimg.com/236x/a8/5e/d1/a85ed1aadc527bfad8b805d62564b254.jpg',
    nickname: '테스터1',
    likes: 12,
  },
  {
    id: 2,
    title: '테스트2',
    imageUrl: 'https://via.placeholder.com/320x180',
    createdAt: '2025년 04월 06일',
    likes: 8,
  },
  {
    id: 3,
    title: '테스트3',
    imageUrl: 'https://via.placeholder.com/320x180',
    createdAt: '2025년 04월 06일',
    likes: 15,
  },
  {
    id: 4,
    title: '테스트4',
    imageUrl: 'https://via.placeholder.com/320x180',
    createdAt: '2025년 04월 06일',
    likes: 20,
  },
  {
    id: 5,
    title: '테스트5',
    imageUrl: 'https://via.placeholder.com/320x180',
    createdAt: '2025년 04월 06일',
    likes: 34,
  },
  {
    id: 6,
    title: '테스트6',
    imageUrl: 'https://via.placeholder.com/320x180',
    createdAt: '2025년 04월 06일',
    likes: 34,
  },
  {
    id: 7,
    title: '테스트7',
    imageUrl: 'https://via.placeholder.com/320x180',
    createdAt: '2025년 04월 06일',
    likes: 34,
  },
  {
    id: 8,
    title: '테스트8',
    imageUrl: 'https://via.placeholder.com/320x180',
    createdAt: '2025년 04월 06일',
    likes: 34,
  },
  {
    id: 9,
    title: '테스트9',
    imageUrl: 'https://via.placeholder.com/320x180',
    createdAt: '2025년 04월 06일',
    likes: 34,
  },
  {
    id: 10,
    title: '테스트10',
    imageUrl: 'https://via.placeholder.com/320x180',
    createdAt: '2025년 04월 06일',
    likes: 34,
  },
];

export default function HomePage(){

  return (
    <>
      <div className="post-list-container">
        {dummyPosts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            imageUrl={post.imageUrl}
            createdAt={post.createdAt}
            likes={post.likes}
          >
            <UserProfile
              profileImage={post.profileImage}
              nickname={post.nickname}
            >  
            </UserProfile>
          </PostCard>
        ))}
      </div>
    </>
  );
}

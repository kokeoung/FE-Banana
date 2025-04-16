import './SearchResults.css'
import '../SearchPage/SearchDummy.js'
import { useSearchParams } from 'react-router-dom'
import PostCard from '../../shared/ui/PostCard'
import UserProfile from '../../shared/ui/UserProfile'
import useDummyPosts from '../SearchPage/SearchDummy.js'

export default function SearchResults() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q')?.toLowerCase() || '';

    const posts = useDummyPosts((state) => state.post);

    //검색어로 필터링
    const results = query
        ? posts.filter((post) =>
            post.title.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    return (<>
        <div>
            {query && results.length > 0 && (
                <p className="search-message">
                    총 <strong>{results.length}</strong>개의 포스트를 찾았습니다.
                </p>
            )}
        </div>
        <div>
            {results.length > 0 ? (
                results.map((post) => (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        imageUrl={post.imageUrl}
                        createdAt={post.createdAt}
                        likes={post.likes}
                    >
                        <UserProfile
                            profileImage={post.profileImage}
                            nickname={post.nickname} />
                    </PostCard>
                ))
            ) : query !== '' ? (
                <div className="no-results">
                    검색 결과가 없습니다.</div>
            ) : null}
        </div>
    </>)
};
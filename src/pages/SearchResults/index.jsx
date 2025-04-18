import './SearchResults.css'
import { useSearchParams } from 'react-router-dom'
import SearchPostCard from '../../shared/ui/SearchPostCard/index.jsx';
import SearchUserProfile from '../../shared/ui/SearchUserProfile/index.jsx';
import useDummyPosts from '../SearchPage/SearchDummy.js'


export default function SearchResults() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q')?.toLowerCase() || '';
    const posts = useDummyPosts((state) => state.post);
    const authors = useDummyPosts((state) => state.authors);

    //검색어로 필터링
    const results = query
        ? posts.filter((post) =>
            post.title.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    return (<>
        <div className="search-results">
            <div className="search-results-wrap">
                {/* 검색 결과 메세지 */}
                {query && results.length > 0 && (
                    <div className="search-message-wrap">
                        <p className="search-message">
                            총 <strong>{results.length}개</strong>의 포스트를 찾았습니다.
                        </p>
                    </div>
                )}
                {/* 검색 결과 리스트 */}
                {results.length > 0 ? (
                    <div className="search-result-list">
                        {results.map((post, index) => (
                            <div key={post.id} className="search-result-item">
                                <SearchPostCard
                                    key={post.id}
                                    title={post.title}
                                    content={post.content}
                                    imageUrl={post.imageUrl}
                                    createdAt={post.createdAt}
                                    likes={post.likes}
                                    comments={post.comments}
                                >
                                    <SearchUserProfile
                                        profileImage={authors[post.authorId].avatar}
                                        nickname={authors[post.authorId].name} />
                                </SearchPostCard>
                                {index !== results.length - 1 && ( // 마지막 카드 제외
                                    <div className="search-result-divider"></div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : query !== '' ? (
                    <div className="no-results">
                        검색 결과가 없습니다.</div>
                ) : null}
            </div>
        </div>
    </>)
};
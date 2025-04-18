import { Search } from "lucide-react";
import './SearchBar.css'
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchResults from "../SearchResults";

export default function SearchPage() {
  const [isFocused, SetIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); //검색어 상태
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const inputRef=useRef(null);

  const isSearching = !!searchParams.get('q'); //검색어가 있을 경우 true

  //URL의 q 파라미터 값과 상태 동기화
  useEffect(() => {
    const query = searchParams.get('q') || '';
    setSearchTerm(query);
  }, [searchParams]);

  //검색어 엔터 없이 자동 반영, navigate 과다 호출 방지 debounce
  useEffect(() => {
    const currentQuery = searchParams.get('q');
    //처음 진입 상태에서 searchTerm도 ''이고 q도 없으면 아무것도 안 함
    if (searchTerm === '' && currentQuery === null) return;
    //현재와 동일한 상태라면 이동 안 함
    if (searchTerm === currentQuery) return;

    const delay = setTimeout(() => {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }, 500); //500ms 후 자동 반영

    return () => clearTimeout(delay); //cleanup : 타이머 중복 제거
  }, [searchTerm, navigate, searchParams]);

  //화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //화면 크기에 따른 strokeWidth 설정
  //768px 이상일 때는 아이콘 크기 1.3, 그 외엔 1.0
  const dynamicStrokeWidth = windowWidth >= 768 ? 1.3 : 1.0;

  //검색창 색깔 변경
  const getBorderColor = () => {
    if (isFocused) return '1px solid #adb5bd'; //클릭 & 검색 중
    return '1px solid #212529';  //기본 상태
  }
  //클릭 시 input 포커스 처리 함수
  const handleWrapperClick=()=>{
    inputRef.current?.focus();
  }


  return (<>
    <div className="search-wrap">
      <div className="search-container">
        <form 
        className="search-bar" 
        onClick={handleWrapperClick} 
        onSubmit={(e) => e.preventDefault()} //폼 동작 방지
          style={{
            border: getBorderColor(),
            transition: 'border 0.3s ease-in-out'
          }}
        >
          <Search className="search-icon" size={window.innerWidth < 768 ? 20 : 30}
            style={{ strokeWidth: dynamicStrokeWidth }} />
          <input
            className="search-input"
            type="text"
            placeholder="검색어를 입력하세요"
            onFocus={() => SetIsFocused(true)} //클릭하면 true
            onBlur={() => SetIsFocused(false)} //포커스 벗어나면 false
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={inputRef}
          />
        </form>
      </div>
      {isSearching && <SearchResults />}
    </div>
  </>)
}
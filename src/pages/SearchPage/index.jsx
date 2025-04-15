import { Search } from "lucide-react";
import './SearchBar.css'
import { useEffect, useState } from "react";

export default function SearchPage() {
  const [isFocused, SetIsFocused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  return (<>
    <div className="search-container">
      <form className="search-bar" onSubmit={() => false}
        style={{
          border: isFocused ? '1px solid #212529' : '1px solid #adb5bd',
          transition: 'border 0.3s ease-in-out'
        }}
      >
        <Search className="search-icon" size={window.innerWidth < 768 ? 20 : 30}
          style={{ strokeWidth: dynamicStrokeWidth }} />
        <input className="search-input"
          type="text"
          placeholder="검색어를 입력하세요"
          onFocus={() => SetIsFocused(true)} //클릭하면 true
          onBlur={() => SetIsFocused(false)} //포커스 벗어나면 false
        />
      </form>
    </div>
  </>)
}
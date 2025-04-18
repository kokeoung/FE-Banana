// src/app/providers/PageContext.jsx
import { createContext, useState, useContext } from 'react';

// 페이지 정보를 관리할 Context 생성
const PageContext = createContext();

// Context를 쉽게 사용할 수 있는 커스텀 훅
export const usePageContext = () => useContext(PageContext);

// 페이지 정보를 제공하는 Provider 컴포넌트
export const PageProvider = ({ children }) => {
  // 페이지 정보를 관리할 상태
  const [pageInfo, setPageInfo] = useState({
    title: 'Banana',      // 기본 타이틀
    author: null,         // 작성자 정보
    isHome: true          // 홈페이지 여부
  });

  return (
    // Context Provider로 자식 컴포넌트들에게 pageInfo와 setPageInfo 제공
    <PageContext.Provider value={{ pageInfo, setPageInfo }}>
      {children}
    </PageContext.Provider>
  );
};
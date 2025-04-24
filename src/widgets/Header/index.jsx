import './Header.css';
import { CgSearch } from "react-icons/cg";
import DefaultImage from "../../app/assets/userprofile.png";


import { usePageContext } from '../../app/providers/PageContext';  // Context 훅 import

import { Link, useNavigate } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import Button from '../../shared/ui/Button';


const filterOptions = ['내 블로그', '새 글 작성', '임시 글', '로그아웃'];

export default function Header() {

  // 로그인 사라지게 하는 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile,setUserProfile] =  useState("");
  const user = localStorage.getItem('user');
  const userData = JSON.parse(user);

  useEffect(() => {
    async function fetchProfile(){
      try {
        const url = `http://localhost:8080/api/header`;
        const sendData = {
            userId: userData.userId,
        }
        const init = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(sendData)
        }
        const response = await fetch(url, init);
        const data = await response.text();
        console.log("유저 프로필 입니다",data);
        setUserProfile(data);
      } catch (err) {
        // setError(err);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchProfile();
    setIsLoggedIn(user);
  }, []);

  const handleLogin = () => {
    // 여기서 직접 로그인 처리
    localStorage.setItem('id', JSON.stringify({ name: 'nick' }));
    setIsLoggedIn(true); 
  };
  const { pageInfo } = usePageContext();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleWriteClick = () => {
    navigate('/write');
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  const handleLoginClick = () => {
    navigate('/auth')
    
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  

  const handleOptionClick = (option) => {
    setIsDropdownOpen(false);
    if (option === '내 블로그') navigate(`/my/${userData.userId}/posts`);
    else if (option === '새 글 작성') navigate('/write');
    else if (option === '임시 글'); // 임시로 마이페이지로 설정 
    else if (option === '로그아웃') {
      const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
      if (confirmLogout) { 
        
        localStorage.removeItem('user');      // 저장된 로그인 정보 삭제
        setIsLoggedIn(false ,true);                 // 상태 업데이트해서 버튼 바꾸기
        navigate('/'); 
      }
     
  
    } else  {
      console.log("로그아웃 취소");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return(<>
  <header className='header'>
  <p className='header-titie'>
      {/* 홈페이지면 'Banana', 아니면 포스트 제목과 작성자 표시 */}
      {pageInfo.isHome ?
        (<Link to="/">Banana</Link>) : 
        (
          <>
            <Link to="/"><span className='header-titie-author'>{pageInfo.title}</span></Link>
            {/* 작성자가 있으면 @작성자명 표시 */}
            {pageInfo.author && (
              <span className="author-link">@{pageInfo.author}</span>
            )}
          </>
        )}
    </p>
    
    <section className='header-buttons'>
        <div className='headersearch-icon'>
            <button className='search-button' onClick={handleSearchClick}><CgSearch /></button>
        </div>
        {isLoggedIn? ( <>
          <div className='pageadd-btn'>
            <Button size={"m"}  value="새 글 작성" onClick={handleWriteClick}/> 
          </div>

          <div className='user-icon' >
            <img src={userProfile || DefaultImage} alt="유저프로필" />
          </div>

          <div className='header-filter' ref={dropdownRef}>
                  <button className="dropdown-toggle" onClick={toggleDropdown}>
                    <FaAngleDown />
                  </button>

                  {isDropdownOpen && (
                    <div className="dropdown-menu">
                      {filterOptions.map(option => (
                        <div key={option} className="dropdown-item" onClick={() => handleOptionClick(option)}>
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
            </div>
        </>   ) : (
          <>
          <div className='login-btn'> 
            <Button size={"m"} value="로그인" onClick={() =>{handleLoginClick(); handleLogin(); }}/>
          </div>
          </>
        
        )} 
    </section>
    </header>
  </>)
}
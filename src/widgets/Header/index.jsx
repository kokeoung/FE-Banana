import './Header.css';
import { CgSearch } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
<<<<<<< HEAD
import { FaAngleDown } from "react-icons/fa";

import Button from '../../shared/ui/Button';
import { usePageContext } from '../../app/providers/PageContext';  // Context 훅 import
import { Link, useNavigate } from 'react-router-dom';



=======
import { useNavigate } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import Button from '../../shared/ui/Button';
>>>>>>> 084769fc2c2fd7a350db3ea6b1d1523e25d453b1

const filterOptions = ['내 블로그', '새 글 작성', '임시 글', '로그아웃'];

export default function Header(){
<<<<<<< HEAD
  // Context에서 현재 페이지 정보 가져오기


    const { pageInfo } = usePageContext();

    const navigate = useNavigate();

    const handleWriteClick = () => {
      navigate('/write');
    };

    const handleSearchClick = () => {
      navigate('/search');
    };

    const handleLoginClick = () => {
      navigate('/auth')
    };
    
=======
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
    if (option === '내 블로그') navigate('/my');
    else if (option === '새 글 작성') navigate('/write');
    else if (option === '임시 글') navigate('/my'); // 임시로 마이페이지로 설정 
    else if (option === '로그아웃') alert("로그아웃 처리"); // 나중에 로직 연결
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

>>>>>>> 084769fc2c2fd7a350db3ea6b1d1523e25d453b1
  return(<>
  <header className='header'>
    <h1 className='header-titie'>해더</h1>
    
      <section className='header-buttons'>

        <div className='headersearch-icon'>
          <button className='search-button' onClick={handleSearchClick}><CgSearch /></button>
        </div>

        <div className='pageadd-btn'>
          <Button size={"m"}  value="새 글 작성" onClick={handleWriteClick}/> 
        </div>

        <div className='login-btn'>
          <Button size={"m"} value="로그인" onClick={handleLoginClick}/>
        </div>

        <div className='user-icon' >
          <FaUserCircle />
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
<<<<<<< HEAD
        </>
      )}
    </p>
      
    

    
    <section className='header-buttons'>
    <div className='seach-icon'>
      
    <button className='search-button' onClick={handleSearchClick}><CgSearch /></button>
      
      
    
    </div>
    <div className='pageadd-btn'>

      
    <Button size={"m"}  value="새 글 작성" onClick={handleWriteClick}/> 

    </div>
    
    <div className='login-btn'>
      
      
    <Button size={"m"} value="로그인" onClick={handleLoginClick}/>
    </div>
    {/* 유저아이콘 버튼  클릭하면 유저 페이지 창 링크 이동 */}
    <div className='user-icon' >
      <FaUserCircle />

    </div>
    <div className='header-user-filter'>
    <FaAngleDown />
    <button>버튼 </button>
    </div>
    </section>
=======
        </div>
      </section>
>>>>>>> 084769fc2c2fd7a350db3ea6b1d1523e25d453b1
    </header>
  </>)
}
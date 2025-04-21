import './Header.css';
import { CgSearch } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import Button from '../../shared/ui/Button';

const filterOptions = ['내 블로그', '새 글 작성', '임시 글', '로그아웃'];

export default function Header(){
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
  
  if (option === '내 블로그') {
    if (user?.userId) {
      navigate(`/my/${user.userId}`);
    } else {
      alert("로그인 정보가 없습니다.");
    }
  } else if (option === '새 글 작성') {
    navigate('/write');
  } else if (option === '임시 글') {
    navigate('/my'); // 임시로 마이페이지로 설정
  } else if (option === '로그아웃') {
    localStorage.removeItem("user");
    alert("로그아웃 되었습니다");
    navigate("/");
  }


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
        </div>
      </section>
    </header>
  </>)
};
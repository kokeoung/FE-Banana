import './Header.css';
import { CgSearch } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { usePageContext } from '../../app/providers/PageContext';  // Context 훅 import
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import Button from '../../shared/ui/Button';


const filterOptions = ['내 블로그', '새 글 작성', '임시 글', '로그아웃'];

export default function Header(){

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
  
    const user = JSON.parse(localStorage.getItem("user"));
  
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
}
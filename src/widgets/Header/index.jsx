import './Header.css';
import { CgSearch } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/ui/Button';
import { usePageContext } from '../../app/providers/PageContext';  // Context 훅 import
import { Link, useNavigate } from 'react-router-dom';
import  SearchPage  from  '../../pages/SearchPage/index';
import { useState } from 'react';




export default function Header(){
  // Context에서 현재 페이지 정보 가져오기
  const { pageInfo } = usePageContext();

  const navigate = useNavigate();

  const handleWriteClick = () => {
    navigate('/write');
  };
  
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
    <div className='seach-icon'>
      
      <CgSearch />
      
      
    
    </div>
    <div className='pageadd-btn'>

      
    <Button size={"m"}  value="새 글 작성"/> 

    </div>
    <div className='login-btn'>
      
      
      <Button size={"m"} value="로그인"/>
    </div>
    <div className='user-icon' >
      <FaUserCircle />

    </div>
    <div className=''>
    <FaAngleDown/>
    </div>
    </section>
    </header>
  </>)
}
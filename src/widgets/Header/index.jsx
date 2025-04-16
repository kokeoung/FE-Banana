import './Header.css';
import { CgSearch } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/ui/Button';



export default function Header(){
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
  
  return(<>
  <header className='header'>
    <h1 className='header-titie'>해더</h1>
    
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
    <div className='user-icon' >
      <FaUserCircle />
    </div>
    <div>
    <FaAngleDown />
    </div>
    </section>
    </header>
  </>)
}
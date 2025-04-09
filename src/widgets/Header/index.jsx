import './Header.css';
import { CgSearch } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Button from '../../shared/ui/Button';



export default function Header(){
  {}
  return(<>
  <header className='header'>
    <h1 className='header-titie'>해더</h1>
    
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
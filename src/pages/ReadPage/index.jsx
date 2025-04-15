import { FaHeart, FaShareAlt } from 'react-icons/fa';
import Button from '../../shared/ui/Button';
import  readImg from './img/img1.jpg';
import './ReadPage.css';



export default function ReadPage(){
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  
  const formatted = `${year}.${month}.${day}`;
  
    

  


  return(<>
  <hr />
  <main>
  <section className='post-detail'> 
    {/* ////////////////////////////////////// */}
    <div className='post-detail-header'>
      <div className='title'>
        <title>게시물 읽기</title>
      </div>
      
      <div className='post-thumbnail'>
        <img />
      </div>
    </div>
    {/* ////////////////////////////////////// */}
    <div className='post-detail-content'>
        <h2 className='post-title'>게시물 제목</h2>
    </div>
    <div className="post-section">
  <div className="post-meta">
    <div className="user-info-box">
      <span className="username">유저 이름</span>
      <span className="date">{formatted}</span>
    </div>
    <div className="btn-group">
      <Button className="follow-btn" size="m" value="팔로잉" />
      <Button className="heart-btn" size="m" />
    </div>
  </div>
      
      
      <section className='cord-area'>
      <div className='image-wrapper'>
        <img src={readImg}  className='read-img1'/>
      </div>
      {/*버튼 영역*/ }
        <button className='btn-icon-panel'>
            <div className='btn-icon-Wrapper'>
              <FaHeart className='btn-icon' />
            </div>
            <div className='btn-icon-count'>30</div>
            <div className='btn-icon-Wrapper'>
              <FaShareAlt className='btn-icon' />
            </div>
        </button>
      
      </section>
    </div>  
    
    {/* ////////////////////////////////////// */}
  </section>
    </main>
  </>)
}
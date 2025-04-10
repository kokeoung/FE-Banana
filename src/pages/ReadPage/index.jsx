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
      <div className='post-medle-title'>
        <h2> </h2>
      </div>
      <div className='post-thumbnail'>
        <img />
      </div>
    </div>
    {/* ////////////////////////////////////// */}
    <div className='post-detail-content'>
        <p>게시물 제목</p>
    </div>
    <div className='post-information'>
      
      <div className='user-info'>
          <div className='username'>
            <span>유저 이름</span>
          </div>
        <span>&nbsp;&nbsp;{formatted}</span>
      </div>
      <div className='flow-btn'> 
      <Button size={"m"} value="팔로잉" />
      </div>
      <div className='heart-btn'>
      <Button size={"m"} className='btn-h2' />
      <section className='cord-area'>
      <div className='image-wrapper'>
        <img src={readImg}  className='read-img1'/>
      </div>
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
    </div>
    {/* ////////////////////////////////////// */}
  </section>
    </main>
  </>)
}
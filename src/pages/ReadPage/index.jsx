import Button from '../../shared/ui/Button';
import './ReadPage.css';
export default function ReadPage(){
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  
  const formatted = `${year}.${month}.${day}`;

  return(<>
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
      <div className='username'>
        <a>유저 이름</a>

      </div>
      <div className='separator'>
        <span>{formatted}</span>
      </div>
      <div className='flow-btn'> 
      <Button size={"s"} value="팔로잉"/>
      </div>
      <div className='heart-btn'>
      <Button size={"s"}/>
      </div>
      <div>
        
      </div>
    </div>
    {/* ////////////////////////////////////// */}
  </section>
    </main>
  </>)
}
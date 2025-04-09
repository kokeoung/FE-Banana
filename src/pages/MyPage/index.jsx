import { Link, Outlet } from "react-router-dom";
import "./MyPage.css"
import MyUserProfile from "../../shared/ui/MyUserProfile";
import img from "../../app/assets/cloud.png";
import { useState } from "react";

export default function MyPage(){
  const userName = "가나다라"
  const about = "간단한 자기소개를 해주세요"
  const [active,setActive] = useState({
    myli1:"",
    myli2:"",
    myli3:""
  })

  function handleClick(e){
    const {id} = e.currentTarget;
    setActive({myli1:"",myli2:"",myli3:""})
    setActive(prev => ({...prev,[id]:"active"}))
    console.log(active.myli1,active.myli2,active.myli3)
  }

  return(<>
    <div className="my-container">
      <div className="my-header">
        <div className="my-profile">
          <MyUserProfile profileImage={img} nickname={userName} about={about}/>
        </div>
      </div>
      <div className="my-main">
        <ul>
          <li className={`my-nav-${active.myli1}`} onClick={handleClick} id="myli1">
            <Link to={'/my/posts'}>글</Link>
          </li>
          <li className={`my-nav-${active.myli2}`} onClick={handleClick} id="myli2">
            <Link to={'/my/series'}>시리즈</Link>
          </li>
          <li className={`my-nav-${active.myli3}`} onClick={handleClick} id="myli3">
            <Link to={'/my/about'}>소개</Link>
          </li>
        </ul>
      </div>
      <div className="my-page">
        <Outlet />
      </div>
    </div>
  </>)
}
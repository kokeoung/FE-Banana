import { Link, Outlet, useParams } from "react-router-dom";
import "./MyPage.css"
import MyUserProfile from "../../shared/ui/MyUserProfile";
import img from "../../app/assets/cloud.png";
import { useEffect, useState } from "react";

export default function MyPage(){
  const { userId } = useParams();
  const [active,setActive] = useState({myli1:"",myli2:"",myli3:""});
  const [user,setUser] = useState([""]);

  useEffect(() => {
      
    async function fetchUser(){
      try {
        // setIsLoading(true);
        const url = `http://localhost:8080/api/my/${userId}`;
        const sendData = {
            userId: userId,
        }
        const init = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(sendData)
        }
        const response = await fetch(url, init);
        console.log(userId)
        const data = await response.json();
        setUser(data);
      } catch (err) {
        // setError(err);
      } finally {
        // setIsLoading(false);
      }
      };
      fetchUser();
  
      // 헤더 정보 업데이트
      // setPageInfo({
      //   title: 'B',
      //   author: post.author.username,
      //   isHome: false
      // });
      
      // 컴포넌트 언마운트 시 헤더 정보 초기화
      // return () => {
      //   setPageInfo({
      //     title: 'Banana',
      //     author: null,
      //     isHome: true
      //   });
    // };
  }, []);
  function handleClick(e){
    const {id} = e.currentTarget;
    setActive({myli1:"",myli2:"",myli3:""})
    setActive(prev => ({...prev,[id]:"active"}))
  }

  return(<>
    <div className="my-container">
      <div className="my-header">
        <div className="my-profile">
          <MyUserProfile profileImage={user.userProfile} nickname={user.userNick} about={user.userAbout}/>
        </div>
      </div>
      <div className="my-main">
        <ul>
          <li className={`my-nav-${active.myli1}`} onClick={handleClick} id="myli1">
            <Link to={`/my/${userId}/posts`}>글</Link>
          </li>
          <li className={`my-nav-${active.myli2}`} onClick={handleClick} id="myli2">
            <Link to={`/my/${userId}/series`}>시리즈</Link>
          </li>
          <li className={`my-nav-${active.myli3}`} onClick={handleClick} id="myli3">
            <Link to={`/my/${userId}/about`}>소개</Link>
          </li>
        </ul>
      </div>
      <div className="my-page">
        <Outlet />
      </div>
    </div>
  </>)
}
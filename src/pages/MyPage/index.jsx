import { Link, Outlet, useParams } from "react-router-dom";
import "./MyPage.css"
import MyUserProfile from "../../shared/ui/MyUserProfile";
import { useEffect, useState } from "react";
import Modal from "../../shared/ui/Modal";
import Input from "../../shared/ui/Input"
import { usePageContext } from "../../app/providers/PageContext";

export default function MyPage(){
  const { userId } = useParams();
  const [active,setActive] = useState({myli1:"active",myli2:"",myli3:""});
  const [user,setUser] = useState([""]);
  const [modalClose,setModalClose] = useState(false);
  const [nick,setNick] = useState("");
  const [about,setAbout] = useState("");
  const [file, setFile] = useState(null);

  const { setPageInfo } = usePageContext();

  useEffect(() => { 
    setPageInfo({
      title: 'B',
      author: userId,
      isHome: false
    });
    
  
    return () => {
      setPageInfo({
      title: 'Banana',
      author: null,
      isHome: true
      });
    };
  }, [userId ,setPageInfo]);

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
  async function handleChangeUserData(){
    const url = `http://localhost:8080/api/my/change`;
    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("userNick", nick);
      formData.append("userAbout", about);
      formData.append("userProfile", file); // File 객체

      console.log(formData);
      const response = await fetch(url, {
        method: "POST",
        body: formData, // Content-Type 자동 설정됨 
      });
      const data = await response.json();
      
    } catch(err) {

    }
  }

  return(<>
    <div className="my-container">
      <div className="my-header">
        <div className="my-profile">
          <MyUserProfile profileImage={user.userProfile} nickname={user.userNick} about={user.userAbout}/>
        </div>
        <div className="my-setting-btn">
          <button onClick={()=>{setModalClose(true)}}>정보 수정</button>
        </div>
      </div>
      <Modal isOpen={modalClose} onClose={()=>{setModalClose(false);handleChangeUserData();}}>
        <div className="my-setting">
          <form className="my-form-container">
            <div>
              <label for="myfile-upload" className="my-form-label">
              프로필 이미지 수정
              </label>
              <input style={{"display":"none"}} id="myfile-upload" type="file" accept="image/*" onChange={(e)=>{setFile(e.target.files[0])}}/>
            </div>   
            <div>
              <Input onChange={(e)=>{setNick(e.target.value)}} placeholder={"수정할 닉네임"}/>
            </div>     
            <div>
              <Input onChange={(e)=>{setAbout(e.target.value)}} placeholder={"수정할 소개"}/>
            </div>         
          </form>
        </div>
      </Modal>
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
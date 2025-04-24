import { Link, Outlet, useParams } from "react-router-dom";
import "./MyPage.css"
import MyUserProfile from "../../shared/ui/MyUserProfile";
import { useEffect, useState } from "react";
import Modal from "../../shared/ui/Modal";
import Input from "../../shared/ui/Input"
import { usePageContext } from "../../app/providers/PageContext";
import logo from '../../app/assets/logo2.png';

export default function MyPage(){
  const { userId } = useParams();
  const [active,setActive] = useState({myli1:"active",myli2:"",myli3:""});
  const [user,setUser] = useState({});
  const [modalClose,setModalClose] = useState(false);
  const [nick,setNick] = useState("");
  const [about,setAbout] = useState("");
  const [file, setFile] = useState(null);
  const [fileName,setFileName] = useState("👈 이미지 선택");
  const { setPageInfo } = usePageContext();

  useEffect(() => { 
    setPageInfo({
      title: "B",
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
        console.log("데이터 정보",data);
        
      } catch (err) {
        // setError(err);
      } finally {
        // setIsLoading(false);
      }
    };
      fetchUser();
      console.log("유저정보",user.userAbout);
      
  }, [userId]);
  function handleClick(e){
    const {id} = e.currentTarget;
    setActive({myli1:"",myli2:"",myli3:""})
    setActive(prev => ({...prev,[id]:"active"}))
  }
  function handleLabelChange(e){  
    setFile(e.target.files[0])
    setFileName(e.currentTarget.files[0].name)
  }
  async function handleChangeUserData(){
    const url = `http://localhost:8080/api/my/change`;
    const nickCheck = nick?nick:(user.userNick);
    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("userNick", nickCheck);
      formData.append("userAbout", about);
      formData.append("userProfile", file); // File 객체

      console.log(formData);
      const response = await fetch(url, {
        method: "POST",
        body: formData, // Content-Type 자동 설정됨 
      });
      const data = await response.json();
      setUser(data);
    } catch(err) {
    }
    window.location.reload();
  }

  return(<>
    <div className="my-container">
      <div className="my-header">
        <div className="my-profile">
          <MyUserProfile userProfileImage={user.userProfile} userNick={user.userNick} userAbout={user.userAbout}/>
        </div>
        <div className="my-setting-btn">
          <button onClick={()=>{setModalClose(true);setAbout(user.userAbout);setNick(user.userNick)}}>정보 수정</button>
        </div>
      </div>
      <Modal isOpen={modalClose} onClose={()=>{setModalClose(false);handleChangeUserData();}}>
        <div className="my-setting">
          <form className="my-form-container">
            <div>
              <label htmlFor="myfile-upload" className="my-form-label">
              +
              </label>
              <span>
                {fileName}
              </span>
              <input style={{"display":"none"}} id="myfile-upload" type="file" accept="image/*" onChange={handleLabelChange}/>
            </div>   
            <div>
              <Input value={nick} onChange={(e)=>{setNick(e.target.value)}} placeholder={"수정할 닉네임"}/>
            </div>     
            <div>
              <Input value={about} onChange={(e)=>{setAbout(e.target.value)}} placeholder={"수정할 소개"}/>
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
import Button from "@shared/ui/Button"
import Input from "@shared/ui/Input"
import "./AuthForm.css"
import { useState } from "react"
import imgProfile from "../../app/assets/userprofile.png"
import { useNavigate } from "react-router-dom"
import Modal from "../../shared/ui/modal"

export default function LoginForm(){

    const [idData,setDdData] = useState("")
    const [passData,setPassData] = useState("")
    const [modalClose,setModalClose] = useState(false);
    const [loginMsg,setLoginMsg] = useState("");

    const navigate = useNavigate();
    const dummyUser = {
        id:idData,
        nick:"구와구와",
        profile:imgProfile,
        about:"간단한 자기소개"
    } 
    function handleClick(){
        if(!(idData&&passData)) {
            setModalClose(true)
            setLoginMsg("빈 정보가 존재합니다");
            return;
        }
        // 나중에 백엔드에 존재하는 아이디 비밀번호인지 확인하는 로직 구현
        localStorage.setItem('user',JSON.stringify(dummyUser));
        navigate('/');
    }

    return (<>
        <div className="auth-form-container">
        <Modal isOpen={modalClose} onClose={() => setModalClose(false)}>{loginMsg}</Modal>
        <form>
            <div><Input placeholder={"아이디를 입력하세요"} onChange={e=>setDdData(e.target.value)}/></div>
            <div><Input placeholder={"비밀번호를 입력하세요"} onChange={e=>setPassData(e.target.value)} type="password" /></div>
            <div><Button value={"로그인"} onClick={handleClick}/></div>   
            </form>
        </div>
    </>)
}


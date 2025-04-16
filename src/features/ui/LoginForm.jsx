import Button from "@shared/ui/Button"
import Input from "@shared/ui/Input"
import "./AuthForm.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Modal from "../../shared/ui/modal"

export default function LoginForm(){

    const [idData,setIdData] = useState("")
    const [passData,setPassData] = useState("")
    const [modalClose,setModalClose] = useState(false);
    const [loginMsg,setLoginMsg] = useState("");
    const navigate = useNavigate();

    function handleClick(){
        if(!(idData&&passData)) {
            setModalClose(true)
            setLoginMsg("빈 정보가 존재합니다");
            return;
        }
        // 나중에 백엔드에 존재하는 아이디 비밀번호인지 확인하는 로직 구현
        loginRequst()
    }
    async function loginRequst(){
        const url = `http://localhost:8080/api/login`;
        const sendData = {
            userId: idData,
            userPass: passData
        }
        const init = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(sendData)
        }
        
        const response = await fetch(url, init);
        const data = await response.json();
        const userData = data.body;
        
        if (!response.ok) {
            setModalClose(true)
            setLoginMsg("서버에 오류가 발생했습니다");
            return;
        }
        if (userData === "로그인 실패") {
            setModalClose(true)
            setLoginMsg("로그인 정보를 다시 확인해주세요");
            return;
        }
        localStorage.setItem("user", JSON.stringify(userData));
        setModalClose(true);
        setLoginMsg("로그인 성공!");
        console.log(userData);
    }    
    function handleModalClose(){
        if(loginMsg !== "로그인 성공!") {
          setModalClose(false);
          return;
        } 
        setModalClose(false);
        navigate("/my");
    }

    return (<>
        <div className="auth-form-container">
        <Modal isOpen={modalClose} onClose={handleModalClose}>{loginMsg}</Modal>
        <form>
            <div><Input placeholder={"아이디를 입력하세요"} onChange={e=>setIdData(e.target.value)}/></div>
            <div><Input placeholder={"비밀번호를 입력하세요"} onChange={e=>setPassData(e.target.value)} type="password" /></div>
            <div><Button value={"로그인"} onClick={handleClick}/></div>   
            </form>
        </div>
    </>)
}


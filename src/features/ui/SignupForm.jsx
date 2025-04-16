import Button from "@shared/ui/Button"
import Input from "@shared/ui/Input"
import "./AuthForm.css"
import { useState } from "react"
import Modal from "../../shared/ui/modal"
import { useNavigate } from "react-router-dom"

export default function SignupForm() {

  const navigate = useNavigate();
  const [modalClose,setModalClose] = useState(false);
  const [signupMsg,setSignupMsg] = useState("");
  const [check,setCheck] = useState({id:"", pass:"", passcheck:"", nick:""})
  const [error,setError] = useState({id:"", pass:"", passcheck:"", nick:""})

  function handleChange(e){
    const {name,value} = e.target;
    setCheck(prev => ({...prev,
      [name]:value
    }))
    validate(name,value);
    
    if(name==="id"){checkUserId(value);}
    
  }
  function validate(name,value){
    if(value == ""){
      return setError(prev => ({...prev,
        [name]:""
      }))
    }
    switch (name) {
      case "id":
        setError(prev => ({...prev,
          id:/^[\w]{6,}$/.test(value)?"":"영문자 6글자 이상",
        })); break;
      case "pass":
        setError(prev => ({...prev,
          pass:/^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%/])[A-Za-z\d!@#$%/]{10,}$/.test(value)?""
              :"숫자,영문자,특수문자 포함 10글자 이상",
          passcheck:(check.passcheck === value)?"":"비밀번호 확인"
        })); break; 
      case "passcheck":
        setError(prev => ({...prev,
          passcheck:(check.pass === value)?"":"비밀번호 확인"
        })); break;
      case "nick":
        setError(prev => ({...prev,
          nick:/^[\wㄱ-ㅎ가-힣]{3,}$/.test(value)?"":"3글자 이상"
        }))
    }
  }
  function handleSignupClick(){
    if(!(check.id&&check.pass&&check.passcheck&&check.nick)) {
      setModalClose(true);
      setSignupMsg("빈 정보가 존재합니다");
      return;
    }
    const isAllEmpty = Object.values(error).every(val => val === "");
    if(!isAllEmpty){
      setModalClose(true);
      setSignupMsg("입력 정보를 확인해주세요");
      return;
    }
    // 백엔드에 데이터를 저장하는 로직 구현
    signupRequst()
  }
  async function checkUserId(id){
    const response = await fetch(`http://localhost:8080/api/check-id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userId:id})
    });
    const exists = await response.json();

    if(exists) {
      setError(prev => ({...prev,
        id:"이미 존재하는 아이디 입니다"
      }));
      console.log("이미 존재하는 아이디 입니다")
    }
  }
  async function signupRequst(){
    const url = `http://localhost:8080/api/auth`;
    const sendData = {
      userId: check.id,
      userPass: check.pass,
      userNick: check.nick
    }
    const init = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(sendData)
    }
    try {
      const response = await fetch(url, init);
    
      if (!response.ok) {
        const errorMsg = await response.text(); // 응답 본문이 있다면 확인
        console.error("서버 오류:", errorMsg);
        setModalClose(true);
        setSignupMsg("네트워크 오류발생");
        return;
      }
    } catch(error){
      console.log("에러 발생")
    }
    setSignupMsg("회원가입 성공!");
    setModalClose(true);
  }
  function handleModalClose(){
    if(signupMsg === "회원가입 성공!") {
      setModalClose(false);
      navigate("/");
      return;
    } else {
      setModalClose(false);
    }
  }

  return(<>
    <div className="auth-form-container">
      <Modal isOpen={modalClose} onClose={handleModalClose}>{signupMsg}</Modal>
      <form>
        <div><Input name={"id"} placeholder={"아이디를 입력하세요"} 
                    onChange={handleChange} error={error.id}/></div>
        <div><Input name={"pass"} placeholder={"비밀번호를 입력하세요"} type="password"
                    onChange={handleChange} error={error.pass}/></div>
        <div><Input name={"passcheck"} placeholder={"비밀번호를 다시 입력하세요"} type="password"
                    onChange={handleChange} error={error.passcheck}/></div>
        <div><Input name={"nick"} placeholder={"닉네임을 입력하세요"}
                    onChange={handleChange} error={error.nick}/></div>
        <div><Button value={"회원가입"} onClick={handleSignupClick} size={"m"}/></div>   
      </form>
    </div>
  </>)
}
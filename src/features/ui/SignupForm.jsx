import Button from "@shared/ui/Button"
import Input from "@shared/ui/Input"
import "./AuthForm.css"
import { useState } from "react"

export default function SignupForm() {

  const [check,setCheck] = useState({
    id:"",
    pass:"",
    passcheck:"",
    nick:""
  })

  const [error,setError] = useState({
    id:"",
    pass:"",
    passcheck:"",
    nick:""
  })

  function handleChange(e){
    const {name,value} = e.target;
    setCheck(prev => ({...prev,
      [name]:value
    }))
    validate(name,value)
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

  function handleClick(){
    if(!(check.id&&check.pass&&check.passcheck&&check.nick)) {
      console.log("빈값이 존재합니다");
      return;
    }
    const isAllEmpty = Object.values(error).every(val => val === "");
    if(!isAllEmpty){
      console.log("에러가 있습니다");
      return;
    }
    console.log("성공!");
  }


  return(<>
    <div className="auth-form-container">
      <form>
        <div><Input name={"id"} placeholder={"아이디를 입력하세요"} 
                    onChange={handleChange} error={error.id}/></div>
        <div><Input name={"pass"} placeholder={"비밀번호를 입력하세요"} type="password"
                    onChange={handleChange} error={error.pass}/></div>
        <div><Input name={"passcheck"} placeholder={"비밀번호를 다시 입력하세요"} type="password"
                    onChange={handleChange} error={error.passcheck}/></div>
        <div><Input name={"nick"} placeholder={"닉네임을 입력하세요"}
                    onChange={handleChange} error={error.nick}/></div>
        <div><Button value={"회원가입"} onClick={handleClick} size={"m"}/></div>   
      </form>
    </div>
  </>)
}
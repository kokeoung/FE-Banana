import { useState } from "react";
import LoginForm from "../../features/ui/LoginForm";
import SignupForm from "../../features/ui/SignupForm";
import "./AuthPage.css";
import Logo from "../../app/assets/banana.png";

export default function AuthPage(){
  
  const [check,setCheck] = useState(true);

  return(<>
  <div className="auth-wrap">
    <div className="auth-container">
        <div className="auth-header">
          <div className="auth-logo">
            <img src={Logo}/>
          </div>
        </div>
        <div className="auth-main">
          <div className=".auth-form">
            {check?<LoginForm />:<SignupForm />}
          </div>
          <div className="auth-check">
            {(check)
            ?(<div>계정이 없다면&nbsp;<span className="auth-click" onClick={() => setCheck(!check)}>회원가입</span>&nbsp;해주세요</div>)
            :(<div>계정이 있다면&nbsp;<span className="auth-click" onClick={() => setCheck(!check)}>로그인</span>&nbsp;해주세요</div>)}
          </div>
        </div>
      </div>
  </div>
    
  </>)
}
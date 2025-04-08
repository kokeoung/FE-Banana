import Button from "@shared/ui/Button"
import "./AuthForm.css"

export default function LoginForm(){
    return (<>
    <div className="auth-form-container">
        <form>
            <div><input placeholder={"아이디를 입력하세요"}/></div>
            <div><input placeholder={"비밀번호를 입력하세요"}/></div>
            <div><Button value={"로그인"}/></div>   
        </form>
    </div>
    </>)
}


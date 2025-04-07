import LoginForm from "../../features/ui/LoginForm";
import SignupForm from "../../features/ui/SignupForm";

export default function AuthPage(){
  return(<>
    <h1>로그인 회원가입</h1>

    <LoginForm />
    <SignupForm />
  </>)
}
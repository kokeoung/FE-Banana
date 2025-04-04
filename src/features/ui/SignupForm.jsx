export default function SignupForm() {
  return(<>
    <div className="login">
      <p>로그인 화면입니다</p>
      <form style={{width:"250px", display:"flex", flexDirection:"column"}}>
        <input type="text" placeholder="아이디"/>
        <input type="password" placeholder="비밀번호"/>
        <input type="password" placeholder="비밀번호 확인"/>
        <input type="text" placeholder="닉네임 입력"/>
        <button>회원가입</button>
      </form>
    </div>
    </>)
}
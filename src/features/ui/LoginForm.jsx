import React from "react";

const LoginForm = () => {
    return (<>
        <h2>로그인 페이지</h2>
        <form>
            <dl>
                <dt><label>아이디</label></dt>
                <dd><input type="text" placeholder="아이디" /></dd>
            </dl>
            <dl>
                <dt><label>비밀번호</label></dt>
                <dd><input type="text" placeholder="비밀번호" /></dd>
            </dl>
            <dl>
                <dd>
                    <button type="submit">로그인</button>
                </dd>
            </dl>
        </form>
    </>)
}

export default LoginForm;
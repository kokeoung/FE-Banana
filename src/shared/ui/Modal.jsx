import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // true: 로그인, false: 회원가입

  if (!isOpen) return null; // 모달이 닫혀있으면 렌더링 안 함

  return (
    <div 
      style={{
        position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex", alignItems: "center", justifyContent: "center"
      }}
      onClick={onClose} // 모달 바깥 클릭 시 닫힘
    >
      <div 
        style={{
          backgroundColor: "white", padding: "15rem", width: "90px",
          textAlign: "center", position: "relative"
        }}
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫히지 않도록 방지
      >
        {/* X 버튼 */}
        <button 
          onClick={onClose} 
          style={{
            position: "absolute", top: "10px", right: "10px", border: "none", background: "none",
            fontSize: "18px", cursor: "pointer"
          }}
        >
          ✖
        </button>

        {/* 회원가입/로그인 전환 영역 */}
        <div 
          style={{
            position: "absolute", bottom: "15px", right: "15px", display: "flex",
            alignItems: "center", fontSize: "14px"
          }}
        >
          <p style={{ marginRight: "8px" }}>
            {isLogin ? "아직 계정이 없으신가요?" : "계정이 있으신가요?"}
          </p>
          <p 
            style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "회원가입" : "로그인"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
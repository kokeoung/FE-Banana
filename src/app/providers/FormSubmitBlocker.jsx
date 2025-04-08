import { useEffect } from "react";


export default function FormSubmitBlocker({ children }){

  useEffect(()=>{
    const preventSubmit=(event)=>{
      if(event.target.tagName==="FORM"){
        event.preventDefault();
        console.log("전역으로 관리하는 폼블럭커")
      }
    }

    window.addEventListener("submit", preventSubmit);
    return ()=>{
      window.removeEventListener("submit", preventSubmit);
    }
    
  },[]);

  return children;
}
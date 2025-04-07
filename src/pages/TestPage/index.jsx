import { useState } from "react";
import Input from "../../shared/ui/Input";
import Button from "../../shared/ui/Button";
import PostCard from "../../shared/ui/PostCard";
import UserProfile from "../../shared/ui/UserProfile";
import img1 from "../../app/assets/cloud.png"

export default function TestPage(){

  const [t,setT] = useState("");
  function test(e){
    console.log()
    setT(e.target.value)
  }
  function click(){
    alert("클릭")
  }

  return(<>
        <Input size={"l"} value={t} 
        placeholder={"내용"} error={"에러"} onChange={test}/>
        <Button value={"눌러주세요"} size={"s"} onClick={click} disabled={false}/>
        <PostCard title={"제목"} imageUrl={img1} createdAt={"2025년4월7일"} likes={99}><UserProfile profileImage={img1} nickname={"테스터1"}/></PostCard>
  </>)
}
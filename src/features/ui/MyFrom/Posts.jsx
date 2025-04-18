import { IoSearchOutline } from "react-icons/io5"
import "./MyFrom.css"
import { useEffect, useState } from "react"
import MyPostCard from "../../../shared/ui/MyPostCard"
import none from "../../../app/assets/notcontent2.svg"
import { useParams } from "react-router-dom"

const dummy = [
  {
    id: 1,
    title: '테스트1',
    img: 'https://mblogthumb-phinf.pstatic.net/20120615_30/snaps1_1339721440666NgJXG_JPEG/%BA%B0%BB%E7%C1%F8%C0%DF%C2%EF%B4%C2%B9%FD%B9%E3%BE%DF%B0%E6%BB%E7%C1%F8%C0%DF%C2%EF%B4%C2%B9%FD.jpg?type=w420',
    createdAt: '2025년 04월 06일',
    content:"길어져도 문제 없는지 테스트 길어져도 문제 없는지 테스트길어져도 문제 없는지 테스트길어져도 문제 없는지 테스트길어져도 문제 없는지 테스트길어져도 문제 없는지 테스트길어져도 문제 없는지 테스트길어져도 문제 없는지 테스트길어져도 문제 없는지 테스트길어져도 문제 없는지 테스트길어져도 문제 없는지 테스트길어져도 문제 없는지 테스트길어져도 문제 없는지 테스트",
    like: 12,
  },
  {
    id: 2,
    title: '테스트2',
    img: 'https://mblogthumb-phinf.pstatic.net/20120615_30/snaps1_1339721440666NgJXG_JPEG/%BA%B0%BB%E7%C1%F8%C0%DF%C2%EF%B4%C2%B9%FD%B9%E3%BE%DF%B0%E6%BB%E7%C1%F8%C0%DF%C2%EF%B4%C2%B9%FD.jpg?type=w420',
    createdAt: '2025년 04월 08일',
    content:"내용확인",
    like: 16,
  },
  {
    id: 3,
    title: '테스트3',
    img: 'https://mblogthumb-phinf.pstatic.net/20120615_30/snaps1_1339721440666NgJXG_JPEG/%BA%B0%BB%E7%C1%F8%C0%DF%C2%EF%B4%C2%B9%FD%B9%E3%BE%DF%B0%E6%BB%E7%C1%F8%C0%DF%C2%EF%B4%C2%B9%FD.jpg?type=w420',
    createdAt: '2025년 04월 09일',
    content:"같은 내용이지만 다른 포스트 카드",
    like: 27,
  },
]


export default function Posts(){

  const { userId } = useParams();
  const [color,setColor] = useState("")
  const [search,setSearch] = useState("")

  useEffect(()=>{
    async function fetchUserPost(){
      try {
        const url = `http://localhost:8080/api/my/post/${userId}`;
        const sendData = {
            userId: userId,
        }
        const init = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(sendData)
        }
        const response = await fetch(url, init);
        const data = await response.json();

      } catch (err) {
        // setError(err);
      }
      };
      fetchUserPost();
  },[]);

  const filteredData = dummy.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
  return(<>
    <div className="postspage-container">
      <div className="postspage-header">
        <div className="postspage-search-box" id={color}>
          <div><IoSearchOutline /></div>
          <input type="text" placeholder="검색어를 입력하세요" 
            onFocus={() => setColor("postspage-focus")} onBlur={() => setColor("")} onChange={e => setSearch(e.target.value)}/>
        </div>
      </div>
      {!dummy?
      (<div className="postspage-worng">
        <img src={none} alt="" />
      </div>):
      (<div className="postspage-main">
      {filteredData.map(post=>(
        <MyPostCard key={post.id} 
          imageUrl={post.img} 
          title={post.title} 
          content={post.content} 
          createdAt={post.createdAt} 
          liked={post.like} />
      ))}
      </div>)
      }
    </div>
  </>)
}
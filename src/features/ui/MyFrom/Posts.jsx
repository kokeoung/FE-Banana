import { IoSearchOutline } from "react-icons/io5"
import "./MyFrom.css"
import { useEffect, useState } from "react"
import MyPostCard from "../../../shared/ui/MyPostCard"
import none from "../../../app/assets/notcontent2.svg"
import { Link, useParams } from "react-router-dom"


export default function Posts(){

  const { userId } = useParams();
  const [color,setColor] = useState("")
  const [search,setSearch] = useState("")
  const [visibleCount,setVisibleCount] = useState(10)

  useEffect(()=>{
    async function fetchUserPost(){
      try {
        const url = `http://localhost:8080/api/my/post/${userId}&limit=10`;
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
      {filteredData.slice(0, visibleCount).map(post=>(
        <Link to={`/posts/${post.id}`}>
          <MyPostCard key={post.id} 
            imageUrl={post.img} 
            title={post.title} 
            content={post.content} 
            createdAt={post.createdAt} 
            liked={post.like} />
        </Link>      
      ))}
      </div>)}
      {filteredData.length > visibleCount && (
      <button className="postspage-button" onClick={() => setVisibleCount(prev => prev + 10)}>
        더보기
      </button>)}
    </div>
  </>)
}
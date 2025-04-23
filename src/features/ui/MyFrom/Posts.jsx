import { IoSearchOutline } from "react-icons/io5"
import "./MyFrom.css"
import { useEffect, useState } from "react"
import MyPostCard from "../../../shared/ui/MyPostCard"
import none from "../../../app/assets/notcontent2.svg"
import { Link, useParams } from "react-router-dom"


export default function Posts(){

  const { userId } = useParams();
  const [color,setColor] = useState("");
  const [search,setSearch] = useState("");
  const [visibleCount,setVisibleCount] = useState(10);
  const [postData,setPostData] = useState([]);

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
        setPostData(data);
        console.log(data);
      } catch (err) {
        // setError(err);
      }
      };
      fetchUserPost();
  },[]);

  const filteredData = postData.filter(post =>
    post.postTitle.toLowerCase().includes(search.toLowerCase())
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
      {(postData.length === 0)?
      (<div className="postspage-worng">
        <img src={none} alt="" />
      </div>):
      (<div className="postspage-main">
      {filteredData.slice(0, visibleCount).map((post,i)=>(
        <Link key={i}  
              to={`/posts/${post.postId}`}>
          <MyPostCard
            imageUrl={post.thumbnail} 
            title={post.postTitle} 
            content={post.postContent} 
            createdAt={post.createDateTime} 
            liked={post.likeCount} />
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
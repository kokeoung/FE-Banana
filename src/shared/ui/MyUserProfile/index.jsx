import "./MyUserProfile.css"

export default function MyUserProfile({profileImage,nickname,about}){
  
  return(<>
    <div className="mypost-container">
      <div className="mypost-img">
        <img src={profileImage}/>
      </div>
      <div className="mypost-nick">
        <div className="mypost-nickname">{nickname} </div>
        <div className="mypost-about">{about}</div>
      </div>

    </div>
  </>)
}
import "./MyUserProfile.css"
import defaultImage from "../../../app/assets/userprofile.png"

export default function MyUserProfile({profileImage,nickname,about}){
  
  return(<>
    <div className="mypost-container">
      <div className="mypost-img">
        <img src={profileImage||defaultImage}/>
      </div>
      <div className="mypost-nick">
        <div className="mypost-nickname">{nickname} </div>
        <div className="mypost-about">{about}</div>
      </div>

    </div>
  </>)
}
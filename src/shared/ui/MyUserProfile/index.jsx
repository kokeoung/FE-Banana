import "./MyUserProfile.css"
import defaultImage from "../../../app/assets/userprofile.png"

export default function MyUserProfile({userProfileImage,userNick,userAbout}){
  
  return(<>
    <div className="mypost-container">
      <div className="mypost-img">
        <img src={userProfileImage||defaultImage}/>
      </div>
      <div className="mypost-nick">
        <div className="mypost-nickname">{userNick} </div>
        <div className="mypost-about">{userAbout}</div>
      </div>

    </div>
  </>)
}
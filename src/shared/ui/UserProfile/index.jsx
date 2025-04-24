import './UserProfile.css';
import defaultImage from "../../../app/assets/userprofile.png"

export default function UserProfile({userProfileImage,userNick}){
  return(<>
    <div className="profile-container">
      <div className="profile-img">
        <img src={userProfileImage || defaultImage}/>
      </div>
      <div className="proflie-nick">
        <span id="by">by</span>&nbsp;
        {userNick} 
      </div>
    </div>
  </>)
}
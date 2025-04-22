import './UserProfile.css';

export default function UserProfile({userProfileImage,userNick}){
  return(<>
    <div className="profile-container">
      <div className="profile-img">
        <img src={userProfileImage}/>
      </div>
      <div className="proflie-nick">
        <span id="by">by</span>&nbsp;
        {userNick} 
      </div>
    </div>
  </>)
}
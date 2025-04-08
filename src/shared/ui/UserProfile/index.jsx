import './UserProfile.css';

export default function UserProfile({profileImage,nickname}){
  return(<>
    <div className="profile-container">
      <div className="profile-img">
        <img src={profileImage}/>
      </div>
      <div className="proflie-nick">
        <span id="by">by</span>&nbsp;
        {nickname} 

      </div>
    </div>
  </>)
}
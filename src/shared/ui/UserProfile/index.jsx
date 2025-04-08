import './UserProfile.css';
<<<<<<< HEAD
=======

>>>>>>> 4588d8b79a5fcf2dd8cc967f9d8dade0e41b4e64

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
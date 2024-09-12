import profile from "../assets/images/profile.svg";
import ProfileDetails from "../components/profileDetails/ProfileDetails";

export default function ProfilePage() {
  return (
    <div className="container page-wrap">
      <div className="row">
        <div className="col-12 col-md-6 login-user">
          <img className="w-100 user" src={profile} alt="dog image" />
        </div>
        <ProfileDetails />
      </div>
      <p className="text-center"> Profile edit feature coming soon ....</p>
    </div>
  );
}

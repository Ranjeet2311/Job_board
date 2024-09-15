// import profile from "../assets/images/profile.svg";
import Metadata from "../components/metadata/Metadata";
import ProfileDetails from "../components/user/profileDetails/ProfileDetails";

export default function ProfilePage() {
  return (
    <>
      <Metadata title="Profile" description="Empowering others" />
      <div className="container page-wrap">
        <div className="row">
          {/* <div className="col-12 col-md-6 login-user">
          <img className="w-100 user" src={profile} alt="dog image" />
          </div> */}
          <ProfileDetails />
        </div>
        <p className="text-center pt-4">
          {" "}
          Profile edit feature coming soon ....
        </p>
      </div>
    </>
  );
}

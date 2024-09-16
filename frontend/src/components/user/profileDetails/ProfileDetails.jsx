import { useSelector } from "react-redux";
import avatar from "../../../assets/images/avatar.png";
import localtion from "../../../assets/images/location.png";
import email from "../../../assets/images/email.png";
import store from "../../../assets/images/store.png";
import "./profile-details.scss";

export default function ProfileDetails() {
  const { user } = useSelector((state) => state.users);

  console.log(`user : `, user);

  return (
    <section className="col-12">
      <div className="row profile">
        <div className="col-12 col-lg-6 profile-item">
          <div className="profile-wrap">
            <img src={avatar} alt="logo" className="profile_img img" />
            <div className="status"></div>
          </div>
          <div className="row align-items-center">
            <p className="text-center text-md-start">Owner Name :</p>
            <div className="title text-center text-md-start">
              {user.firstName}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 profile-item">
          <img src={email} alt="logo" className="profile_img" />
          <div className="row align-items-center">
            <p className="text-center text-md-start">Owner Email :</p>
            <div className="title text-center text-md-start">{user.email}</div>
          </div>
        </div>
        <div className="col-12 col-lg-6 profile-item">
          <img src={store} alt="logo" className="profile_img" />
          <div className="row align-items-center">
            <p className="text-center text-md-start">Company :</p>
            <div className="title text-center text-md-start">
              {user.company}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 profile-item">
          <img src={localtion} alt="logo" className="profile_img" />
          <div className="row align-items-center">
            <p className="text-center text-md-start">Location :</p>

            <div className="title text-center text-md-start">
              {user.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

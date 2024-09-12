import { useSelector } from "react-redux";
import avatar from "../../assets/images/avatar.svg";
import localtion from "../../assets/images/location.svg";
import email from "../../assets/images/email.svg";
import "./profile-details.scss";

export default function ProfileDetails() {
  const { user } = useSelector((state) => state.users);
  return (
    <article className="col-12 col-lg-6 profile mb-4">
      <h1>Your Profile</h1>
      <img height={100} src={avatar} alt="logo" className="logo_img " />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <h3>
        <img height={80} src={email} alt="logo" className="logo_img " />
        <span> {user.email}</span>
      </h3>
      <h3>
        <img height={100} src={localtion} alt="logo" className="logo_img " />
        <span> {user.location}</span>
      </h3>
    </article>
  );
}

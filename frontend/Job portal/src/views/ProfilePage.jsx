import { useSelector } from "react-redux";
import dogImage from "../assets/images/dog.svg";

export default function ProfilePage() {
  const { user } = useSelector((state) => state.users);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <img className="w-100" src={dogImage} alt="dog image" />
        </div>
        <div className="col-12 col-lg-6">
          <h3>My Profile</h3>
          <h2>
            User:
            <span>
              {user.firstName} {user.lastName}
            </span>
          </h2>
          <h3>
            Email:
            <span>{user.email}</span>
          </h3>
          <h3>
            Location:
            <span>{user.location}</span>
          </h3>
        </div>
        <p className="text-center"> Profile edit feature coming soon ....</p>
      </div>
    </div>
  );
}

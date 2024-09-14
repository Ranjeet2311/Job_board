import { Link } from "react-router-dom";
import Login from "../../components/forms/Login";
import userImage from "../../assets/images/on_comp.svg";
import "../../assets/styles/login.scss";

export default function LoginPage() {
  return (
    <div className="container page-wrap">
      <div className="row">
        <div className="col-12 col-md-6 login-user">
          <img src={userImage} alt="user" className="user" />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="text-center mb-2 mb-lg-4">Log in to your account</h2>
          <Login />
          <p className="text-center mt-4">
            No account yet
            <Link to="/signup" className="btn fw-bold ms-2 cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

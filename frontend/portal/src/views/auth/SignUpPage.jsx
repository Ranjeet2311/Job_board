import { Link } from "react-router-dom";
import SignUp from "../../components/forms/SignUp";
import userImage from "../../assets/images/on_comp.svg";
import "../../assets/styles/login.scss";

export default function SignUpPage() {
  return (
    <>
      <div className="container page-wrap">
        <div className="row">
          <div className="col-12 col-md-6 login-user">
            <img src={userImage} alt="user" className="user" />
          </div>
          <div className="col-12 col-md-6">
            <h2 className="text-center">Sign up</h2>
            <SignUp />
            <p className="text-center mt-4">
              Have account?
              <Link to="/login" className="btn fw-bold ms-2 cursor-pointer">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* <header>
          <h1 className="text-center">
            Please login to post a job advertisement
          </h1>
        </header> */}
      <div>{/* </div> */}</div>
    </>
  );
}

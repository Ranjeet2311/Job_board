import { Link } from "react-router-dom";
import SignUp from "../../components/forms/SignUp";

export default function SignUpPage() {
  return (
    <>
      <div className="container">
        <header>
          <h1 className="text-center">
            Please login to post a job advertisement
          </h1>
        </header>
        <div>
          <SignUp />
          <p className="text-center mt-4">
            Have account?
            <Link to="/login" className="btn fw-bold ms-2 cursor-pointer">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

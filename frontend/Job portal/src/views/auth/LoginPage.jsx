import { Link } from "react-router-dom";
import Login from "../../components/forms/Login";

export default function LoginPage() {
  return (
    <div className="container">
      <header>
        <h1 className="text-center">
          Please login to post a job advertisement
        </h1>
      </header>
      <div>
        <Login />
        <p className="text-center mt-4">
          No account yet
          <Link to="/signup" className="btn fw-bold ms-2 cursor-pointer">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

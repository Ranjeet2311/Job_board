import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import spinner from "../../assets/images/spin.svg";
import Toast from "../toast/Toast";
import visible from "../../assets/images/visible.png";
import invisible from "../../assets/images/invisible.png";

export default function Login() {
  const [visibility, setVisibility] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const loginForm = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, isLoggedIn, error, success } = useSelector(
    (state) => state.users
  );

  const handleLogin = (e) => {
    e.preventDefault();
    const loginData = loginForm.current;
    const email = loginData["email"].value;
    const password = loginData["password"].value;
    const user = { email, password };

    dispatch(login(user));
  };

  const handlePasswordDisplay = () => {
    console.log(`handlePasswordDisplay`);
    setVisibility(!visibility);
  };

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/mylisting");
    }

    if (error || success) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); // Hide toast after 3 seconds
      return () => clearTimeout(timer); // Clear timeout when component unmounts or if error/success changes
    }
  }, [isLoggedIn, navigate, error, success]);

  return (
    <form onSubmit={handleLogin} ref={loginForm}>
      <div className="row">
        <div className="col-12 col-lg-6">
          <label htmlFor="title" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Login email"
            name={"email"}
            required
          />
        </div>
        <div className="col-12 col-lg-6">
          <label
            htmlFor="creater"
            className="form-label"
            onClick={handlePasswordDisplay}
          >
            Password
            <span className="ms-3">
              {visibility ? (
                <img src={visible} alt="visible-icon" className="visible" />
              ) : (
                <img src={invisible} alt="invisible-icon" className="visible" />
              )}
            </span>
          </label>
          <input
            type={visibility ? "text" : "password"}
            className="form-control"
            id="password"
            placeholder="Password"
            name={"password"}
            required
          />
        </div>
        <div className="col-12 pt-3 mt-3">
          <button
            type="submit"
            className="btn btn-blue w-100 border-0 text-white"
            disabled={loading}
          >
            {loading ? (
              <p className="mb-0">
                Loading
                <span>
                  <img
                    className="ms-2"
                    height={30}
                    src={spinner}
                    alt="spinner"
                  />
                </span>
              </p>
            ) : (
              "Login"
            )}
          </button>
        </div>
        {showToast && error && (
          <Toast subject="Error" textMessage={error} className="bg-light-red" />
        )}
        {showToast && success && (
          <Toast
            subject="Success"
            textMessage="Logged in successfully"
            className="bg-light-green"
          />
        )}
      </div>
    </form>
  );
}

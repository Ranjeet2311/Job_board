import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import spinner from "../../assets/images/spin.svg";

export default function Login() {
  const loginForm = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signupSuccess, setSignupSuccess] = useState(false);

  const { loading, isLoggedIn, error } = useSelector((state) => state.users);

  const handleLogin = (e) => {
    e.preventDefault();
    const loginData = loginForm.current;
    const email = loginData["email"].value;
    const password = loginData["password"].value;
    const user = { email, password };

    dispatch(login(user));
  };

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/mylisting");
    }

    const signupSuccess = localStorage.getItem("sigupStat");
    setSignupSuccess(signupSuccess);
  }, [isLoggedIn, navigate]);

  return (
    <form className="w-75 mx-auto mt-4" onSubmit={handleLogin} ref={loginForm}>
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
          <label htmlFor="creater" className="form-label">
            Password
          </label>
          <input
            type="password"
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
            className="btn btn-bg w-100 border-0 text-white"
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
        {error && (
          <p className="text-danger mt-4 text-center my-0"> {error} </p>
        )}
        {signupSuccess && (
          <p className="p-2 bg-success mt-2 w-50 mx-auto text-white text-center">
            Signup successful please logn with user email and password
          </p>
        )}
      </div>
    </form>
  );
}

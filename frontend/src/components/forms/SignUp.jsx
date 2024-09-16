import { useRef, useState } from "react";
import { register } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import xss from "xss";
import { trimWhiteSpace } from "../../utils/textUtils";
import spinner from "../../assets/images/spin.svg";
import Toast from "../toast/Toast";
import visible from "../../assets/images/visible.png";
import invisible from "../../assets/images/invisible.png";

export default function SignUp() {
  const [visibility, setVisibility] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const signupForm = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, signup } = useSelector((state) => state.users);

  const handleSignup = (e) => {
    e.preventDefault();
    const signupData = signupForm.current;

    const newUser = {
      firstName: xss(trimWhiteSpace(signupData["firstName"].value)),
      lastName: xss(trimWhiteSpace(signupData["lastName"].value)),
      email: xss(trimWhiteSpace(signupData["email"].value)),
      password: xss(trimWhiteSpace(signupData["password"].value)),
      company: xss(trimWhiteSpace(signupData["company"].value)),
      location: xss(trimWhiteSpace(signupData["location"].value)),
    };

    if (newUser.password.length < 6) {
      setPasswordError("Password must be more than 6 digits.");
    } else {
      setPasswordError("");
      dispatch(register(newUser));
      localStorage.setItem("sigupStat", true);

      if (!loading) {
        console.log(`signup : `, signup);
        navigate("/login");
      }
    }
    console.log(`Sign Up completed`);
  };

  const handlePasswordDisplay = () => {
    console.log(`handlePasswordDisplay`);
    setVisibility(!visibility);
  };

  return (
    <>
      <form ref={signupForm} onSubmit={handleSignup}>
        <div className="row mb-3">
          <div className="col-12 col-lg-6">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="John"
              name={"firstName"}
              required
            />
          </div>
          <div className="col-12 col-lg-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Doe"
              name={"lastName"}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-lg-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              name={"email"}
              required
            />
          </div>
          <div className="col-12 col-lg-6">
            <label
              htmlFor="password"
              className="form-label"
              onClick={handlePasswordDisplay}
            >
              Password
              <span className="ms-3">
                {visibility ? (
                  <img src={visible} alt="visible-icon" className="visible" />
                ) : (
                  <img
                    src={invisible}
                    alt="invisible-icon"
                    className="visible"
                  />
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
            <p className="my-0 text-danger"> {passwordError} </p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-lg-6">
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <input
              type="text"
              className="form-control"
              id="company"
              placeholder="Name of organization"
              name={"company"}
              required
            />
          </div>
          <div className="col-12 col-lg-6">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Add location"
              name={"location"}
              required
            />
          </div>
        </div>
        <div className="pt-3">
          <button
            type="submit"
            className="btn btn-blue w-100 border-0 text-white"
          >
            {loading ? (
              <p className="mb-0">
                Signing...
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
              "Sign up"
            )}
          </button>
        </div>
        {error ? (
          <Toast subject="Error" textMessage={error} className="bg-light-red" />
        ) : (
          <Toast
            subject="Success"
            textMessage="login with user credentials"
            className="bg-light-green"
          />
        )}
        {/* {error ? (
          <p className="text-danger mt-4 text-center my-0">{error}</p>
        ) : (
          <p className="p-2 bg-success mt-2 w-50 mx-auto text-white text-center">
            Signup successful please logn with user email and password
          </p>
        )} */}
      </form>
    </>
  );
}

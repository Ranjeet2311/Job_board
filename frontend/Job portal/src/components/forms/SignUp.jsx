import { useRef, useState } from "react";
import { register } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import spinner from "../../assets/images/spin.svg";

export default function SignUp() {
  const [passwordError, setPasswordError] = useState("");
  const signupForm = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, signup } = useSelector((state) => state.users);

  const handleSignup = (e) => {
    e.preventDefault();
    const signupData = signupForm.current;

    const newUser = {
      firstName: signupData["firstName"].value,
      lastName: signupData["lastName"].value,
      email: signupData["email"].value,
      password: signupData["password"].value,
      company: signupData["company"].value,
      location: signupData["location"].value,
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

  return (
    <>
      <form
        className="w-75 mx-auto mt-4"
        ref={signupForm}
        onSubmit={handleSignup}
      >
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
            <label htmlFor="password" className="form-label">
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
            className="btn btn-bg w-100 border-0 text-white"
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
        {error && <p className="text-danger mt-4 text-center my-0">{error}</p>}
      </form>
    </>
  );
}

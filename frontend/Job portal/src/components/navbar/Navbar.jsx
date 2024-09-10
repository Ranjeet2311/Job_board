import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.scss";
import userIcon from "../../assets/images/user.svg";
import refreshIcon from "../../assets/images/refresh.svg";
import addNewIcon from "../../assets/images/file-add.svg";
import logInIcon from "../../assets/images/log-in.svg";
import logOutIcon from "../../assets/images/log-out.svg";
import listIcon from "../../assets/images/list.svg";
import Button from "../buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../features/jobSlice";
import { logout } from "../../features/userSlice";

export default function Navbar() {
  const { isLoggedIn, user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRefresh = () => {
    dispatch(fetchJobs());
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // const handleLogin = () => {
  //   dispatch(unAuthenticate(true));
  // };

  return (
    <nav className="navbar navbar-expand-lg container d-flex justify-content-between">
      <NavLink className="nav-link" to="/">
        <div className="logo">
          <img src="" alt="" className="logo_img" />
          <span>Logo</span>
        </div>
      </NavLink>
      <ul className="navbar-nav d-flex justify-content-center align-items-center">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">
            Jobs
          </NavLink>
        </li>
        <li>
          <Button onButtonClick={handleRefresh} isLInk={false}>
            <span>
              <img
                className="me-2 image_filter inline-block"
                height={20}
                src={refreshIcon}
                alt="refresh"
              />
            </span>
            Refresh
          </Button>
        </li>
        <div className="dropdown">
          <div
            className="btn btn-secondary dropdown-toggle d-flex justify-content-center align-items-center"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span style={{ height: "20px" }}>
              <img
                className="me-2 image_filter d-flex"
                height={20}
                src={userIcon}
                alt="user"
              />
            </span>
            {user ? user.firstName : "user"}
          </div>

          <ul className="dropdown-menu bg-success">
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link dropdown-item" to="/create">
                    <span style={{ height: "20px" }}>
                      <img
                        className="me-2 image_filter inline-block image_filter"
                        height={20}
                        src={addNewIcon}
                        alt="user"
                      />
                    </span>
                    Add new
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link dropdown-item" to="/mylisting">
                    <span style={{ height: "20px" }}>
                      <img
                        className="me-2 image_filter inline-block image_filter"
                        height={20}
                        src={listIcon}
                        alt="user"
                      />
                    </span>
                    My Listing
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link dropdown-item"
                    onClick={handleLogout}
                  >
                    <span style={{ height: "20px" }}>
                      <img
                        className="me-2 image_filter inline-block"
                        height={20}
                        src={logOutIcon}
                        alt="user"
                      />
                    </span>
                    Logout
                  </NavLink>
                </li>{" "}
              </>
            ) : (
              <li className="nav-item">
                <NavLink
                  className="nav-link dropdown-item"
                  to="/login"
                  // onClick={handleLogin}
                >
                  <span style={{ height: "20px" }}>
                    <img
                      className="me-2 image_filter inline-block"
                      height={20}
                      src={logInIcon}
                      alt="user"
                    />
                  </span>
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </ul>
    </nav>
  );
}

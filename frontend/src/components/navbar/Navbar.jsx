import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.scss";
import userIcon from "../../assets/images/user.png";
import addNewIcon from "../../assets/images/file-add.png";
import logInIcon from "../../assets/images/log-in.png";
import logOutIcon from "../../assets/images/log-out.png";
import listIcon from "../../assets/images/list.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/userSlice";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.png";

const routes = [
  { linkText: "Home", link: "/" },
  { linkText: "About us", link: "/about-us" },
  { linkText: "Jobs", link: "/jobs" },
  { linkText: "Career", link: "/career" },
];

const userRoutes = [
  { linkText: "Create", link: "/create", img: addNewIcon },
  { linkText: "Profile", link: "/profile", img: userIcon },
  { linkText: "My listing", link: "/mylisting", img: listIcon },
];

export default function Navbar() {
  const { isLoggedIn, user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const handleRefresh = () => {
  //   dispatch(fetchJobs());
  // };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // const handleProfileDisplay = () => {
  //   setShowProfile(!showProfile);
  // };

  // const handleLogin = () => {
  //   dispatch(unAuthenticate(true));
  // };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container d-flex align-items-center">
        <a className="navbar-brand py-0" href="#">
          <div className="logo">
            <img src={logo} alt="logo" className="logo_img " />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end align-items-center mt-4 mt-lg-0"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {routes.map((route, i) => (
              <li key={i} className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={route.link}
                >
                  {route.linkText}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="btn-group ">
            <button
              type="button"
              className={`dropdown-toggle btn d-flex justify-content-center justify-content-lg-end px-0 ${
                isLoggedIn && "img-bg"
              } `}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {isLoggedIn && (
                <>
                  <img className="profile-image" src={avatar} alt="" />
                </>
              )}
              {user ? (
                ""
              ) : (
                <>
                  {/* <img
                    height={20}
                    className="image_filter"
                    src={userIcon}
                    alt=""
                  /> */}
                  <span>LOGIN</span>
                </>
              )}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {isLoggedIn ? (
                <>
                  {userRoutes.map((route) => (
                    <li key={route.linkText}>
                      <NavLink
                        className="dropdown-item nav-item"
                        type="button"
                        to={route.link}
                      >
                        <img
                          className="me-2 inline-block"
                          height={25}
                          src={route.img}
                          alt="user"
                        />
                        <span> {route.linkText} </span>
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <NavLink
                      className="dropdown-item nav-item logout"
                      type="button"
                      onClick={handleLogout}
                    >
                      <span>
                        <img
                          className="me-2 inline-block "
                          height={25}
                          src={logOutIcon}
                          alt="user"
                        />
                      </span>
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      className="dropdown-item nav-item"
                      type="button"
                      to="/login"
                    >
                      <span>
                        <img
                          className="me-2 inline-block"
                          height={25}
                          src={logInIcon}
                          alt="user"
                        />
                      </span>
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

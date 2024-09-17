import { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import "./assets/styles/general.scss";
import { jwtDecode } from "jwt-decode";
import { logout, setUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import Footer from "./components/footer/Footer";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

export const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`App useEffect runs`);

    const token = localStorage.getItem("accessToken");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        // console.log(`decodedToken :: `, decodedToken);

        // Check if token is expired
        const currentTime = Date.now() / 1000; // Current time in seconds

        if (decodedToken.exp < currentTime) {
          localStorage.removeItem("accessToken");
          dispatch(logout());
        } else {
          // If the token is valid, set the user in the state
          dispatch(setUser(decodedToken));
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("accessToken");
        dispatch(logout());
      }
    }
  }, [dispatch]);

  useEffect(() => {
    ReactGA.initialize("G-Y4FQ7DDK89");
  }, []);

  return (
    <div className="container-fluid app px-0">
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;

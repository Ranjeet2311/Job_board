import { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import "./assets/styles/general.scss";
import { jwtDecode } from "jwt-decode";
import { logout, setUser } from "./features/userSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`App useEffect runs`);

    const token = localStorage.getItem("accessToken");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log(`decodedToken :: `, decodedToken);

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

  return (
    <div className="container-fluid app">
      <AppRoutes />
    </div>
  );
}

export default App;

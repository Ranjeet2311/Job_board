import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import spinner from "../../assets/images/spin.svg";

export default function ProtectedRoute() {
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  // console.log(`protected route : `, isLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [isLoggedIn]);

  if (loading) {
    return (
      <div className="container">
        {" "}
        <img className="d-block mx-auto" src={spinner} alt="spinner" />{" "}
      </div>
    );
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

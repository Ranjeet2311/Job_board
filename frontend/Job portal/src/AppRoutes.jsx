import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/HomePage";
import CreatePost from "./views/CreatePost";
import Navbar from "./components/navbar/Navbar";
import LoginPage from "./views/auth/LoginPage";
import SignUpPage from "./views/auth/SignUpPage";
import MyListing from "./views/MyListing";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import NotFoundPage from "./views/NotFoundPage";
import ProfilePage from "./views/ProfilePage";
import JobsPage from "./views/JobsPage";

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/create" element={<CreatePost />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/mylisting" element={<MyListing />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

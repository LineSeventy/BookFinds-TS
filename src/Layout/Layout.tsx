import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../Pages/Home";
import Bookmark from "../Pages/Bookmark";
import Books from "../Pages/Books";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";

function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bookmark" element={<Bookmark />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Layout;

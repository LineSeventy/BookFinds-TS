import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../Pages/Home";
import Bookmark from "../Pages/Bookmark";
import Books from "../Pages/Books";

function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bookmark" element={<Bookmark />} />
        <Route path="/Books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Layout;

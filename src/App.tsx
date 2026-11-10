import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";

import Books from "./Pages/Books";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import RootLayout from "./Layout/RootLayout";

function app() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default app;

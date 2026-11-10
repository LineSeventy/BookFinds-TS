import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";

import Books from "./Pages/Books";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import RootLayout from "./Layout/RootLayout";
import { ProtectedRoute } from "./Features/Auth/ProctectedRoute";
import { LoginPage } from "./Pages/LoginPage";

function app() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default app;

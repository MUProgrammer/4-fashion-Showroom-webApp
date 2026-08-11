import React from "react";
import AuthLayout from "./pages/auth/AuthLayout";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import OtpPage from "./pages/auth/OtpPage";
import PandingPage from "./pages/auth/PandingPage";
import ForgetPage from "./pages/auth/ForgetPage";
import ResetPage from "./pages/auth/ResetPage";
import WelcomePage from "./pages/auth/WelcomePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

// AuthLayout ab sirf auth pages ko wrap karta hai.
// <Outlet /> wohi child route render karta hai jo match hua ho.
const AuthLayoutRoute = () => (
  <AuthLayout>
    <Outlet />
  </AuthLayout>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ---- auth pages, AuthLayout ke andar ---- */}
        <Route element={<AuthLayoutRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verifyotp" element={<OtpPage />} />
          <Route path="/pending" element={<PandingPage />} />
          <Route path="/forget" element={<ForgetPage />} />
          <Route path="/resetPassword/:token" element={<ResetPage />} />
        </Route>

        {/* ---- welcome page bilkul alag, apna full-screen layout ---- */}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

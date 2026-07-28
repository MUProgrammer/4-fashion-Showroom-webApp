import React from "react";
import AuthLayout from "./pages/auth/AuthLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import OtpPage from "./pages/auth/OtpPage";
import PandingPage from "./pages/auth/PandingPage";
const App = () => {
  return (
    <BrowserRouter>
      <AuthLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/register" replace />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verifyotp" element={<OtpPage />} />
          <Route path="/pending" element={<PandingPage />} />
        </Routes>
      </AuthLayout>
    </BrowserRouter>
  );
};

export default App;

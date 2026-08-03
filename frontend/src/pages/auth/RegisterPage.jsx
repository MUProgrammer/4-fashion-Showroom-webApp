import React, { useState } from "react";
import {
  AuthBrand,
  AuthTitle,
  AuthError,
  AuthSwitch,
  AuthLink,
  ICONS,
  inputClass,
  StepDots,
} from "./AuthBits";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../../api";
const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // handle change function()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    // check if password or confirm password are match
    if (formData.password !== formData.confirmPassword) {
      setError("Password and confirm password does not match");
    }
    setLoading(true);
    try {
      const res = await api.post(
        "/auth/user/register",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true },
      );
      setSuccess(res.data.message || "Registered! Please verify your email.");
      // save the user in local storage
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          username: formData.username,
          email: formData.email,
        }),
      );
      // 1 second bd verify py bhj du
      setTimeout(() => {
        navigate("/verifyotp");
      }, 1000);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <AuthBrand />
      <StepDots steps={["Details", "Verify", "Approval"]} current={1} />
      <AuthTitle>Create your account</AuthTitle>
      {/* <AuthError message={error} /> */}
      {/* Error / Success Messages */}
      {error && (
        <div className="bg-red-500/80 text-white text-sm rounded-lg px-3 py-2 mb-4 text-center">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-500/80 text-white text-sm rounded-lg px-3 py-2 mb-4 text-center">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3.5">
          <label
            className="block text-[12.5px] text-muted mb-1.5 font-semibold"
            htmlFor="regName"
          >
            Full name
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted">
              {ICONS.user}
            </span>
            <input
              id="regName"
              name="username"
              required
              placeholder="e.g. Ayesha Khan"
              className={inputClass()}
              value={formData.username}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3.5">
          <label
            className="block text-[12.5px] text-muted mb-1.5 font-semibold"
            htmlFor="regEmail"
          >
            Email
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted">
              {ICONS.mail}
            </span>
            <input
              id="regEmail"
              name="email"
              type="email"
              autoComplete="username"
              required
              placeholder="you@example.com"
              className={inputClass()}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3.5">
          <label
            className="block text-[12.5px] text-muted mb-1.5 font-semibold"
            htmlFor="regPassword"
          >
            Password
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted">
              {ICONS.lock}
            </span>
            <input
              id="regPassword"
              name="password" 
              type="password"
              autoComplete="new-password"
              required
              placeholder="At least 6 characters"
              className={inputClass()}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3.5">
          <label
            className="block text-[12.5px] text-muted mb-1.5 font-semibold"
            htmlFor="regConfirm"
          >
            Confirm password
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted">
              {ICONS.lock}
            </span>
            <input
              id="regConfirm"
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              required
              placeholder="Re-enter password"
              className={inputClass()}
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={
            loading ||
            !formData.username ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
          }
          className={`btn btn-solid btn-block bg-gradient-to-br from-wine to-wine-dark border-none shadow-[0_8px_20px_rgba(92,26,43,0.25)] hover:-translate-y-0.5 transition-transform ${loading || !formData.username || !formData.email || !formData.password || !formData.confirmPassword ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <AuthSwitch>
        Already have an account?{" "}
        <AuthLink onClick={() => navigate("/login")}>Login</AuthLink>
      </AuthSwitch>
    </div>
  );
};

export default RegisterPage;

import React, { useState } from "react";
import {
  AuthBrand,
  AuthTitle,
  AuthError,
  AuthSwitch,
  AuthLink,
  ICONS,
  inputClass,
} from "./AuthBits.jsx";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const ResetPage = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true); //  disable button

    try {
      const response = await fetch(
        `http://localhost:5000/auth/user/resetPassword/${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: formData.password }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("🎉 Password reset successfully! Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Something went wrong!");
    } finally {
      setLoading(false); //  re-enable button
    }
  };
  return (
    <div>
      <AuthBrand />
      <AuthTitle>Set a new password</AuthTitle>
      {/* <AuthError message={error} /> */}
      {error && (
        <p className=" bg-red-500/80 text-white text-sm rounded-lg px-3 py-2 mb-4 text-center">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3.5">
          <label
            className="block text-[12.5px] text-muted mb-1.5 font-semibold"
            htmlFor="resetPassword"
          >
            New password
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted">
              {ICONS.lock}
            </span>
            <input
              type="password"
              name="password"
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
            htmlFor="resetConfirm"
          >
            Confirm new password
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted">
              {ICONS.lock}
            </span>
            <input
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
          disabled={loading}
          className={`btn btn-solid btn-block bg-gradient-to-br from-wine to-wine-dark border-none shadow-[0_8px_20px_rgba(92,26,43,0.25)] hover:-translate-y-0.5 transition-transform  ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Changing..." : "Change Password"}
        </button>
        {message && (
          <p className="text-center mt-4 text-green-300 font-semibold">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ResetPage;

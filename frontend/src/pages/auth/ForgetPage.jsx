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

const ForgetPage = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    setSent(false);
    try {
      const response = await fetch(
        "http://localhost:5000/auth/user/forgetPassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email }),
        },
      );
      const data = await response.json();
      if (response.ok) {
        setSent(true);
        setMessage("✅ Password reset link sent to: " + formData.email);
      } else {
        setError(data.message || "Email not found");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong!");
    } finally {
      setLoading(false); // yahan zaroori hai
    }
  };
  return (
    <div>
      <AuthBrand />
      <AuthTitle>Reset your password</AuthTitle>
      {/* <AuthError message={error} /> */}

      <form onSubmit={handleSubmit}>
        <div className="mb-3.5">
          <label
            className="block text-[12.5px] text-muted mb-1.5 font-semibold"
            htmlFor="forgotEmail"
          >
            Email
          </label>
          {error && (
            <p className="text-center mt-4 text-red-400 font-semibold">
              {error}
            </p>
          )}
          {message && (
            <p className="bg-green-500/80 text-white text-sm rounded-lg px-3 py-3 mb-5 text-center">
              {message}
            </p>
          )}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted">
              {ICONS.mail}
            </span>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="username"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClass()}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading || !formData.email || sent}
          className={`btn btn-solid btn-block bg-gradient-to-br from-wine to-wine-dark border-none shadow-[0_8px_20px_rgba(92,26,43,0.25)] hover:-translate-y-0.5 transition-transform ${loading || !formData.email || sent ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Sending..." : sent ? "Link Sent ✅" : "Send Reset Link"}
        </button>
      </form>

      <AuthSwitch>
        <AuthLink onClick={() => navigate("/login")}>Back to login</AuthLink>
      </AuthSwitch>
    </div>
  );
};

export default ForgetPage;

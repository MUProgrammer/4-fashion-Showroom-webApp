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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const res = forgotPassword(email);
    if (res?.error) setError(res.error);
  }
  return (
    <div>
      <AuthBrand />
      <AuthTitle>Reset your password</AuthTitle>
      <AuthError message={error} />

      <form onSubmit={handleSubmit}>
        <div className="mb-3.5">
          <label
            className="block text-[12.5px] text-muted mb-1.5 font-semibold"
            htmlFor="forgotEmail"
          >
            Email
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted">
              {ICONS.mail}
            </span>
            <input
              id="forgotEmail"
              type="email"
              autoComplete="username"
              required
              placeholder="you@example.com"
              className={inputClass()}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-solid btn-block bg-gradient-to-br from-wine to-wine-dark border-none shadow-[0_8px_20px_rgba(92,26,43,0.25)] hover:-translate-y-0.5 transition-transform"
        >
          Send reset code
        </button>
      </form>

      <AuthSwitch>
        <AuthLink onClick={() => navigate("/login")}>Back to login</AuthLink>
      </AuthSwitch>
    </div>
  );
};

export default ForgetPage;

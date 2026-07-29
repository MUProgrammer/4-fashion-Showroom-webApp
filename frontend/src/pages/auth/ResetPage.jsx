
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
const ResetPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const res = resetPassword(password, confirm);
    if (res?.error) setError(res.error);
    else {
      setPassword("");
      setConfirm("");
    }
  }
  return (
    <div>
      <AuthBrand />
      <AuthTitle>Set a new password</AuthTitle>
      <AuthError message={error} />

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
              id="resetPassword"
              type="password"
              autoComplete="new-password"
              required
              placeholder="At least 6 characters"
              className={inputClass()}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              id="resetConfirm"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Re-enter password"
              className={inputClass()}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-solid btn-block bg-gradient-to-br from-wine to-wine-dark border-none shadow-[0_8px_20px_rgba(92,26,43,0.25)] hover:-translate-y-0.5 transition-transform"
        >
          Reset password
        </button>
      </form>
    </div>
  );
};

export default ResetPage;

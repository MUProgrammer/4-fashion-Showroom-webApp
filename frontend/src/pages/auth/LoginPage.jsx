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
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <AuthBrand />
      <p className="text-center text-[11.5px] tracking-[2px] uppercase text-muted mb-[26px]">
        Shop manager
      </p>
      <AuthTitle>Login to your account</AuthTitle>
      {/* <AuthError message={error} /> */}

      <form onSubmit={handleSubmit}>
        <div className="mb-3.5">
          <label
            className="block text-[12.5px] text-muted mb-1.5 font-semibold"
            htmlFor="loginEmail"
          >
            Email
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted">
              {ICONS.mail}
            </span>
            <input
              id="loginEmail"
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
        <div className="mb-3.5">
          <label
            className="block text-[12.5px] text-muted mb-1.5 font-semibold"
            htmlFor="loginPassword"
          >
            Password
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted">
              {ICONS.lock}
            </span>
            <input
              id="loginPassword"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className={inputClass()}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end -mt-1 mb-2">
          <AuthLink onClick={() => goAuth("forgot")}>Forgot password?</AuthLink>
        </div>

        <button
          type="submit"
          className="btn btn-solid btn-block bg-gradient-to-br from-wine to-wine-dark border-none shadow-[0_8px_20px_rgba(92,26,43,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(92,26,43,0.32)] transition-transform"
        >
          Login
        </button>
      </form>

      <AuthSwitch>
        New here?{" "}
        <AuthLink onClick={() => navigate("/register")}>
          Create an account
        </AuthLink>
      </AuthSwitch>

      {/* <div className="mt-5 text-[11.5px] text-muted bg-[#F3EDE7] rounded-[10px] p-[12px_14px] leading-relaxed">
        Demo accounts (password <b className="text-wine-dark">123456</b>): <br />
        <b className="text-wine-dark">ceo@gmail.com</b> · <b className="text-wine-dark">admin@gmail.com</b> ·{' '}
        <b className="text-wine-dark">subadmin@gmail.com</b>
      </div> */}
    </div>
  );
};

export default LoginPage;

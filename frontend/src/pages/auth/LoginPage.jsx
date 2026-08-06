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
import api from "../../api";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // handle change function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // handlesubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      console.log(formData);
      const response = await fetch("http://localhost:5000/auth/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        //  login success
        localStorage.setItem("userInfo", JSON.stringify(data));

        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }
        if (data.cookie) {
          localStorage.setItem("authCookie", data.cookie);
        }

        navigate("/welcome"); //  home page par redirect
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <AuthBrand />
      <p className="text-center text-[11.5px] tracking-[2px] uppercase text-muted mb-[26px]">
        Shop manager
      </p>
      <AuthTitle>Login to your account</AuthTitle>
      {/* <AuthError message={error} /> */}
      {error && (
        <div className="bg-red-500/80 text-white text-sm rounded-lg px-3 py-2 mb-4 text-center">
          {error}
        </div>
      )}
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
              id="email"
              type="email"
              name="email"
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
            htmlFor="loginPassword"
          >
            Password
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted">
              {ICONS.lock}
            </span>
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className={inputClass()}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-end -mt-1 mb-2">
          <AuthLink onClick={() => navigate("/forget")}>
            Forgot password?
          </AuthLink>
        </div>

        <button
          ttype="submit"
          disabled={loading || !formData.email || !formData.password}
          className={`btn btn-solid btn-block bg-gradient-to-br from-wine to-wine-dark border-none shadow-[0_8px_20px_rgba(92,26,43,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(92,26,43,0.32)] transition-transform type="submit"
          ${loading || !formData.email || !formData.password ? "opacity-50 cursor-not-allowed" : ""}`}
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

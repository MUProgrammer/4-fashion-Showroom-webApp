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

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // handle change function()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    // check if password or confirm password are match
    if (formData.password !== formData.confirm) {
      setError("Password and confirm password does not match");
    }
    setLoading(true);
    try {
      const res = await api.post("/register",{
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true },);
        setSuccess(res.data.message || "Registered! Please verify your email." )
        // save the user in local storage
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            username: formData.username,
            email: formData.email,
          })
        )
        // 1 second bd verify py bhj du
        setTimeout(()=>{ 
          navigate("/verify")
        },1000)
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
      <AuthError message={error} />

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
              required
              placeholder="e.g. Ayesha Khan"
              className={inputClass()}
              value={form.name}
              onChange={update("name")}
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
              type="email"
              autoComplete="username"
              required
              placeholder="you@example.com"
              className={inputClass()}
              value={form.email}
              onChange={update("email")}
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
              type="password"
              autoComplete="new-password"
              required
              placeholder="At least 6 characters"
              className={inputClass()}
              value={form.password}
              onChange={update("password")}
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
              autoComplete="new-password"
              required
              placeholder="Re-enter password"
              className={inputClass()}
              value={form.confirm}
              onChange={update("confirm")}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-solid btn-block bg-gradient-to-br from-wine to-wine-dark border-none shadow-[0_8px_20px_rgba(92,26,43,0.25)] hover:-translate-y-0.5 transition-transform"
        >
          Send verification code
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

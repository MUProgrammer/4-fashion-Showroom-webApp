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

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");
   function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const res = register(form);
    if (res?.error) setError(res.error);
  }
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
        <AuthLink onClick={() => goAuth("login")}>Login</AuthLink>
      </AuthSwitch>
    </div>
  );
};

export default RegisterPage;

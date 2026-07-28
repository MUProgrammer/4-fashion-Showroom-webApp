import React, { useState } from "react";
import {
  AuthBrand,
  AuthTitle,
  AuthError,
  AuthSwitch,
  AuthLink,
  StepDots,
} from "./AuthBits.jsx";

const OtpPage = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const res = verifyOtp(code);
    if (res?.error) {
      setError(res.error);
    } else {
      setCode("");
    }
  }

  function handleResend() {
    const newCode = resendOtp();
    if (newCode)
      setHint("Demo mode (no real email sent) — your code is " + newCode);
  }
  return (
    <div>
      <AuthBrand />
      <StepDots steps={["Details", "Verify", "Approval"]} current={2} />
      <AuthTitle>Verify your email</AuthTitle>
      <p className="text-center text-[13px] text-muted mb-4">
        We sent a 6-digit code to{" "}
        <b className="text-wine-dark">{"—"}</b>
      </p>
      <AuthError message={error} />

      <form onSubmit={handleSubmit}>
        <div className="mb-3.5">
          <label
            className="block text-[12.5px] text-muted mb-1.5 font-semibold"
            htmlFor="otpInput"
          >
            Verification code
          </label>
          <input
            id="otpInput"
            maxLength={6}
            inputMode="numeric"
            required
            placeholder="——————"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-3 py-[9px] border-[1.5px] border-line rounded-lg tracking-[10px] text-[22px] text-center font-bold bg-[#F8F1EC] focus:outline-none focus:border-wine-light focus:shadow-[0_0_0_3px_rgba(92,26,43,0.1)]"
          />
        </div>
        <button
          type="submit"
          className="btn btn-solid btn-block bg-gradient-to-br from-wine to-wine-dark border-none shadow-[0_8px_20px_rgba(92,26,43,0.25)] hover:-translate-y-0.5 transition-transform"
        >
          Verify
        </button>
      </form>

      {/* {hint && (
        <div
          className="mt-5 text-[11.5px] text-muted bg-[#F3EDE7] rounded-[10px] p-[12px_14px] leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: hint.replace(
              /your code is (\d+)/,
              'your code is <b class="text-wine-dark">$1</b>',
            ),
          }}
        />
      )} */}

      <AuthSwitch>
        <AuthLink onClick={handleResend}>Resend code</AuthLink> ·{" "}
        <AuthLink onClick={() => goAuth("login")}>Cancel</AuthLink>
      </AuthSwitch>
    </div>
  );
};

export default OtpPage;

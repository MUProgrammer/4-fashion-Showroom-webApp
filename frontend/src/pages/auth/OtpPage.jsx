import React, { useState } from "react";
import {
  AuthBrand,
  AuthTitle,
  AuthError,
  AuthSwitch,
  AuthLink,
  StepDots,
} from "./AuthBits.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const OtpPage = (userEmail) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTime] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // Timer Logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);
  // Format time as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const second = time % 60;
    return `${minutes}:${second < 10 ? "0" : ""}${second}`;
  };
  // Resend OTP => Backend Call
  const handleResend = async () => {
    try {
      // get email from localStorage
      const userInfo = json.parse(localStorage.getItem("userInfo"));
      const userEmail = userInfo?.email;
      if (!userEmail) {
        alert("Email not found. Please signup again.");
        return;
      }
      const response = await fetch(
        "http://localhost:5000/auth/user/verifyOtp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email: userEmail }),
        },
      );
      const data = await response.json();
      if (response.ok) {
        setTimer(120); // reset timer
        setCanResend(false);
        setOtp(Array(6).fill("")); // clear OTP inputs
        alert(data.message);
      } else {
        alert(data.message || "Failed to resend OTP");
      }
    } catch (error) {
      alert("Error resending OTP: " + error.message);
    }
  };
  // verify OTP
  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/auth/user/verifyOtp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            verificationCode: enteredOtp, // backend expects this field
          }),
        },
      );
      const data = await response.json();
      alert(data.message);

      navigate("/pending");
    } catch (error) {
      alert("Error verifying OTP: " + error.message);
    }
  };
  // handle change
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };
  return (
    <div>
      <AuthBrand />
      <StepDots steps={["Details", "Verify", "Approval"]} current={2} />
      <AuthTitle>Verify your email</AuthTitle>
      <p className="text-center text-[13px] text-muted mb-4">
        We sent a 6-digit code to <b className="text-wine-dark">{"—"}</b>
      </p>
      {/* <AuthError message={error} /> */}

      <form onSubmit={handleSubmit}>
        <div className="mb-3.5">
          <label
            className="block text-[12.5px] text-muted mb-1.5 font-semibold"
            htmlFor="otpInput"
          >
            Verification code
          </label>
        </div>
        <div className="flex justify-between mb-8">
          {otp.map((digit, index) => (
            <input
              ikey={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              placeholder="——————"
              onChange={(e) => handleChange(e, index)}
              // className="w-full px-3 py-[9px] border-[1.5px] border-line rounded-lg tracking-[10px] text-[22px] text-center font-bold bg-[#F8F1EC] focus:outline-none focus:border-wine-light focus:shadow-[0_0_0_3px_rgba(92,26,43,0.1)]"
              className="w-12 h-12 text-center text-xl font-semibold 
                         border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-wine 
                         bg-white/70 shadow-sm"
            />
          ))}
        </div>
        {/* Timer Display */}
        <div className="text-center    mb-1 font-mono">
          {timer > 0 ? `Resend code in ${formatTime(timer)}` : "Code expired"}
        </div>
        <button
          type="submit"
          disabled={loading || timer <= 0 || otp.join("").length !== 6}
          className={`btn btn-solid btn-block bg-gradient-to-br from-wine to-wine-dark border-none shadow-[0_8px_20px_rgba(92,26,43,0.25)] hover:-translate-y-0.5 transition-transform
          ${
            loading || timer <= 0 || otp.join("").length !== 6
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }
          `}
        >
          {loading
            ? "Verifying..."
            : timer <= 0
              ? "Code Expired"
              : otp.join("").length !== 6
                ? "Enter OTP"
                : "Verify Code"}
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
      </AuthSwitch>
    </div>
  );
};

export default OtpPage;

// import React, { useEffect, useRef, useState } from "react";
// import {
//   AuthBrand,
//   AuthTitle,
//   AuthError,
//   AuthSwitch,
//   AuthLink,
//   StepDots,
// } from "./AuthBits.jsx";

// const NUM_DIGITS = 6;

// /* ===========================================================
//    Mock backend calls — replace with real API calls
// =========================================================== */

// function verifyOtp(code) {
//   // Demo rule: any 6-digit code except "000000" is accepted
//   if (code === "000000") {
//     return { error: "Invalid code, please try again." };
//   }
//   return { success: true };
// }

// function resendOtp() {
//   // Demo: generate a random 6-digit code
//   return String(Math.floor(100000 + Math.random() * 900000));
// }

// function goAuth(view) {
//   console.log("navigate to:", view);
// }

// /* ===========================================================
//    OTP boxes (input stage)
// =========================================================== */

// const OtpBoxes = ({ values, onChange, stage }) => {
//   const inputsRef = useRef([]);

//   const setDigit = (i, raw) => {
//     const digit = raw.replace(/[^0-9]/g, "").slice(-1);
//     const next = [...values];
//     next[i] = digit;
//     onChange(next);
//     if (digit && i < NUM_DIGITS - 1) {
//       inputsRef.current[i + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (i, e) => {
//     if (e.key === "Backspace" && !values[i] && i > 0) {
//       inputsRef.current[i - 1]?.focus();
//     }
//   };

//   return (
//     <div className="flex justify-center gap-[7px] mb-5">
//       {Array.from({ length: NUM_DIGITS }).map((_, i) => (
//         <input
//           key={i}
//           ref={(el) => (inputsRef.current[i] = el)}
//           maxLength={1}
//           inputMode="numeric"
//           pattern="[0-9]*"
//           disabled={stage !== "input"}
//           value={values[i]}
//           onChange={(e) => setDigit(i, e.target.value)}
//           onKeyDown={(e) => handleKeyDown(i, e)}
//           className={
//             "w-10 h-[50px] rounded-xl text-[18px] font-bold text-center border-[1.5px] border-line bg-[#fffdfb] text-charcoal outline-none " +
//             "transition-all duration-200 focus:border-wine-light focus:shadow-[0_0_0_3px_rgba(92,26,43,0.1)]" +
//             (values[i] ? " animate-[digitPop_0.28s_ease]" : "")
//           }
//         />
//       ))}
//     </div>
//   );
// };

// /* ===========================================================
//    Orbit "verifying" stage
// =========================================================== */

// const OrbitVerifying = ({ values }) => {
//   const radius = 78;
//   const [popped, setPopped] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setPopped(true), 1400);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <div className="flex flex-col items-center py-6">
//       <div className="text-[16px] font-semibold text-wine-dark mb-7">
//         Verifying your code…
//       </div>
//       <div className="relative w-[190px] h-[190px]">
//         <div
//           className="absolute inset-0"
//           style={{ animation: "spin 1.7s linear infinite" }}
//         >
//           {values.map((digit, i) => {
//             const angle = (360 / NUM_DIGITS) * i;
//             return (
//               <div
//                 key={i}
//                 className="absolute top-1/2 left-1/2 w-[34px] h-[42px] -ml-[17px] -mt-[21px]"
//                 style={{
//                   transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
//                 }}
//               >
//                 <div
//                   className="w-full h-full rounded-[10px] flex items-center justify-center text-[16px] font-bold border-2 border-wine-light bg-[#fffdfb] text-wine-dark shadow-[0_0_12px_rgba(92,26,43,0.35)]"
//                   style={{ animation: "counterspin 1.7s linear infinite" }}
//                 >
//                   {digit || "•"}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <div
//           className={
//             "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full flex items-center justify-center transition-colors duration-300 " +
//             (popped ? "bg-emerald-500" : "bg-[#fffdfb] border-2 border-line")
//           }
//           style={popped ? { animation: "digitPop 0.35s ease" } : undefined}
//         >
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="#fff"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             style={{
//               width: popped ? 30 : 0,
//               height: popped ? 30 : 0,
//               transition: "width 0.3s ease, height 0.3s ease",
//             }}
//           >
//             <polyline points="20 6 9 17 4 12" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ===========================================================
//    Success stage
// =========================================================== */

// const SuccessBadge = () => {
//   const [showUser, setShowUser] = useState(false);
//   const [showSecured, setShowSecured] = useState(false);

//   useEffect(() => {
//     const t1 = setTimeout(() => setShowUser(true), 250);
//     const t2 = setTimeout(() => setShowSecured(true), 500);
//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//     };
//   }, []);

//   return (
//     <div className="flex flex-col items-center py-4">
//       <div className="text-[19px] font-serif text-wine-dark mb-1.5">
//         Verified successfully
//       </div>
//       <div className="text-[13px] text-muted mb-6">
//         Your phone number has been verified.
//       </div>

//       <div className="relative w-[110px] h-[110px] flex items-center justify-center mb-5">
//         <div
//           className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.28)_0%,rgba(16,185,129,0)_70%)]"
//           style={{ animation: "ringGrow 1.4s ease-out infinite" }}
//         />
//         <div
//           className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.28)_0%,rgba(16,185,129,0)_70%)]"
//           style={{ animation: "ringGrow 1.4s ease-out infinite", animationDelay: "0.5s" }}
//         />
//         <div
//           className="relative w-[74px] h-[74px] rounded-full flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-600"
//           style={{ animation: "digitPop 0.4s ease" }}
//         >
//           <svg
//             viewBox="0 0 24 24"
//             width="36"
//             height="36"
//             fill="none"
//             stroke="#fff"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <polyline points="20 6 9 17 4 12" />
//           </svg>
//         </div>
//       </div>

//       <div
//         className={
//           "text-[15px] font-bold tracking-wide text-wine-dark mb-3.5 transition-all duration-300 " +
//           (showUser ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5")
//         }
//       >
//         CEO Approval
//       </div>

//       <div
//         className={
//           "text-[13px] font-semibold flex items-center gap-1.5 text-emerald-600 transition-opacity duration-300 " +
//           (showSecured ? "opacity-100" : "opacity-0")
//         }
//       >
//         <svg
//           viewBox="0 0 24 24"
//           width="13"
//           height="13"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <rect x="4" y="10" width="16" height="10" rx="2" />
//           <path d="M8 10V7a4 4 0 0 1 8 0v3" />
//         </svg>
//         Approved &amp; Secured
//       </div>
//     </div>
//   );
// };

// /* ===========================================================
//    Main OTP page
// =========================================================== */

// const OtpPage = () => {
//   const [digits, setDigits] = useState(Array(NUM_DIGITS).fill(""));
//   const [error, setError] = useState("");
//   const [hint, setHint] = useState("");
//   // stage: "input" -> "verifying" -> "success"
//   const [stage, setStage] = useState("input");

//   const code = digits.join("");
//   const isFull = digits.every((d) => d.length === 1);

//   function runVerify() {
//     setError("");
//     const res = verifyOtp(code);
//     if (res?.error) {
//       setError(res.error);
//       return;
//     }
//     setStage("verifying");
//     setTimeout(() => setStage("success"), 2000);
//   }

//   // auto-submit once all boxes are filled, mirroring the original widget
//   useEffect(() => {
//     if (isFull && stage === "input") {
//       const t = setTimeout(runVerify, 200);
//       return () => clearTimeout(t);
//     }
//   }, [isFull, stage]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!isFull) return;
//     runVerify();
//   }

//   function handleResend() {
//     const newCode = resendOtp();
//     if (newCode)
//       setHint("Demo mode (no real email sent) — your code is " + newCode);
//   }

//   function handleReset() {
//     setDigits(Array(NUM_DIGITS).fill(""));
//     setError("");
//     setStage("input");
//   }

//   return (
//     <div>
//       <style>{`
//         @keyframes digitPop {
//           0% { transform: scale(0.75); }
//           60% { transform: scale(1.1); }
//           100% { transform: scale(1); }
//         }
//         @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         @keyframes counterspin { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
//         @keyframes ringGrow {
//           0% { transform: scale(0.5); opacity: 0.9; }
//           100% { transform: scale(1.4); opacity: 0; }
//         }
//       `}</style>

//       <AuthBrand />
//       <StepDots steps={["Details", "Verify", "Approval"]} current={2} />

//       {stage === "input" && (
//         <>
//           <AuthTitle>Verify your email</AuthTitle>
//           <p className="text-center text-[13px] text-muted mb-4">
//             We sent a 6-digit code to <b className="text-wine-dark">{"—"}</b>
//           </p>
//           <AuthError message={error} />

//           <form onSubmit={handleSubmit}>
//             <OtpBoxes values={digits} onChange={setDigits} stage={stage} />
//             <button
//               type="submit"
//               disabled={!isFull}
//               className="btn btn-solid btn-block bg-gradient-to-br from-wine to-wine-dark border-none shadow-[0_8px_20px_rgba(92,26,43,0.25)] hover:-translate-y-0.5 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
//             >
//               Verify
//             </button>
//           </form>

//           {hint && (
//             <div
//               className="mt-5 text-[11.5px] text-muted bg-[#F3EDE7] rounded-[10px] p-[12px_14px] leading-relaxed"
//               dangerouslySetInnerHTML={{
//                 __html: hint.replace(
//                   /your code is (\d+)/,
//                   'your code is <b class="text-wine-dark">$1</b>',
//                 ),
//               }}
//             />
//           )}

//           <AuthSwitch>
//             <AuthLink onClick={handleResend}>Resend code</AuthLink> ·{" "}
//             <AuthLink onClick={() => goAuth("login")}>Cancel</AuthLink>
//           </AuthSwitch>
//         </>
//       )}

//       {stage === "verifying" && <OrbitVerifying values={digits} />}

//       {stage === "success" && (
//         <>
//           <SuccessBadge />
//           <div className="text-center mt-2">
//             <AuthLink onClick={handleReset}>Start over</AuthLink>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default OtpPage;

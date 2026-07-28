import React from 'react'
import { AuthBrand, AuthTitle, AuthSwitch, AuthLink, StepDots } from './AuthBits.jsx';
import { useNavigate } from 'react-router-dom';

const PandingPage = () => {
    const navigate = useNavigate();
  return (
    <div>
      <AuthBrand />
      <StepDots steps={['Details', 'Verify', 'Approval']} current={3} />
      <div className="text-center px-1 py-2.5">
        <div className="w-14 h-14 rounded-full bg-[#F3EDE7] text-wine text-2xl flex items-center justify-center mx-auto mb-4">
          ⏳
        </div>
        <AuthTitle>Email verified!</AuthTitle>
        <p className="text-[13px] text-muted leading-relaxed">
          Your account is created and waiting for the CEO's approval before you can log in. You'll be able to sign
          in as soon as the CEO activates your account.
        </p>
      </div>
      <AuthSwitch>
        <AuthLink onClick={() => navigate('/login')}>Back to login</AuthLink>
      </AuthSwitch>
    </div>
  )
}

export default PandingPage

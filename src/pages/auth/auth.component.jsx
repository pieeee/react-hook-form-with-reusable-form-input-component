import React from "react";

import RegisterForm from "../../components/auth-components/register/register.component";
import SignInForm from "../../components/auth-components/sign-in/sign-in.component";

import "./auth.styles.scss";

const Auth = () => {
  return (
    <div className="auth">
      <RegisterForm />
      <SignInForm />
    </div>
  );
};

export default Auth;

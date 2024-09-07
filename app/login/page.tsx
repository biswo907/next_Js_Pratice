import React from "react";
import LoginLayout from "../Layout/loginLayout";

const Login = () => {
  return <div>Login Form</div>;
};

Login.getLayout = (page: React.ReactNode) => {
  return <LoginLayout>{page}</LoginLayout>;
};

export default Login;

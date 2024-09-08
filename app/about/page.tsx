import React from "react";
import AuthProvider from "../auth/auth";

const About = () => {
  return (
    <AuthProvider>
      <div>About PAge</div>
    </AuthProvider>
  );
};

export default About;

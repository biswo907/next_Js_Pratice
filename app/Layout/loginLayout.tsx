// components/LoginLayout.tsx
import React from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-6 bg-white rounded-lg shadow-md w-96">{children}</div>
    </div>
  );
};

export default LoginLayout;

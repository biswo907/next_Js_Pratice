// /hooks/useAuth.ts
"use client";

import { useEffect } from "react";
import { isAuth } from "../utils/isAuth";
import { useRouter } from "next/navigation";
import GetPath from "./getPath";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const user = isAuth();
  const router = useRouter();
  console.log("USER............", user);

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
    if (
      window.location.pathname === "/login" ||
      window.location.pathname === "/signup"
    ) {
      if (user) {
        router.replace("/");
      }
    }
  }, [user]);

  return <>{children}</>;
};

export default AuthProvider;

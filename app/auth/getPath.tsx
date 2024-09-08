"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const GetPath = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (router.isReady) {
      // Only access the pathname when the router is ready
      setCurrentPath(router.pathname);
    }
  }, [router.isReady, router.pathname]);

  return currentPath;
};

export default GetPath;

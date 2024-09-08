"use client";
import React, { useState } from "react";
import LoginLayout from "../Layout/loginLayout";
import Ellipse_Button from "../assets/svg/ellips2.svg";
import Ellipse_Top from "../assets/svg/ellipse.svg";
import { useRouter } from "next/navigation";
import AuthProvider from "../auth/auth";

const Login = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    if (
      !values?.email ||
      !values?.password ||
      (!values?.email && !values.password)
    ) {
      alert("Please Fill all credentials");
      return;
    }
    console.log("VAlues", values);
    localStorage.setItem("user_email", values?.email);
    router.replace("/");
  };
  return (
    <AuthProvider>
      <div className="bg-gradient-to-tr  from-[#8fb3e9] via-[#347df3] to-[#0d67f7] min-h-screen max-h-screen max-w-full overflow-hidden">
        <img
          src={Ellipse_Top}
          alt=""
          className="w-[100%] fixed top-[-25%] left-[5%]"
        />
        <img
          src={Ellipse_Button}
          alt=""
          className="w-[81%] fixed top-[33%] left-[20%]"
        />

        <div className="h-screen w-screen  z-10 flex items-center justify-center flex-col">
          {/* <div className="bg-red-600 h-40 w-[500px] absolute top-[5%]">
              <img src={Staffezylogo} alt="" />
            </div> */}
          <div className="flex flex-col px-16 z-[1000] pt-14 pb-20 x` max-md:px-5 bg-white shadow-xl rounded-md">
            <div className="self-stretch w-full text-xl font-semibold text-zinc-800">
              Sign in to your account
            </div>
            <div className="flex flex-col mt-10 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="email"
                  className="self-stretch w-full text-xs whitespace-nowrap text-zinc-800 py-2"
                >
                  Email
                </label>
                <input
                  placeholder="Enter Email"
                  className={`bg-white border border-gray-300  w-full h-full px-3 py-3 rounded-lg outline-none`}
                  value={values?.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e?.target?.value })
                  }
                />
              </div>
              <div className="flex flex-col mt-4 w-full">
                <label
                  htmlFor="password"
                  className="self-stretch w-full text-xs whitespace-nowrap text-zinc-800 py-2"
                >
                  Password
                </label>
                <div
                  className={`border border-gray-300 flex gap-2.5 px-3 items-center mt-1 w-full bg-white   rounded-lg min-h-[44px]`}
                >
                  <div className="flex-1  min-w-[240px]">
                    <input
                      maxLength={27}
                      placeholder="Enter Your Password"
                      className=" h-full w-full  py-3 bg-transparent outline-none   whitespace-nowrap text-zinc-800 "
                      value={values?.password}
                      onChange={(e) =>
                        setValues({ ...values, password: e?.target?.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-row items-center justify-center relative mt-6">
              {/* <button
              disabled={isLoading}
              onClick={onSubmit}
              className="button-container"
            >
              <p className={`text ${isLoading ? "slide-up" : ""}`}>Sign in</p>
              {isLoading && <div className="loader loader-fade-in"></div>}
            </button> */}

              <button
                onClick={handleLogin}
                className="button-container bg-indigo-500 w-full p-3 rounded-md text-white"
              >
                <p>Sign in</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
};

Login.getLayout = (page: React.ReactNode) => {
  return <LoginLayout>{page}</LoginLayout>;
};

export default Login;

"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { userStore } from "@/Store/userSlices";
import { TUserCred } from "@/Utils/Types";

export default function LoginForm() {
  const router = useRouter();

  const { setCurrentUser, currentUser, error } = userStore();

  const [sessionData, setSessionData] = useState({
    userName: "",
    password: "",
  });

  const handleData = (e: any) => {
    setSessionData({ ...sessionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const fakeCred: TUserCred = {
      userName: sessionData.userName,
      password: sessionData.password,
    };
    setCurrentUser(fakeCred);
    if (error) {
      alert(error);
    }
    if (currentUser) {
      router.push("/main");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 justify-center items-center border border-gray-700 rounded-lg p-8 shadow-lg bg-[#2fa7b5]"
      >
        <h1 className="text-2xl text-pretty">Iniciar Sesión</h1>
        <Input
          type="text"
          name="userName"
          onChange={handleData}
          placeholder="UserName"
          value={sessionData.userName}
        />
        <Input
          type="password"
          name="password"
          onChange={handleData}
          value={sessionData.password}
          placeholder="Password"
        />
        <p className="my-0.5 text-red-600/90"></p>
        <Button
          type="submit"
          variant="default"
          className="px-7 text-xl hover:shadow-md hover:border border-white"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

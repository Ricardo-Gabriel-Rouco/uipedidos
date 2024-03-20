"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { userStore } from "@/Store/userSlices";
import { TUserCred } from "@/Utils/Types";
import styles from "./LoginForm.module.css";

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
    if(error) {
      alert(error)
    }
    if (currentUser) {
      router.push("/main");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.container}>
        <h1>Iniciar Sesión</h1>
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

        <Button type="submit" variant="default">
          Login
        </Button>
      </form>
    </>
  );
}

"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import styles from "./LoginForm.module.css";
export default function LoginForm() {
  const [sessionData, setSessionData] = useState({
    userName: "",
    password: "",
  });

  const handleData = (e: any) => {
    setSessionData({ ...sessionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(sessionData);
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

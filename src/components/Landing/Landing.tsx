"use client";
import { useState, useEffect } from "react";
import LoginForm from "@/components/LoginForm/LoginForm";
import MainDisplay from "../MainDisplay/MainDisplay";
import { TUserCred } from "@/Utils/Types";
export default function Landing() {
  const [cred, setCred] = useState<TUserCred>({});

  useEffect(() => {
    const { userCred } = JSON.parse(
      window.localStorage.getItem("userCred") || "{}"
    );
    setCred(userCred);
  }, []);

  return <>{cred?.token ? <MainDisplay /> : <LoginForm />}</>;
}

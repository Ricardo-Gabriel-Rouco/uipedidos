"use client";
import { useState, useEffect } from "react";
import LoginForm from "@/components/LoginForm/LoginForm";
import MainDisplay from "../../app/main/page";
import { TUserCred } from "@/Utils/Types";

export default function Landing() {
  const [cred, setCred] = useState<TUserCred>({});
  const storedUserCred = localStorage.getItem("currentUser");

  useEffect(() => {
  
    if (storedUserCred) {
      try {
        const userCred = JSON.parse(storedUserCred);
        setCred(userCred);
      } catch (error) {
        console.error("Error parsing stored user credentials:", error);
      }
    }
  }, []);

  return <>{cred?.token ? <MainDisplay /> : <LoginForm />}</>;
}

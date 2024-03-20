"use client";
import { useState, useEffect } from "react";
import LoginForm from "@/components/LoginForm/LoginForm";
import MainDisplay from "../../app/main/page";
import { TUserCred } from "@/Utils/Types";

export default function Landing() {
  const [cred, setCred] = useState<TUserCred | null>(null);
  // const storedUserCred = localStorage.getItem("currentUser");

  useEffect(() => {
  
    const storedUserCred = window.localStorage.getItem('currentUser');
    if (storedUserCred) {
      const parsedUserCred: TUserCred = JSON.parse(storedUserCred);
      setCred(parsedUserCred);
    }
  }, []);

  return <>{cred?.token ? <MainDisplay /> : <LoginForm />}</>;
}

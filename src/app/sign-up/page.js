import PlainLayout from "@/components/master/PlainLayout";
import SignUpForm from "@/components/user/SignUpForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const SignUp = () => {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if(typeof token !== "undefined"){
    redirect('/')
  }

  return (
    <PlainLayout>
      <SignUpForm />
    </PlainLayout>
  );
};

export default SignUp;

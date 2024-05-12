"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const EmailActivation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState("");

  const email = searchParams.get("email");
  const otp = searchParams.get("otp");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        if (!email || !otp) {
          setMessage("Invalid Activate URL");
          return;
        }

        const response = await fetch("/api/user/activate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp }),
        });

        const data = await response.json();

        if (data.status === "success") {
          setMessage("Activated successfully");
          router.push("/login");
        } else {
          console.error("Failed to verify email");
          setMessage(data.data);
        }
      } catch (error) {
        console.error("Error verifying email:", error);
      }
    };

    verifyEmail();
  }, []);

  return (
      <div className="text-md font-bold min-h-[500px] flex flex-col justify-center items-center text-gray-500">
        {message === 'Invalid Activate URL' ? <img className="w-12 mb-5" src="/Error.png" alt="" />: <img className="w-12 mb-5" src="/tick.png" alt="" />}
        {message}
      </div>
  );
};

export default EmailActivation;

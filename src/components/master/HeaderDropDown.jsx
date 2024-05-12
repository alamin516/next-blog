"use client"
import { SuccessToast } from "@/utility/FormValidation";
import Link from "next/link";
import React from "react";

const HeaderDropDown = () => {
  const handleLogin = async () => {
    try {
      const response = await fetch("/api/user/login");
      SuccessToast('Logout User!')
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="dropdown dropdown-hover hidden md:block">
      <div className="avatar avatar-ring-primary" tabIndex="0">
        <img
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          alt="avatar"
        />
      </div>
      <div className="dropdown-menu dropdown-menu-bottom-left backdrop-blur bg-black/80 shadow-lg z-50">
        <Link href={"/user/profile"} className="dropdown-item text-sm hover:bg-blue-500 mb-1">Profile</Link>
        <Link href={"/user/comments"} tabIndex="-1" className="dropdown-item text-sm hover:bg-blue-500 mb-1">
          Comments
        </Link>
        <button onClick={handleLogin} tabIndex="-1" className="dropdown-item text-sm bg-blue-500 mb-1">
          Logout
        </button>
      </div>
    </div>
  );
};

export default HeaderDropDown;

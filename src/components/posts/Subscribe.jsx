"use client";
import React, { useState } from "react";
import SubmitButton from "@/components/master/SubmitButton";
import { ErrorToast, IsEmail, SuccessToast } from "@/utility/FormValidation";
import TornadoLoading from "../master/TornadoLoading";

const Subscribe = () => {
  const [data, setData] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  async function formSubmit() {
    if (IsEmail(data.email)) {
      ErrorToast("Valid Email Address Required!");
    } else {
      setSubmit(true);
      const options = { method: "POST", body: JSON.stringify(data) };
      let res = await (await fetch("/api/subscribe", options)).json();
      setSubmit(false);
      setData({ email: "" });

      res["status"] === "success"
        ? SuccessToast("Subscribed!")
        : ErrorToast("Already Subscribed!");
    }
  }

  return (

    <div className="mx-auto max-w-md rounded-lg bg-white shadow p-6">
  <div className="flex justify-center items-center mb-6">
    <span className="text-5xl text-blue-600"><i className="bi bi-envelope"></i></span>
  </div>
  <h3 className="text-center text-xl font-semibold text-gray-900 mb-3">Subscribe to Our Newsletter</h3>
  <div className="mb-6">
    <input
      value={data.email}
      onChange={(e) => { inputOnChange('email', e.target.value) }}
      type="text"
      placeholder="Your Email Address"
      className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none bg-gray-100 text-[#334155] focus:dark:bg-gray-50"
    />
  </div>
  <SubmitButton onClick={formSubmit} className="btn btn-primary w-full" submit={submit} text="Subscribe" />
</div>

  );
};

export default Subscribe;

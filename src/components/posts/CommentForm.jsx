"use client";
import React, { useState } from "react";
import SubmitButton from "@/components/master/SubmitButton";
import { useRouter } from "next/navigation";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utility/FormValidation";


const CommentForm = ({ postID }) => {
  let router = useRouter();
  let [data, setData] = useState({
    postID: parseInt(postID),
    description: "",
  });
  let [submit, setSubmit] = useState(false);

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  console.log(data)

  const formSubmit = async () => {
    if (IsEmpty(data.description)) {
      ErrorToast("Comment Descriptions Required!");
    } else {
      setSubmit(true);
      const options = { method: "POST", body: JSON.stringify(data) };
      let res = await (await fetch("/api/comments/manage", options)).json();

      setSubmit(false);

      if (res["status"] === "success") {
        SuccessToast("Comment Completed");
        setData({ postID: parseInt(postID), description: "" });
        router.refresh();
      } else {
        router.replace("/login");
      }
    }
  };

  return (
    <div className="col-12">
      <textarea
        value={data.description}
        rows={6}
        onChange={(e) => {
          inputOnChange("description", e.target.value);
        }}
        className="form-control mb-2 border border-gray-300 bg-gray-50 rounded-md p-2 w-full"
        placeholder="Write yours..."
      />
      <SubmitButton
        className="mt-3 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 lg:w-3/12"
        onClick={formSubmit}
        submit={submit}
        text="Submit"
      />
    </div>
  );
};

export default CommentForm;

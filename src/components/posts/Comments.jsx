"use client";
import { useState } from "react";
import CommentForm from "./CommentForm";

const Comments = ({ postID, data, isLogin }) => {
  const [activeTab, setActiveTab] = useState("comments");




  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-1 mt-5">
      <ul className="flex items-center gap-2 text-sm font-medium">
        <li>
          <a
            onClick={() => setActiveTab("comments")}
            className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white text-gray-700 hover:shadow ${
              activeTab === "comments" ? "bg-white shadow text-gray-700" : ""
            }`}
          >
            {" "}
            Comments ({data ? data?.length : 0})
          </a>
        </li>
        <li>
          <a
            onClick={() => setActiveTab("create")}
            className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white text-gray-700 hover:shadow ${
              activeTab === "create" ? "bg-white shadow text-gray-700" : ""
            }`}
          >
            {" "}
            Create
          </a>
        </li>
      </ul>

      <div className="py-3 text-gray-500 md:p-5">
        <div className={activeTab === "comments" ? "block" : "hidden"}>
          {!data ? (
            "No Comments Found"
          ) : (
            <ul className="list-group bg-transparent divide-y divide-gray-200">
              {data?.map((item, i) => (
                <li key={i} className="bg-transparent py-4">
                  <h6 className="text-gray-900 flex gap-3 mb-2">
                  <img className="w-5 h-5" src="/user.svg" alt="userIcon" />

                    {item["user"]["first_name"]} {item["user"]["last_name"]}
                  </h6>
                  <p className="text-gray-500">{item["description"]}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={activeTab === "create" ? "block" : "hidden"}>
          {isLogin ? (
            <CommentForm postID={postID} />
          ) : (
            <div className="text-center p-5">
              <div className="login-message">
                Please login to leave a comment.
              </div>
              <a href="/login" state="">Login</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;

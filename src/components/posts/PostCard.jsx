import Link from "next/link";
import React from "react";
import PostDate from "./PostDate";

const PostCard = ({post}) => {
  return (
    <div
      
      className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow"
    >
      <Link href={`/post?id=${post["id"]}`}>
        <img
          src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          className="aspect-video w-full object-cover"
          alt=""
        />
      </Link>
      <div className="p-4">
        <p className="mb-1 text-sm text-gray-400">
          Admin •{" "}
          <time>
            <PostDate createdAt={post["createdAt"]} />
          </time>
        </p>

        <Link href={`/post?id=${post["id"]}`}>
          <h3 className="text-xl font-medium text-gray-900">{post["title"]}</h3>
        </Link>

        <p className="mt-1 text-gray-500 text-justify">
          {post["shortDes"].slice(0, 200)}
        </p>
        {post["keywords"] && (
          <div className="mt-4 flex gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
              {" "}
              Design{" "}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
              {" "}
              Product{" "}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
              {" "}
              Develop{" "}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;

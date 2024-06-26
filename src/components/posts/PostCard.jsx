import Link from "next/link";
import React from "react";
import PostDate from "./PostDate";

const PostCard = ({ post }) => {
  const keywords = post.keywords.split(",");

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
      <Link href={`/post?id=${post["id"]}`}>
        <img
          src={post["img1"]}
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
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                  index % 2 === 0
                    ? "text-blue-600 bg-blue-50"
                    : "text-green-600 bg-green-50"
                }`}
              >
                {keyword.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;

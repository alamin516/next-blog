import Link from "next/link";
import PostDate from "./PostDate";

const PopularPosts = ({ data }) => {
  return (
    <>
      <div className="pb-5">
        <h3 className="text-start text-xl font-semibold text-gray-900 mb-3">
          Popular Posts
        </h3>
        <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
          <ul className="divide-y divide-gray-100 py-2 px-4">
            {data.popular.map((item, i) => {
              return (
                <li key={i} className="flex py-4">
                  <div className="mr-4 flex-1">
                    <Link href={`/post?id=${item["id"]}`}>
                      <h4 className="text-lg font-medium text-gray-900">
                        {item["title"]}
                      </h4>
                    </Link>
                    <div className="mt-1 text-sm text-gray-400">
                      <span>Admin</span> •{" "}
                      <time>
                        <PostDate createdAt={item["createdAt"]} />
                      </time>
                    </div>
                  </div>
                  <div>
                    <img
                      src={item["img1"]}
                      alt={item["title"]}
                      className="h-20 w-20 rounded-lg object-cover"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PopularPosts;

import EmptyData from "@/components/master/EmptyData";
import PlainLayout from "@/components/master/PlainLayout";
import Sidebar from "@/components/master/Sidebar";
import Breadcrumb from "@/components/posts/Breadcrumb";
import PostsList from "@/components/posts/PostsLists";
import React from "react";

async function getData(id) {
  let posts = (
    await (
      await fetch(`${process.env.BASE_URL}/api/posts/category?catID=${id}`)
    ).json()
  )["data"];
  let category = (
    await (
      await fetch(`${process.env.BASE_URL}/api/categories/category?id=${id}`)
    ).json()
  )["data"];
  return { posts: posts, category: category };
}



const Page = async ({ searchParams }) => {
  let id = searchParams["id"];
  const data = await getData(id);

  return (
    <PlainLayout>
      <div className="container mx-auto pb-10">
        <div className="flex flex-wrap">
          <div className="w-full md:w-9/12 sm:w-full px-3">
            <Breadcrumb title={data["category"]["name"]} />
            {data && data.posts && data.posts.length > 0 ? (
              <PostsList data={data.posts} />
            ) : (
              <EmptyData />
            )}
          </div>
          <div className="w-full md:w-3/12 sm:w-full px-3 md:mt-0 mt-10">
            <Sidebar />
          </div>
        </div>
      </div>
    </PlainLayout>
  );
};

export default Page;

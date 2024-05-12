import EmptyData from "@/components/master/EmptyData";
import PlainLayout from "@/components/master/PlainLayout";
import PopularPosts from "@/components/posts/PopularPosts";
import PostsList from "@/components/posts/PostsLists";
import Subscribe from "@/components/posts/Subscribe";
import React from "react";

async function getData(keyword) {
  let popular = (
    await (
      await fetch(`${process.env.BASE_URL}/api/posts/type?type=popular`)
    ).json()
  )["data"];
  let posts = (
    await (await fetch(`${process.env.BASE_URL}/api/posts/search?keyword=${keyword}`)).json()
  )["data"];

  return {popular: popular, posts: posts };
}

const page = async ({searchParams}) => {
    const keyword = searchParams['keyword'];
  const data = await getData(keyword)



  return (
    <PlainLayout>
     <div className="container mx-auto pb-10">
        <div className="flex flex-wrap">
          <div className="w-full md:w-9/12 sm:w-full px-3">
            <h3 className="text-start text-xl font-semibold text-gray-900 mb-3"></h3>
            {data && data.posts && data.posts.length > 0 ? (
              <PostsList data={data.posts} />
            ) : (
              <EmptyData/>
            )}
          </div>
          <div className="w-full md:w-3/12 sm:w-full px-3 md:mt-0 mt-10">
            <PopularPosts data={data} />
            <Subscribe />
          </div>
        </div>
      </div>
    </PlainLayout>
  );
};

export default page;

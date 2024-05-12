import PlainLayout from "@/components/master/PlainLayout";
import Comments from "@/components/posts/Comments";
import PopularPosts from "@/components/posts/PopularPosts";
import PostDetails from "@/components/posts/PostDetails";
import Subscribe from "@/components/posts/Subscribe";
import { cookies } from "next/headers";
import React from "react";

async function getData(id) {
  let popular = (
    await (
      await fetch(`${process.env.BASE_URL}/api/posts/type?type=popular`)
    ).json()
  )["data"];
  let post = (
    await (
      await fetch(`${process.env.BASE_URL}/api/post/details?id=${id}`)
    ).json()
  )["data"];
  let comments= (await (await fetch(`${process.env.BASE_URL}/api/comments/post?postID=${id}`,{ cache: 'no-store' })).json())['data']

  return {popular: popular, post: post, comments: comments};
}

const page = async({searchParams}) => {
  const id = searchParams['id'];
  const data = await getData(id)

  console.log(data['comments'])


  const cookieStore = cookies();
  const token = cookieStore.get("token");
  let isLogin = false;

  if (typeof token === "undefined") {
    isLogin = false;
  } else {
    isLogin = true;
  }

  return (
    <PlainLayout>
      <div className="container mx-auto pb-10">
        <div className="flex flex-wrap">
          <div className="w-full md:w-9/12 sm:w-full px-3">
            <PostDetails post={data['post']}/>
            <Comments postID={id} data={data['comments']} isLogin={isLogin}/>
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

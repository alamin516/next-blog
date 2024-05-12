import PlainLayout from "@/components/master/PlainLayout";
import Hero from "@/components/posts/Hero";
import PopularPosts from "@/components/posts/PopularPosts";
import PostsList from "@/components/posts/PostsLists";
import Subscribe from "@/components/posts/Subscribe";


async function getData() {
  let slider = (
    await (await fetch(`${process.env.BASE_URL}/api/posts/type?type=slider`)).json()
  )["data"];
  let featured = (
    await (await fetch(`${process.env.BASE_URL}/api/posts/type?type=featured`)).json()
  )["data"];
  let popular = (
    await (await fetch(`${process.env.BASE_URL}/api/posts/type?type=popular`)).json()
  )["data"];
  let posts = (
    await (await fetch(`${process.env.BASE_URL}/api/posts/latest`)).json()
  )["data"];

  return { slider: slider, featured:featured, popular:popular, posts:posts};
}


export default async function Home() {
  const data = await getData();

  return (
    <>
      <PlainLayout>
        <Hero data={data}/>
        <div className="container mx-auto pt-5 pb-10">
          <div className="flex flex-wrap pt-5">
            <div className="w-full md:w-9/12 sm:w-full px-3">
              <h3 className="text-start text-xl font-semibold text-gray-900 mb-3">
                Latest
              </h3>
              <PostsList data={data["posts"]}/>
            </div>
            <div className="w-full md:w-3/12 sm:w-full px-3">
              <PopularPosts data={data}/>
              <Subscribe />
            </div>
          </div>
        </div>
      </PlainLayout>
    </>
  );
}

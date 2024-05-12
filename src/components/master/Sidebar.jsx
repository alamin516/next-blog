import React from "react";
import PopularPosts from "../posts/PopularPosts";
import Subscribe from "../posts/Subscribe";

async function getData() {
    let popular = (
      await (await fetch(`${process.env.BASE_URL}/api/posts/type?type=popular`)).json()
    )["data"];
  
    return { popular:popular};
  }

const Sidebar = async() => {
    const data = await getData();
  return (
    <>
      <PopularPosts data={data} />
      <Subscribe />
    </>
  );
};

export default Sidebar;

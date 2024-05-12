import React from "react";
import AppNavbar from "./AppNavbar";
import { cookies } from "next/headers";
import Footer from "./Footer";

async function getData() {
  let socials = (
    await (
      await fetch(`${process.env.BASE_URL}/api/social`, { cache: "no-store" })
    ).json()
  )["data"];
  let categories = (
    await (await fetch(`${process.env.BASE_URL}/api/categories`)).json()
  )["data"];
  return { socials: socials, categories: categories };
}

const PlainLayout = async ({ children }) => {
  const data = await getData();

  const cookieStore = cookies();
  const token = cookieStore.get("token");
  let isLogin = false;

  if (typeof token === "undefined") {
    isLogin = false;
  } else {
    isLogin = true;
  }

  return (
    <>
      <AppNavbar isLogin={isLogin} data={data} />
      <div className="pt-24">{children}</div>
      <Footer socials={data['socials'][0]} categories={data["categories"]}/>
    </>
  );
};

export default PlainLayout;

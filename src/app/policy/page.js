import PlainLayout from "@/components/master/PlainLayout";
import Sidebar from "@/components/master/Sidebar";
import React from "react";
import parse from 'html-react-parser'

async function getData(id) {
  let policy = (
    await (
      await fetch(`${process.env.BASE_URL}/api/privacy-policy?type=policy`)
    ).json()
  )["data"];

  return {policy: policy};
}

const page = async() => {
  const data = await getData();

  return (
    <PlainLayout>
      <div className="container mx-auto pb-10">
        <div className="flex flex-wrap ">
          <div className="w-full md:w-9/12 sm:w-full px-3">
            <div className="overflow-hidden rounded-lg bg-white shadow md:p-3">
              <div className="text-gray-800">{parse(data.policy["longDes"])}</div>
            </div>
          </div>
          <div className="w-full md:w-3/12 sm:w-full px-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </PlainLayout>
  );
};

export default page;

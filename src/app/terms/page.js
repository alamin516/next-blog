import PlainLayout from "@/components/master/PlainLayout";
import Sidebar from "@/components/master/Sidebar";
import React from "react";
import parse from 'html-react-parser'
import Breadcrumb from "@/components/posts/Breadcrumb";

async function getData(id) {
  let terms = (
    await (
      await fetch(`${process.env.BASE_URL}/api/privacy-policy?type=terms`)
    ).json()
  )["data"];

  return {terms: terms};
}

const page = async() => {
  const data = await getData();

  return (
    <PlainLayout>
      <div className="container mx-auto pb-10">
        <div className="flex flex-wrap ">
          <div className="w-full md:w-9/12 sm:w-full px-3">
            <Breadcrumb title={'Terms'}/>
            <div className="overflow-hidden rounded-lg bg-white shadow md:p-3">
              <div className="text-gray-800">{parse(data.terms["longDes"])}</div>
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

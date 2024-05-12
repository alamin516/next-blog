"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const PostSlider = ({ data }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper overflow-hidden"
      >
        {data?.map((item, i) => {
          return (
            <SwiperSlide key={i} className="relative flex items-center justify-center h-96">
              <Link href={`/post?id=1`}>
                <img
                  alt={item.title}
                  className="w-full rounded-lg h-96 lg:h-[500px] overflow-hidden "
                  src={item['img1']}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-20 hover:bg-opacity-70 transition duration-300 rounded-lg text-center pb-10">
                  <h4 className="text-white text-lg font-bold">{item.title}</h4>
                  <p className="text-white text-sm">{item.shortDes.slice(0,150)}</p>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PostSlider;

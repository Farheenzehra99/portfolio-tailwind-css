
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "../constant";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { BackgroundBeamsWithCollision } from '@/app/components/BackgroundBeamsWithCollision';

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/pictures/Mountains.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
          <BackgroundBeamsWithCollision>

      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
        <h2 className="lg:text-4xl md:text-4xl text-3xl font-serif text-center mb-12 text-white">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-blue-600 to-pink-400 font-serif lg:text-5xl">
           Skills
          </span>
        </h2>
          <p className="text-gray-400 text-[20px]">
            Using the latest tech this world has to offer
          </p>
        </div>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </BackgroundBeamsWithCollision>

    </div>
  );
};

export default Page;
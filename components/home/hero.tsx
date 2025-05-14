"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 w-full h-[500px] mt-2 relative">
      <div className="bg-white md:col-span-3 col-span-5 row-span-4 relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            enabled: true,
            hideOnClick: true,
          }}
          className="w-full h-full"
        >
          <SwiperSlide>
            <Image src="/hero1.avif" alt="hero1" fill className="object-cover rounded-md" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/hero2.avif" alt="hero2" fill className="object-cover rounded-md" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/hero3.avif" alt="hero3" fill className="object-cover rounded-md" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* hero2 */}
      <div className=" col-start-4 col-span-2 row-span-2 md:flex items-center justify-center relative hidden">
        <Link href={"/"}>
          <Image src="/hero2.avif" alt="hero2" className="rounded-md" width={400} height={400}></Image>
        </Link>
      </div>

      {/* hero3 */}
      <div className=" relative col-start-4 col-span-2 row-start-3 row-span-2 md:flex items-center justify-center hidden">
        <Link href={"/"}>
          <Image src="/hero3.avif" alt="hero2" className="rounded-md" width={400} height={400}></Image>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gray-100">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide className="cursor-pointer">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Content */}
              <div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold py-4">
                  Alowishus Delicious{" "}
                  <span className="relative inline-block">
                    Coffee
                    <Image
                      src="/coffee/cafeoftheyear.png"
                      alt="Coffee of the Year"
                      width={80}
                      height={80}
                      className="absolute -top-6 -right-20 hidden md:block"
                    />
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  fuga aliquam odit adipisci id nisi impedit nostrum! Hic,
                  placeat adipisci!
                </p>
                <div className="py-6 flex flex-wrap gap-4">
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-all tracking-wide">
                    Download App
                  </button>
                  <button className="bg-white text-black px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-all">
                    Shop Coffee
                  </button>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                <Image
                  src="/coffee/coffee-mug-on-hand.png"
                  alt="Coffee Mug on the Hand"
                  fill
                  className="object-contain absolute bottom-0 right-0"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold py-4">
                  Alowishus Delicious{" "}
                  <span className="relative inline-block">
                    Coffee
                    <Image
                      src="/coffee/cafeoftheyear.png"
                      alt="Coffee of the Year"
                      width={80}
                      height={80}
                      className="absolute -top-6 -right-20 hidden md:block"
                    />
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  fuga aliquam odit adipisci id nisi impedit nostrum! Hic,
                  placeat adipisci!
                </p>
                <div className="py-6 flex flex-wrap gap-4">
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-all tracking-wide">
                    Download App
                  </button>
                  <button className="bg-white text-black px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-all">
                    Shop Coffee
                  </button>
                </div>
              </div>
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                <Image
                  src="/coffee/cofee-mug.png"
                  alt="Coffee Mug on the Hand"
                  fill
                  className="object-contain absolute bottom-0 right-0"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold py-4">
                  Alowishus Delicious{" "}
                  <span className="relative inline-block">
                    Coffee
                    <Image
                      src="/coffee/cafeoftheyear.png"
                      alt="Coffee of the Year"
                      width={80}
                      height={80}
                      className="absolute -top-6 -right-20 hidden md:block"
                    />
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  fuga aliquam odit adipisci id nisi impedit nostrum! Hic,
                  placeat adipisci!
                </p>
                <div className="py-6 flex flex-wrap gap-4">
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-all tracking-wide">
                    Download App
                  </button>
                  <button className="bg-white text-black px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-all">
                    Shop Coffee
                  </button>
                </div>
              </div>
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                <Image
                  src="/coffee/three-coffee-mug.png"
                  alt="Coffee Mug on the Hand"
                  fill
                  className="object-contain absolute bottom-0 right-0"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;

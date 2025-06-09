import { Button } from "@headlessui/react";
import Image from "next/image";
import React from "react";

const InstantCoffee = () => {
  return (
    <div className="bg-gray-100">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center py-10 max-w-4xl mx-auto">
        {/* Text Section First */}
        <div className="ml-6 md:-ml-18">
          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            Instant Coffee
          </h1>
          <p className="text-base md:text-lg text-gray-500 py-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            ea suscipit eos magni quo, tenetur doloribus eveniet ut dicta,
            aliquam consequuntur porro labore voluptatem odFio voluptatum dolor
            vero qui. Quaerat.
          </p>
          <Button className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg mt-4 md:mt-2">
            DOWNLOAD OUR APP
          </Button>
        </div>

        {/* Image Section Second */}
        <div className="mt-4">
          <Image
            src="/coffee/three-coffee-mug.png"
            alt="Coffee Mug"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default InstantCoffee;

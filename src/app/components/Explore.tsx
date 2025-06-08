import { Button } from "@headlessui/react";
import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Section Title */}
      <div className="text-center py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold">Explore Our Alowsius</h1>
        <p className="text-base md:text-lg text-gray-500 py-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          ea suscipit eos magni quo, tenetur doloribus eveniet ut dicta, aliquam
          consequuntur porro labore voluptatem odio voluptatum dolor vero qui.
          Quaerat.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto cursor-pointer ">
        <div className="shadow-md p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition-all">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Our Catering
          </h2>
          <p className="mb-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
            corrupti.
          </p>
          <Button className="bg-gray-900 text-white px-6 py-3 rounded-md shadow-lg">
            Order Catering
          </Button>
        </div>

        <div className="shadow-2xl p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition-all">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">The Food</h2>
          <p className="mb-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, tempora!
          </p>
          <Button className="bg-gray-900 text-white px-6 py-3 rounded-md shadow-lg">
            Food Menu
          </Button>
        </div>

        <div className="shadow-2xl p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition-all">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">The Galeto</h2>
          <p className="mb-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, iure!
          </p>
          <Button className="bg-gray-900 text-white px-6 py-3 rounded-md shadow-lg">
            Discover
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Explore;

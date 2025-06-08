import { Button } from "@headlessui/react";
import Image from "next/image";
import React from "react";

const SellingCoffee = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-xl shadow-md  flex flex-col text-start hover:shadow-xl hover:scale-105 cursor-pointer transition-all">
            {/* Top Section: Image + Title Row */}
            <div className="flex items-center gap-4">
              <Image
                src="/coffee/cofee-mug.png"
                alt="Coffee Mug"
                width={150}
                height={150}
                className="object-contain"
              />
              <div>
                <p className="text-lg text-gray-500 tracking-wider">
                  #1 Selling
                </p>
                <h2 className="text-2xl font-semibold">Double Espresso</h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              culpa quidem at repellendus.
            </p>
            <div className="flex justify-between items-center mt-6">
              <p className="text-xl font-bold">$59.99</p>
              <Button className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg">
                ORDER NOW
              </Button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col text-start hover:shadow-xl hover:scale-105 cursor-pointer transition-all">
            <div className="flex items-center gap-4">
              <Image
                src="/coffee/cofee-mug.png"
                alt="Coffee Mug"
                width={150}
                height={150}
                className="object-contain"
              />
              <div>
                <p className="text-lg text-gray-500 tracking-wider">
                  #2 Selling
                </p>
                <h2 className="text-2xl font-semibold">Vanilla Latte</h2>
              </div>
            </div>

            <p className="text-gray-600 text-sm mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              molestias odio doloribus at.
            </p>
            <div className="flex justify-between items-center mt-6">
              <p className="text-xl font-bold">$59.99</p>
              <Button className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg">
                ORDER NOW
              </Button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col text-start hover:shadow-xl hover:scale-105 cursor-pointer transition-all">
            <div className="flex items-center gap-4">
              <Image
                src="/coffee/cofee-mug.png"
                alt="Coffee Mug"
                width={150}
                height={150}
                className="object-contain"
              />
              <div>
                <p className="text-lg text-gray-500 tracking-wider">
                  #3 Selling
                </p>
                <h2 className="text-2xl font-semibold">Caramel Macchiato</h2>
              </div>
            </div>

            <p className="text-gray-600 text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              numquam fugiat quae tempore!
            </p>
            <div className="flex justify-between items-center mt-6">
              <p className="text-xl font-bold">$59.99</p>
              <Button className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg">
                ORDER NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingCoffee;

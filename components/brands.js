import React from "react";

const Brands = () => {
  return (
    <section className="relative w-full py-8 lg:py-16 bg-blue-guideline1 px-4">
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 lg:grid-cols-4 dark:text-gray-400">
          
          <a href="#" className="flex justify-center items-center">
            <img
              className="w-[70%] object-cover"
              alt=""
              src="/mask-group1@2x.png"
            />
          </a>
          
          <a href="#" className="flex justify-center items-center">
            <img
              className="w-[70%] object-cover"
              alt=""
              src="/mask-group1@2x.png"
            />
          </a>
          
          <a href="#" className="flex justify-center items-center">
            <img
              className="w-[70%] object-cover"
              alt=""
              src="/mask-group1@2x.png"
            />
          </a>
          
          <a href="#" className="flex justify-center items-center">
            <img
              className="w-[70%] object-cover"
              alt=""
              src="/mask-group1@2x.png"
            />
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Brands;

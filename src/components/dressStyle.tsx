import React from "react";
import Image from "next/image";

const DressStyle = () => {
  return (
    <main className="container mx-auto px-4 my-8">
  <div className="mt-8 mb-12">
    <h1 className="text-2xl font-black text-center text-gray-800">
      BROWSE BY DRESS STYLE
    </h1>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:px-20">
    <div className="transform transition duration-300 hover:scale-105 rounded-xl">
      <Image
        src="/pic11.png"
        alt="Dress style 1"
        width={400}
        height={300}
        className="h-[300px] w-full object-cover rounded-xl shadow-lg hover:shadow-xl"
      />
    </div>

    <div className="md:col-span-2 transform transition duration-300 hover:scale-105 rounded-xl">
      <Image
        src="/pic21.png"
        alt="Dress style 2" 
        width={800}
        height={300}
        className="h-[300px] w-full object-cover rounded-xl shadow-lg hover:shadow-xl"
      />
    </div>

    <div className="md:col-span-2 transform transition duration-300 hover:scale-105 rounded-xl">
      <Image
        src="/pic31.png"
        alt="Dress style 3"
        width={800}
        height={300}
        className="h-[300px] w-full object-cover rounded-xl shadow-lg hover:shadow-xl"
      />
    </div>

    <div className="transform transition duration-300 hover:scale-105 rounded-xl">
      <Image
        src="/pic41.png"
        alt="Dress style 4"
        width={400}
        height={300}
        className="h-[300px] w-full object-cover rounded-xl shadow-lg hover:shadow-xl"
      />
    </div>
  </div>

  <div className="my-3"></div>
</main>
  );
};

export default DressStyle;

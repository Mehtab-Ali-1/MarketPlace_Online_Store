// components/HappyCustomers.tsx
"use client";

import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


const testimonials = [
  {
    name: "John Doe",
    text: "This product is fantastic! It's made a huge difference for my business and helped me grow."
  },
  {
    name: "Jane Smith",
    text: "I'm so happy with the service. It's easy to use and has saved me so much time."
  },
  {
    name: "Michael Clark",
    text: "I highly recommend this! Great quality and fantastic customer service!"
  }
];

const StarRating = () => (
  <div className="flex mb-4">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className="w-6 h-6 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ name, text }: { name: string, text: string }) => (
  <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 min-w-[300px] mx-4">
    <StarRating />
    <div className="flex items-center justify-center gap-2 text-xl mb-3">
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <TiTick className="bg-green-600 text-white rounded-full" />
    </div>
    <p className="text-gray-600 text-center leading-relaxed">{text}</p>
  </div>
);

const HappyCustomers = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="md:text-4xl text-2xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <div className="flex items-center gap-4 md:text-3xl text-2xl lg:text-4xl text-gray-600">
            <div className="hover:text-gray-900 transition-colors">
              <IoIosArrowBack />
            </div>
            <div className="hover:text-gray-900 transition-colors">
              <IoIosArrowForward />
            </div>
          </div>
        </div>

        <ScrollArea className="w-full">
          <div className="flex p-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default HappyCustomers;
import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button"


const HeroSection = () => {
  return (
    <main className='bg-gray-100'>
        <div className='flex max-md:flex-col md:justify-around items-center lg:mx-24 lg:gap-10 '>
            <div className='flex flex-col justify-center md:justify-end items-center md:items-start md:w-[596px] space-y-4 pl-3'>
                <h1 className='text-4xl md:text-6xl font-extrabold max-md:text-center'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className='text-base text-slate-700 px-2'>Browzw through our deserve range of meticulously crafted garments. Design to bring to your individuality and cater to your sense of style.</p>
                <Button variant="outline" className='flex rounded-full bg-black text-white text-base py-6 px-12 font-normal'>Shop Now</Button>
            </div>
            <div>
                <Image className='w-96 h-auto' src="/heroPic.jpg" alt='BoyPicture' width={200} height={200}/>
            </div>
        </div>
        <div className='flex max-md:flex-col justify-center items-center bg-black text-white gap-5 text-2xl md:text-4xl md:gap-16 lg:gap-32 max-md:h-[146px] md:h-[122px] '>
                <ul className='flex max-md:justify-around justify-center items-center md:gap-16 lg:gap-32 gap-5'>
                    <li className='font-sans'>VERSACE</li>
                    <li className='font-extralight'>ZARA</li>
                    <li className='font-mono'>GUCCI</li>
                </ul>
                <ul className='flex max-md:justify-around items-center md:gap-16 lg:gap-32 gap-5'>
                    <li className='font-serif'>PRADA</li>
                    <li className='font-thin text-nowrap'>Calvin Klein</li>
                </ul>
        </div>
    </main>
  )
}

export default HeroSection;

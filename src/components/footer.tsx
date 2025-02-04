import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaRegNewspaper,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="md:flex justify-evenly items-center bg-black px-4 mx-4 rounded-xl py-6 space-y-7">
        <h1 className="md:text-4xl text-2xl font-black text-white max-md:text-center">
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </h1>
        <div className="space-y-3">
      /oaz.x    <div className="bg-white flex justify-center items-center gap-3 md:px-3 py-2 rounded-full">
            <MdOutlineMail className="text-black" />
            <input
              className="bg-white outline-none"
              type="text"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="flex justify-center items-center gap-3 bg-white px-3 py-2 rounded-full">
            <FaRegNewspaper className="text-black " />
            <input
              className="bg-white outline-none"
              type="text"
              placeholder="Subscribe to Newsletter"
            />
          </div>
        </div>
        </div>
        {/* _________________________________________________________ */}

        <div className="md:flex justify-evenly items-center bg-gray-300 md:mt-20 mt-10 px-4 py-12">
          <div className="space-y-7 flex flex-col justify-start items-start">
            <h1 className="text-3xl font-black text-black">SHOP.CO</h1>
            <p>
              We have clothes that suits your style and which you are <br />
              pround to wear. From women to men.
            </p>
            <ul className="flex justify-center items-center gap-5 text-black">
              <li className="p-2 bg-white text-black rounded-full">
                <Link href="/">
                  <FaTwitter />
                </Link>
              </li>
              <li className="p-2 bg-black text-white rounded-full">
                <Link href="/">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="p-2 bg-white text-black rounded-full">
                <Link href="/">
                  <FaInstagram />
                </Link>
              </li>
              <li className="p-2 bg-white text-black rounded-full">
                <Link href="/">
                  <IoLogoGithub />
                </Link>
              </li>
            </ul>
          </div>
          {/* __________________________________________________________ */}
          <div className="flex max-md:flex-col justify-center items-center md:gap-12 mx-auto ">
            <div className="flex justify-around items-center md:gap-12 max-md:gap-36 py-7">
              <div className="flex flex-col space-y-2">
              <h1 className="font-black pb-3">COMPANY</h1>
              <Link href="">About</Link>
              <Link href="">Features</Link>
              <Link href="">Works</Link>
              <Link href="">Career</Link>
              </div>
              <div className="flex flex-col space-y-2">
              <h1 className="font-black pb-3">HELP</h1>
              <Link href="">Customer Sup</Link>
              <Link href="">Delivery Detail</Link>
              <Link  href="">Terms Condition</Link>
              <Link href="">Privacy Policy</Link>
              </div>
            </div>
            <div className="flex justify-around items-center md:gap-12 max-md:gap-36 py-7">
              <div className="flex flex-col space-y-2">
              <h1 className="font-black pb-3">fAQ</h1>
              <Link href="">Account</Link>
              <Link  href="">Manage Deliveries</Link>
              <Link href="">Ordres</Link>
              <Link href="">Payments</Link>
              </div>
              <div className="flex flex-col space-y-2">
              <h1 className="font-black pb-3">RESOURCES</h1>
              <Link href="">Free Ebooks</Link>
              <Link href="">Development </Link>
              <Link href="">How Blog</Link>
              <Link href="">Tutorials</Link>
              </div>
            </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;

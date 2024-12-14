import React from "react";
import Marquee from "react-fast-marquee";
import { Button } from "flowbite-react";
import heroImg from "../assets/hero.jpeg";

import { FaLongArrowAltRight, FaShoppingBag } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
    </div>
  );
};

const Section1 = () => {
  return (
    <div className="flex">
      <div className="w-1/2 min-h-[80vh] flex justify-center flex-col px-20">
        <h4 className="text-2xl text-gray-500">Reuse your stuff ♻️</h4>
        <h1 className="font-dm-serif text-7xl text-gray-900">
          E-Commerce Store For Your College.
        </h1>
        <h1 className="font-dm-serif my-6 pl-5 border-l-gray-400 border-l-[3px] text-xl text-gray-600">
          Sell, Rent or Buy stuff from your Friends and Faculties in your own
          college campus!
        </h1>
        <div className="flex space-x-4">
          <Button>
            <span className="flex items-center">
              Get Started &nbsp;
              <FaLongArrowAltRight />
            </span>
          </Button>
          <Button>
            <span className="flex items-center">
              Check Out The Store &nbsp;
              <FaShoppingBag />
            </span>
          </Button>
        </div>
      </div>
      <div className="w-1/2 min-h-[80vh] flex items-center overflow-hidden">
        <img src={heroImg} className="rounded-lg aspect-auto" alt="" />
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="overflow-hidden">
      <h1 className="text-center font-noto-semi text-5xl text-gray-400">
        Our Partners
      </h1>
      <Marquee className="my-10">
        <img className="h-24 mx-7" src="./img1.jpg" alt="hospital 1" />
        <img className="h-24 mx-7" src="./img2.jpg" alt="hospital 2" />
        <img className="h-24 mx-7" src="./img3.jpg" alt="hospital 3" />
        <img className="h-24 mx-7" src="./img4.jpg" alt="hospital 4" />
        <img className="h-24 mx-7" src="./img5.jpg" alt="hospital 5" />
        <img className="h-24 mx-7" src="./img6.jpg" alt="hospital 6" />
        <img className="h-24 mx-7" src="./img7.jpg" alt="hospital 7" />
        <img className="h-24 mx-7" src="./img8.jpg" alt="hospital 8" />
        <img className="h-24 mx-7" src="./img9.jpg" alt="hospital 8" />
        <img className="h-24 mx-7" src="./img10.jpg" alt="hospital 8" />
        <img className="h-24 mx-7" src="./img11.jpg" alt="hospital 8" />
      </Marquee>
    </div>
  );
};

export default Home;

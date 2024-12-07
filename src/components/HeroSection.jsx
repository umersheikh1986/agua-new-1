import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroSlider from "./swiper/HeroSlider";
import CanvasScene from "./Animate";
import ThreeLensflare from "./Three";
import CoinAnimation from "./Animate";
import { EffectCube, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect,useRef } from "react";
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Choose the weights you need
  display: 'swap',
});

export const HeroSection = () => {
  
  const divleft = useRef(null);
useEffect(() => {
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slideInLeft");
      }
    });
  },
  {
    threshold: 0.1, 
  }
);

if (divleft.current) {
  observer.observe(divleft.current);
}

return () => {
  if (divleft.current) {
    observer.unobserve(divleft.current);
  }
};
}, []);


  const divright = useRef(null);
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideInRight");
        }
      });
    },
    {
      threshold: 0.1, 
    }
  );

  if (divright.current) {
    observer.observe(divright.current);
  }

  return () => {
    if (divright.current) {
      observer.unobserve(divright.current);
    }
  };
}, []);
  return (
    <>
<div className="flex flex-col max-w-full h-auto max-h-[800px] mb-40 sm:max-h-[1100px]">
  {/* <CanvasScene /> */}
  <div className="grid grid-cols-1 lg:grid-cols-2 flex-grow">
    <div ref={divleft} className="flex w-5/6 flex-col justify-center p-10 md:ml-20 rounded-lg  md:mt-10">
      <h2 className="text-xl sm:text-4xl text-white font-semibold mb-2 font-poppins">
      Empowering Decentralized Finance with the Stability of Precious
      </h2>
      <h2 className="text-xl sm:text-4xl text-white font-bold mb-2">
      </h2>
      <h2 className="text-lg sm:text-2xl font-semibold text-yellow-600 font-poppins">
        <span className="text-[#c9cbcc] font-semibold text-lg font-poppins sm:text-2xl ">Metals and</span> DAO for community.
      </h2>

      <p className="text-sm sm:text-md md:text-lg text-gray-200 leading-relaxed font-roboto">
      Welcome to AGUA – A New Era of Financial Security. A stablecoin fully backed by silver and gold, seamlessly integrating into the world of decentralized finance (DeFi).
      </p>

      <div className="mt-5 flex flex-wrap md:flex-nowrap gap-2 sm:gap-4">
  {/* <Link
    href={"/"}
    className="border-2 font-roboto px-6 sm:px-10 md:px-20 py-1 sm:py-4 bg-black text-white sm:font-semibold rounded-sm hover:bg-gray-800 cursor-pointer whitespace-nowrap"
  >
    Mint Now
 </Link> */}
  <Link
    href={"/"}
    className="border-2 border-white font-roboto bg-gradient-to-r from-[#353535] via-[#CBCDCF] via-30% to-[#6C6C6C] to-70% bg-blend-multiply px-6 sm:px-10 md:px-20 py-1 sm:py-4 text-black sm:font-semibold rounded-sm hover:bg-[#fad55a] cursor-pointer whitespace-nowrap"
  >
    Mint Now
  </Link>
  <Link
    href={"/"}
    className="border-2 border-white font-roboto bg-gradient-to-r from-[#353535] via-[#CBCDCF] via-30% to-[#6C6C6C] to-70% bg-blend-multiply px-6 sm:px-10 md:px-20 py-1 sm:py-4 text-black sm:font-semibold rounded-sm hover:bg-[#fad55a] cursor-pointer whitespace-nowrap"
  >
    Explore AGUA
  </Link>
</div>

    </div>

    {/* Second Grid Item */}
    <div ref={divright} className="relative flex justify-center items-center sm:mb-20 mb-20 md:mt-0">
      <div className="relative w-70 sm:w-150 h-[300px] md:h-full flex justify-center items-center">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          autoplay={{
            loop: true,
            delay: 3000,
          }}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="lg:h-[400px] sm:h-[300px] h-[250px] mt-8" src="/gold.png" alt="Gold" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="lg:h-[400px] sm:h-[300px] h-[250px] mt-8" src="/silver.png" alt="Silver" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>

 
</div>


    {/* <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[550px] max-h-[600px]">
 
  <div className="flex-1 md:ml-20 flex flex-col justify-center z-10 rounded-lg p-5 sm:p-10 mt-10 sm:mt-20 md:mt-40">
    <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold mb-2">
      A STABLE SILVER &
    </h2>
    <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold mb-2">
      GOLD THAT HELPS
    </h2>
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-yellow-600 my-4">
      <span className="text-[#c9cbcc] text-2xl sm:text-3xl md:text-5xl">YOU WIN</span> THE GAME
    </h2>

    <p className="text-sm sm:text-md md:text-lg text-gray-200 leading-relaxed">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </p>

    <div className="mt-5 flex flex-wrap md:flex-nowrap gap-2 sm:gap-4">
      <Link
        href={"/"}
        className="border-2 px-10 sm:px-16 md:px-20 py-3 sm:py-4 bg-black text-white font-semibold rounded-sm hover:bg-gray-800 cursor-pointer"
      >
        OUR OFFERS
      </Link>
      <Link
        href={"/"}
        className="border-2 border-white bg-gradient-to-r from-[#353535] via-[#CBCDCF] via-30% to-[#6C6C6C] to-70% bg-blend-multiply px-10 sm:px-16 md:px-20 py-3 sm:py-4 text-black font-semibold rounded-sm hover:bg-[#fad55a] cursor-pointer"
      >
        CREATE CARDS
      </Link>
    </div>
  </div>

  
  <div className="relative flex justify-center z-10 items-center mt-10 md:mt-0">
    <div className="relative w-full h-[300px] md:h-full flex justify-center items-center overflow-hidden">
   <HeroSlider />
  
    </div>
  </div>
</div>

<hr className="border-[#D2BA57] mt-10" /> */}



    {/* <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[550px]">
  <div className="flex-1 md:ml-20 flex flex-col justify-center z-10 rounded-lg p-5 sm:p-10 mt-10 sm:mt-20 md:mt-40">
    <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold mb-2">
      A STABLE SILVER &
    </h2>
    <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold mb-2">
      GOLD THAT HELPS
    </h2>
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-yellow-600 my-4">
      <span className="text-[#c9cbcc] text-2xl sm:text-3xl md:text-5xl">YOU WIN</span> THE GAME
    </h2>

    <p className="text-sm sm:text-md md:text-lg text-gray-200 leading-relaxed">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </p>

    <div className="mt-5 flex flex-wrap md:flex-nowrap gap-2 sm:gap-4">
      <Link
        href={"/"}
        className="border-2 px-10 sm:px-16 md:px-20 py-3 sm:py-4 bg-black text-white font-semibold rounded-sm hover:bg-gray-800 cursor-pointer"
      >
        OUR OFFERS
      </Link>
      <Link
        href={"/"}
        className="border-2 border-white bg-gradient-to-r from-[#353535] via-[#CBCDCF] via-30% to-[#6C6C6C] to-70% bg-blend-multiply px-10 sm:px-16 md:px-20 py-3 sm:py-4 text-black font-semibold rounded-sm hover:bg-[#fad55a] cursor-pointer"
      >
        CREATE CARDS
      </Link>
    </div>
  </div>

  <div className="relative flex justify-center z-10 items-center mt-10 md:mt-0">
    <div className="relative w-full h-[300px] md:h-full flex justify-center items-center">
      <HeroSlider />
    </div>
  </div>
</div>
<hr className="border-[#D2BA57] mt-10" /> */}
    {/* <div className="grid  grid-cols-1 md:grid-cols-2 h-[550px]">
      <div className="flex-1 ml-20 flex flex-col justify-center z-10 rounded-lg p-10 mt-40">
        <h2 className="text-6xl text-white font-bold mb-2">
          A STABLE SILVER &
        </h2>
        <h2 className="text-6xl text-white font-bold mb-2"> GOLD THAT HELPS</h2>
        <h2 className="text-5xl font-semibold text-yellow-600 my-4">
          <span className="text-[#c9cbcc] text-5xl "> YOU WIN</span> THE GAME
        </h2>

        <p className="text-lg text-gray-200 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>

        <div className="mt-5 flex flex-wrap md:flex-nowrap gap-4">
          <Link
            href={"/"}
            className="border-2 px-20 py-4 bg-black text-white font-semibold rounded-sm hover:bg-gray-800 cursor-pointer"
          >
            OUR OFFERS
          </Link>
          <Link
            href={"/"}
            className=" border-2 border-white bg-gradient-to-r from-[#353535]  via-[#CBCDCF] via-30% to-[#6C6C6C]
            to-70% bg-blend-multiply px-20 py-4 text-black font-semibold rounded-sm hover:bg-[#fad55a] cursor-pointer"
          >
            CREATE CARDS
          </Link>
        </div>
      </div>

      <div className="relative flex justify-center z-10 items-center">
        <div className="relative w-full h-full flex justify-center items-center">
          <HeroSlider />
        </div>
      </div>
    </div> */}
   {/* <div className="flex flex-col md:flex-row h-auto md:h-[550px]">
  <div className="flex-1 md:ml-20 flex flex-col justify-center z-10 rounded-lg p-5 sm:p-10 mt-10 sm:mt-20 md:mt-40">
    <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold mb-2">
      A STABLE SILVER &
    </h2>
    <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold mb-2">
      GOLD THAT HELPS
    </h2>
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-yellow-600 my-4">
      <span className="text-[#c9cbcc] text-2xl sm:text-3xl md:text-5xl">YOU WIN</span> THE GAME
    </h2>
    <p className="text-sm sm:text-md md:text-lg text-gray-200 leading-relaxed">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </p>

    <div className="mt-5 flex flex-wrap md:flex-nowrap gap-2 sm:gap-4">
      <Link
        href={"/"}
        className="border-2 px-10 sm:px-16 md:px-20 py-3 sm:py-4 bg-black text-white font-semibold rounded-sm hover:bg-gray-800 cursor-pointer"
      >
        OUR OFFERS
      </Link>
      <Link
        href={"/"}
        className="border-2 border-white bg-gradient-to-r from-[#353535] via-[#CBCDCF] via-30% to-[#6C6C6C] to-70% bg-blend-multiply px-10 sm:px-16 md:px-20 py-3 sm:py-4 text-black font-semibold rounded-sm hover:bg-[#fad55a] cursor-pointer"
      >
        CREATE CARDS
      </Link>
    </div>
  </div>

  <div className="relative flex justify-center z-10 items-center">
    <div className="relative w-full h- flex justify-center items-center">
      <HeroSlider />
    </div>
  </div>
</div> */}


    </>
  );
};

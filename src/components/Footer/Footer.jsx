import React from "react";
import CanvasScene from "../Animate";

 export default function Footer  () {
  return (
    <div className="w-full overflow-x-hidden pb-6 font-san">
      {/* <CanvasScene /> */}
      <footer className=" w-full text-white bg-gold-silver">
        {/* <hr className="" /> */}
        <div className="  max-w-full  p-12    bg-white bg-opacity-10 backdrop-blur-sm overflow-x-hidden  py-6 lg:py-16">
          <div className="md:flex md:justify-between">
            <div className="mb-6 gap-6 md:mb-0">
              <a href="/" className=" ">
                <img
                  src="/Agua-logo1.png"
                  className="h-28 w-32 lg:ml-10"
                  alt="FlowBite Logo"
                />
              </a>
              {/* <p className=" px-2 text-3xl font-semibold ">Agua</p> */}
              <p className="mt-2 font-roboto">
                {" "}
                Discover the power of our<br /> secure and
                rewarding<br /> Credit Cards
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-6 ">
              <div>
                <h2 className="mb-6 font-semibold font-merry  text-lg text-white ">
                  About us
                </h2>
                <ul className=" text-white font-roboto text-base font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Investors
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Book a demo
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Security
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6  font-semibold font-merry  text-lg ">Products</h2>
                <ul className=" font-medium font-roboto">
                  <li className="mb-4 ">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline   "
                    >
                      Credits Cards
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Gift Cards
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Saving Accounts
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      NFT
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6  font-semibold  font-merry text-lg ">
                  Usefull Links
                </h2>
                <ul className="font-roboto font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Free Rewards
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Documentation
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Affiliation Program
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6  font-semibold  text-lg  font-merry ">Social</h2>
                <ul className=" dark:text-white font-roboto font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Change Log
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      License
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Site Maps
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      News
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}
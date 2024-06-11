import React from "react";
// import { expectedPointData, pointsDetails } from "../Data";
import { expectedPointData, pointsDetails } from "./Data";
import Image from "next/image";
import hand from "../public/images/hand.png";
import cybersecurity from "../public/images/devhand.webp";

const HowTOEarn = () => {
  return (
    <div>
      {/* first section  */}
      <div className="lg:flex gap-10 text-base mt-36 px-4 md:px-16 ">
        <div className="flex-1">
          <div className="w-11/12 max-w-xl">
            <h1 className="text-2xl leading-6 lg:text-3xl lg:leading-10">
              We illuminate blockchain transactions
            </h1>
            <div className="text-[#C1CFDA] leading-7">
              <p className="mt-5 leading-10">
              This company provides advanced blockchain forensics for major cryptocurrencies, using on-chain and off-chain data with expert analysis.
              </p>
            </div>
          </div>
        </div>
        <div className="ma flex-1 lg:-ml-4 xl:ml-4 md:w-4/5 mx-auto lg:w-full mt-8 lg:mt-0 p-[1px]   rounded-lg">
          <div className="css-gradient rounded-lg  bg-[#0F1212]">
            <div className="sm:w-[600px] sm:h-[500px] w-full h-[350px]">
              <Image
                className="h-full w-full object-cover  animate-custom-bounce"
                src={hand}
                alt="social-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTOEarn;

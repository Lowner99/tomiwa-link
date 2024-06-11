import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/skalez_logo.png";
// import Calendar from "../Calendar/Calendar";
const WantToGetStarted = () => {
  return (
    <div className=" lg:block py-8 px-4 md:px-16">
      <div className="flex">
        <div className="flex-1 font-medium text-xl mt-4 leading-9 ">
          <h1 className="text-4xl leading-10">
            Want to get started? Here&rsquo;s how:
          </h1>
          <ol className="list-decimal pl-4">
            <li>Connect Account</li>
            <p className="font-normal text-base opacity-80">
              Link your Twitter account to set up your{" "}
              <span className="text-[#20A4F3]">$streal</span> account.
            </p>
            <li>Send a Join Message</li>
            <p className="font-normal text-base opacity-80">
              Share your join message to activate your account.
            </p>
            <li>Begin Earning Points</li>
            <p className="font-normal text-base opacity-80">
              Keep tweeting regularly to accumulate points with each wave.
            </p>
            <li>Claim Your Rewards</li>
            <p className="font-normal text-base opacity-80">
              Exchange your accumulated points for{" "}
              <span className="text-[#20A4F3]">$streal</span> tokens after each
              wave.
            </p>
          </ol>
          <div className="mt-4">
            <Link href="/">
              <button className="text-black bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8] py-3 px-3 font-semibold text-base rounded-md">
                Yes, I want to get started
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="min-w-[300px] w-10/12 mt-20 mx-auto p-[1px] bg-gradient-to-br from-[#59F8E8]  from-50% via-[#20A4F3] via-50% to-gray-200/10 to-60%  rounded-sm">
            <div className="relative bg-[#0F1212] text-white ">
              <span className="absolute w-20 rounded-full h-20 bg-blende  -top-8 -left-12 shadow-2xl shadow-[#59F8E8]"></span>
              <div className="absolute w-1/5 rounded-full h-1/5 bg-blende -top-8 -left-[58px]">
                <Image
                  className="w-full -mt-4 bg-transparent bg-[#59F8E8]"
                  src={logo}
                  alt="icon"
                  height={100}
                  width={100}
                />
              </div>
              {/* <Calendar /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WantToGetStarted;

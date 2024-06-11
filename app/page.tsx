import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import WantToGetStarted from "@/components/WantToGetStarted";
import HowTOEarn from "@/components/HowToEarn";
import Contact from "@/components/parts/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0F1212]">
          <Header />
      <div className="relative max-w-[1000px] m-0 p-0   mx-auto w-full text-white h-full bg-[#0F1212] ">
        <div className="">
          <Hero />
          <HowItWork />
          <HowTOEarn />
          {/* <WantToGetStarted /> */}
          <Contact />
          <div className="lg:relative m-auto h-full">
            {/* <Roadmap /> */}
            {/* <Presales /> */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

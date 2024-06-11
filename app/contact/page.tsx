import Image from "next/image";
import Header from "../../components/Header";
import HowTOEarn from "../../components/HowToEarn";
import Contact from "../../components/parts/Contact";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0F1212]">
      <div className="relative max-w-[1440px] m-0 p-0  lg: mx-auto w-full text-white h-full bg-[#0F1212] ">
        <div className="">
          <Header />
          <HowTOEarn />

          <Contact />
          <div className="lg:relative m-auto h-full">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

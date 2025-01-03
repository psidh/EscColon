import FourCard from "@/components/FourCard";
import Section2 from "@/components/section2/Section2";
import Section3 from "@/components/section3/section3";
import { GoArrowUpRight } from "react-icons/go";

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex mt-12 flex-col items-center justify-center relative mx-16">
        <img
          src="/Group 8.jpg"
          alt="Ring Image"
          className="w-[35%] object-cover top-0"
        />
        <div className="flex items-center justify-between w-full">
          <a
            href="/explore"
            className="flex items-center justify-between w-64 font-normal text-xl py-3 px-6 border border-green-500 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200"
          >
            Explore Now
            <GoArrowUpRight />
          </a>
          <h1 className="text-8xl w-full text-right  font-light">
            Join Us in <span className="italic">building</span> <br /> a clean
            Environment
          </h1>
        </div>
        <p className="w-full text-left mt-8 font-extralight italic text-3xl">
          &quot;We provide innovative solutions to reduce plastic waste and
          build a sustainable future. Our Mission is to improve the world with
          less plastic
        </p>
      </div>
      <Section2 />
      <FourCard />
      <Section3/>
    </div>
  );
}

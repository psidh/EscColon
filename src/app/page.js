import FourCard from "@/components/FourCard";
import Section2 from "@/components/section2/Section2";
import Section3 from "@/components/section3/section3";
import { GoArrowUpRight } from "react-icons/go";

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center relative mx-16 mt-12">
        <div className="absolute w-full left-0 top-24">
          <img src="/hero1.jpg" className="w-[250px] h-[200px] rounded-3xl" />
          <div className="absolute left-0 bottom-24 w-[250px] transform translate-y-full">
            <div className="rounded-3xl p-5 bg-[#cbfab4]">
              {" "}
              <p className="text-black font-semibold text-lg">
                Learn More About Reducing Plastic Waste
              </p>
              <p className="text-slate-700 font-light text-sm">
                Visit our blog...
              </p>
            </div>
            <div className="rounded-3xl p-5 bg-[#f3f3f3]">
              <p className="text-black font-semibold text-lg">
                Have Questions?
              </p>
              <p className="text-slate-700 font-light text-sm">
                Ask us anything...
              </p>
            </div>
          </div>
        </div>

        <img
          src="/Group 8.jpg"
          alt="Ring Image"
          className="w-[35%] object-cover top-0 "
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
      <Section3 />
    </div>
  );
}

import { GoArrowUpRight } from "react-icons/go";

export default function Page() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center relative mx-16">
      <img
        src="/ring.jpg"
        alt="Ring Image"
        className="w-[25%] object-cover top-0"
      />
      <div className="flex items-center justify-between w-full">
        <button className="flex items-center justify-between w-64 font-normal text-xl py-3 px-6 border border-green-500 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200">
          Explore Now 
          <GoArrowUpRight />
        </button>
        <h1 className="text-8xl w-full text-right  font-light">
          Join Us in <span className="italic">building</span> <br /> a clean
          Environment
        </h1>
      </div>
    </div>
  );
}

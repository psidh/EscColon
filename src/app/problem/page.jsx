import React from "react";

export default function Page() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <p className="mt-56 h-[80vh] text-neutral-700 italic text-3xl font-light">
        How many tons of plastic is thrown in ocean every year?
      </p>
      <div className="h-[80vh] flex flex-col items-center justify-center">
        <p className="text-8xl font-normal text-blue-600">8,000,000,000</p>
        <p className="text-xl font-extralight mt-8">21 million Kgs / day</p>
      </div>
      <div className="h-[80vh] flex flex-col items-center justify-center">
        <p className="text-6xl font-extralight">
          <span className="text-red-700 font-semibold">100,000</span> marine
          mammal die every year{" "}
        </p>
      </div>
      <div className="h-[80vh] flex flex-col items-center justify-center text-center mx-16">
        <p className="text-3xl font-extralight">
          By
          <span className="font-semibold"> 2050 </span>, if current trends
          continue, <br /> there could be more{" "}
          <span className="underline underline-offset-4">plastic</span> in the
          ocean by <span className="font-bold">weight</span> than {" "}
          <span className="underline underline-offset-4">fish !!</span>
        </p>
      </div>
    </div>
  );
}

export default function Section3() {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4 mt-16">
      <div className="w-full px-10 flex justify-between items-center text-black">
        <p className="text-2xl font-semibold w-fit">
          Rethink Plastic, <br />
          Reimagine Our World
        </p>
        <p className="uppercase font-light text-sm text-end text-wrap w-1/2">
          Reducing plastic waste protects ecosystems, conserves resources, and
          minimizes pollution.
        </p>
      </div>
      <div className="w-full min-h-[600px] bg-[url(/ocean2.jpg)] bg-no-repeat bg-center bg-cover flex justify-center items-center">
        <div className="h-[70%] w-[30%] bg-white rounded-xl flex flex-col justify-center p-6 space-y-5 relative">
          <div
            className="absolute inset-0 bg-white bg-clip-padding w-full h-[200px] rounded-xl"
            // style={{
            //   clipPath: "inset(0 0 50% 0)",
            //   background: "inherit",
            //   mixBlendMode: "normal",
            // }}
          ></div>
          <p className="font-bold text-2xl text-black z-10">
            Take Action Today
          </p>
          <p className="font-light text-sm text-slate-600 z-10">
            Track your plastic consumption, discover personalized reduction
            tips, and join a community working towards a plastic-free future.
            Start making a difference today!
          </p>
        </div>
      </div>
    </div>
  );
}

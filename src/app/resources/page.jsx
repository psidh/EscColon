import { GoArrowUpRight } from "react-icons/go";
import { ImLeaf } from "react-icons/im";
import { CgArrowTopRight } from "react-icons/cg";
import { Button } from "@/components/ui/button";

export default function ExplorePage() {
  return (
    <div className="w-full min-h-screen relative py-20 text-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9jZWFuJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww')`,
        }}
      >
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex p-16 flex-col items-center justify-between text-center px-4">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-light mb-8">
          Together, Let&apos;s <span className="italic">Reduce</span> Plastic
          Waste
        </h1>

        {/* Description */}
        <p className="text-md md:text-xl max-w-4xl mb-12 font-light">
          Join us to access resources, tips, and innovative solutions that pave
          the way for a sustainable, plastic-free future.
        </p>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-3 gap-4 mb-16 font-medium">
        {/*  */}
        <div className="bg-white/15 backdrop-blur-xl rounded-2xl text-center p-5 flex flex-col justify-between items-center relative">
          <h2 className="text-2xl text-white antialiased flex justify-center items-center">
            How to reduce plastic waste ?
          </h2>
          <p className=" text-white text-sm text-wrap text-center">
            Discover practical tips and strategies to minimize plastic usage in
            your daily life and protect our planet.
          </p>
          <ImLeaf className="text-green-600 mr-2 absolute top-3 right-3" />

          <div className="flex justify-between w-full space-x-4">
            <Button className="w-full">
              <a href="/resources/plastics">Read More</a>
              <CgArrowTopRight className="text-white" />
            </Button>
          </div>
        </div>
        {/*  */}
        <div className="bg-white/15 backdrop-blur-xl rounded-2xl text-center p-5 flex flex-col justify-between items-center relative gap-6">
          <h2 className="text-2xl text-white antialiased flex justify-center items-center">
            Conserving wildlife and marine life
          </h2>
          <p className=" text-white text-sm font-medium text-wrap text-center">
            {" "}
            Explore our comprehensive guide on preserving wildlife and marine
            life, and learn how you can make a difference today.
          </p>
          <ImLeaf className="text-green-600 mr-2 absolute top-3 right-3" />

          <div className="flex justify-between w-full space-x-4">
            <Button className="w-full">
              <a href="/resources/wildlife">Read More</a>
              <CgArrowTopRight className="text-white" />
            </Button>
          </div>
        </div>
        <div className="bg-white/15 backdrop-blur-xl rounded-2xl text-center p-5 flex flex-col justify-between items-center relative">
          <h2 className="text-2xl text-white antialiased flex justify-center items-center">
            Protecting the Ecosystem
          </h2>
          <p className=" text-white text-sm text-wrap text-center">
            Discover practical tips and strategies to minimize plastic usage in
            your daily life and protect our planet.
          </p>
          <ImLeaf className="text-green-600 mr-2 absolute top-3 right-3" />

          <div className="flex justify-between w-full space-x-4">
            <Button className="w-full">
              <a href="/resources/ecosystem">Read More</a>
              <CgArrowTopRight className="text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-6 bg-black bg-opacity-75 text-white">
        <p className="text-sm md:text-lg font-light italic text-center">
          &quot;We provide innovative solutions to monitor and reduce plastic
          waste, working hand-in-hand with governments and communities to create
          a sustainable, cleaner future.&quot;
        </p>
      </div>
    </div>
  );
}

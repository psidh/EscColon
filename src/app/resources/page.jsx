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
        <p className="text-md md:text-xl max-w-4xl mb-12">
          We specialize in monitoring and reducing plastic waste through
          collaboration with governments and individuals. Join us to access
          resources, tips, and innovative solutions that pave the way for a
          sustainable, plastic-free future.
        </p>

        {/* Secondary Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-base font-light">
          <a
            href="/resources"
            className="flex items-center justify-center w-48 py-3 px-8  rounded-full bg-black text-white transition-all duration-200"
          >
            Get Resources
          </a>
          <a
            href="/collaborate"
            className="flex items-center justify-center  py-3 px-8 border rounded-full border-neutral-300 bg-white transition-all duration-200"
          >
            Collaborate with Us
          </a>
        </div>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-3 gap-4 mb-16">
        {/*  */}
        <div className="bg-white/15 backdrop-blur-md rounded-2xl  p-5 flex flex-col justify-center items-center space-y-4 relative">
          <h2 className="text-2xl  font-light text-white antialiased flex justify-center items-center">
            Protect Ecosystems
          </h2>
          <p className="text-neutral-900 text-sm text-wrap text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            sint, mollitia consequuntur minima ea quo culpa inventore similique
            earum perferendis dolore nulla molestiae fugiat porro magnam
            reprehenderit nisi dicta officiis.
          </p>

          <ImLeaf className="text-green-600 mr-2 absolute top-3 right-3" /> 

          <div className="flex justify-start items-start space-x-4">
            <Button className="w-fit" >
              <span>Learn More</span> 
              <CgArrowTopRight className="text-white" />
            </Button>
          </div>
        </div>
        {/*  */}
        <div className="bg-white/15 backdrop-blur-md rounded-2xl  p-5 flex flex-col justify-center items-center space-y-4 relative">
          <h2 className="text-2xl  font-light text-white antialiased flex justify-center items-center">
            Protect Ecosystems
          </h2>
          <p className="text-neutral-900 text-sm text-wrap text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            sint, mollitia consequuntur minima ea quo culpa inventore similique
            earum perferendis dolore nulla molestiae fugiat porro magnam
            reprehenderit nisi dicta officiis.
          </p>

          <ImLeaf className="text-green-600 mr-2 absolute top-3 right-3" /> 

          <div className="flex justify-start items-start space-x-4">
            <Button className="w-fit" >
              <span>Learn More</span> 
              <CgArrowTopRight className="text-white" />
            </Button>
          </div>
        </div>
        {/*  */}
        <div className="bg-white/15 backdrop-blur-md rounded-2xl  p-5 flex flex-col justify-center items-center space-y-4 relative">
          <h2 className="text-2xl  font-light text-white antialiased flex justify-center items-center">
            Protect Ecosystems
          </h2>
          <p className="text-neutral-900 text-sm text-wrap text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            sint, mollitia consequuntur minima ea quo culpa inventore similique
            earum perferendis dolore nulla molestiae fugiat porro magnam
            reprehenderit nisi dicta officiis.
          </p>

          <ImLeaf className="text-green-600 mr-2 absolute top-3 right-3" /> 

          <div className="flex justify-start items-start space-x-4">
            <Button className="w-fit" >
              <span>Learn More</span> 
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

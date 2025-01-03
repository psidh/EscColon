import { GoArrowUpRight } from "react-icons/go";

export default function ExplorePage() {
  return (
    <div className="w-full h-screen relative py-20 text-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/explore.jpg')`,
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
            className="flex items-center justify-center w-48 py-3 px-8 border-2 rounded-full border-white font-light hover:bg-white text-black transition-all duration-200"
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

import { GoArrowUpRight } from "react-icons/go";

export default function ResourcesPage() {
  return (
    <div className="w-full h-screen relative pt-20">
      {/* Content */}
      <div className="relative z-10 px-8 py-12">
        <h1 className="text-6xl font-light text-center mb-12">
          Resources & <span className="italic">Insights</span>
        </h1>

        <div className="grid grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border border-neutral-200 rounded-3xl p-6 shadow-md shadow-green-500 transition-shadow duration-200">
            <h2 className="text-2xl font-semibold mb-4">
              Tips to Reduce Plastic Waste
            </h2>
            <p className="text-base font-light mb-6">
              Learn actionable steps to cut down on single-use plastics in your
              daily life.
            </p>
            <a
              href="/tips"
              className="flex items-center text-green-500 hover:text-green-400 transition-colors duration-200"
            >
              Read More
              <GoArrowUpRight className="ml-2" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="border border-neutral-200 rounded-3xl p-6 shadow-md shadow-green-500 transition-shadow duration-200">
            <h2 className="text-2xl font-semibold mb-4">
              Collaborative Projects
            </h2>
            <p className="text-base font-light mb-6">
              Explore how we work with governments and communities to tackle
              plastic waste.
            </p>
            <a
              href="/projects"
              className="flex items-center text-green-500 hover:text-green-400 transition-colors duration-200"
            >
              Learn More
              <GoArrowUpRight className="ml-2" />
            </a>
          </div>

          {/* Card 3 */}
          <div className="border border-neutral-200 rounded-3xl p-6 shadow-md shadow-green-500 transition-shadow duration-200">
            <h2 className="text-2xl font-semibold mb-4">Our Blog</h2>
            <p className="text-base font-light mb-6">
              Stay updated with the latest insights and stories from our
              journey.
            </p>
            <a
              href="/blog"
              className="flex items-center text-green-500 hover:text-green-400 transition-colors duration-200"
            >
              View Blog
              <GoArrowUpRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Glow */}
      <div className="absolute bottom-0 left-0 w-full py-6 border border-neutral-200 bg-opacity-90">
        <p className="text-center text-sm italic font-light text-neutral ">
          &quot;Empowering communities and governments to reduce plastic waste
          through knowledge and collaboration.&quot;
        </p>
      </div>
    </div>
  );
}

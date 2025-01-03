import { GoArrowUpRight } from "react-icons/go";

export default function FourCard() {
  return (
    <div className="grid grid-cols-4 gap-6 mx-16">
      <div className="flex flex-col items-start justify-between border border-neutral-400 rounded-2xl p-8">
        <h1 className="text-3xl mb-4 font-medium">Innovation</h1>
        <img
          src="/circle1.jpg"
          alt="Circle1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-between border border-neutral-400 rounded-2xl">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/050/436/766/small_2x/develop-collection-of-illustrations-inspired-by-nature-showcasing-serene-landscapes-exotic-wildlife-and-lush-vegetation-photo.jpg"
          alt="Circle1"
          className="w-full h-3/4 object-cover rounded-t-2xl"
        />
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl mb-4 font-medium">Environmental Impact</h1>
          <a
            href="/collaboration"
            className="hover:text-green-500 hover:underline underline-offset-2 flex items-center justify-between  p-2"
          >
            Link
            <GoArrowUpRight className="text-lg" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between border border-neutral-400 rounded-2xl p-8">
        <h1 className="text-3xl mb-4 font-medium">Partnership</h1>
        <img
          src="/circle2.jpg"
          alt="Circle1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-between border border-neutral-400 rounded-2xl">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/050/436/766/small_2x/develop-collection-of-illustrations-inspired-by-nature-showcasing-serene-landscapes-exotic-wildlife-and-lush-vegetation-photo.jpg"
          alt="Circle1"
          className="w-full h-3/4 object-cover rounded-t-2xl"
        />
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl mb-4 font-medium">Environmental Impact</h1>
          <a
            href="/collaboration"
            className="hover:text-green-500 hover:underline underline-offset-2 flex items-center justify-between  p-2"
          >
            Link
            <GoArrowUpRight className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

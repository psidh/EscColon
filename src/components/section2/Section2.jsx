import { MdAddCircleOutline } from "react-icons/md";
import { RiRecycleFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { TbBulbFilled } from "react-icons/tb";

export default function Section2() {
  return (
    <div className="w-full h-fit flex justify-between items-center">
      <div className="flex flex-col space-y-4 justify-start">
        <p className="text-black font-mono text-3xl antialiased tracking-wide mb-5">
          Track, Reduce, and <br /> Reimagine Your Plastic Use
        </p>
        <img
          src="/section2-image.jpg"
          alt="family cleaing as per 4 buckets"
          className="w-40% rounded-2xl"
        />
      </div>

      <div className="grid grid-cols-2">
        {boxes.map((item, index) => {
          <div className="flex justify-start space-y-2 border border-t-2 border-black">
            <p className="text-black font-medium">{item.title}</p>
            {item.iconName}

            <p className="text-sm font-thin">{item.txt}</p>
          </div>;
        })}
      </div>
    </div>
  );
}

const boxes = [
  {
    title: "Get Started Today",
    iconName: <MdAddCircleOutline />, // Example using Material UI Icon
    txt: "Create your free account and begin tracking your plastic usage. Join our community and make a difference!",
  },
  {
    title: "Log Your Plastics",
    iconName: <RiRecycleFill />, // Example, replace with your icon component
    txt: "[VIEW DETAILS]", // This could be a Link component in React
  },
  {
    title: "Waste Analysis",
    iconName: <IoSearch />, // Example
    txt: "[VIEW DETAILS]", //  Link component
  },
  {
    title: "Reduction Tips",
    iconName: <TbBulbFilled />, // Example
    txt: "[VIEW DETAILS]", // Link component
  },
];

import { MdAddCircleOutline } from "react-icons/md";
import { RiRecycleFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { TbBulbFilled } from "react-icons/tb";

export default function Section2() {
  const boxes = [
    {
      title: "Get Started Today",
      iconName: <MdAddCircleOutline size={30} />, // Example using Material UI Icon
      txt: "Create your free account and begin tracking your plastic usage. Join our community and make a difference!",
      dark: false,
    },
    {
      title: "Log Your Plastics",
      iconName: <RiRecycleFill size={30} />, // Example, replace with your icon component
      txt: "[VIEW DETAILS]", // This could be a Link component in React
      dark: false,
    },
    {
      title: "Waste Analysis",
      iconName: <IoSearch size={30} />, // Example
      txt: "[VIEW DETAILS]", //  Link component
      dark: false,
    },
    {
      title: "Reduction Tips",
      iconName: <TbBulbFilled size={30} />, // Example
      txt: "[VIEW DETAILS]", // Link component
      dark: true,
    },
  ];

  return (
    <div className="w-full h-fit p-16 flex flex-col justify-start items-start space-x-5">
      <p className="text-black text-3xl antialiased tracking-wide mb-5 ml-4">
        Track, Reduce, and <br /> Reimagine Your Plastic Use
      </p>

      <div className="w-full flex justify-between items-center h-max space-x-5">
        <img
          src="/section2-image.jpg"
          alt="family cleaing as per 4 buckets"
          className="w-[50%] h-[400px] rounded-2xl object-cover"
        />

        <div className=" h-full grid grid-cols-2 grid-rows-2 gap-10">
          {boxes.map((item, index) => (
            <div
              key={index}
              className={`w-[300px] flex flex-col justify-between space-y-4 p-4 ${item.dark ? 'bg-[#2a2a2a] text-white rounded-lg' : "border-t-2 border-black text-black"}  `}
            >
              <div className="space-y-4">
                <p className="font-normal">{item.title}</p>
                {item.iconName}
              </div>
              <p className="text-sm font-light text-wrap text-start ">
                {item.txt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { IoArrowUpCircle, IoArrowDownCircle } from "react-icons/io5";
import { MdLocationCity, MdOutlineStar, MdMap, MdPublic } from "react-icons/md";

export default function Comparisons() {
  return (
    <div className="grid grid-cols-4 gap-6 mb-12">
      {/* Municipal Average */}
      <div className="flex flex-col space-y-6 items-start justify-between p-4 border border-neutral-300 rounded-2xl bg-blue-50">
        <div className="flex items-center space-x-2">
          <MdLocationCity className="text-blue-600 text-2xl" />
          <h2 className="text-lg font-semibold">Municipal Average</h2>
        </div>
        <p className="text-6xl font-medium">12</p>
        <div className="flex items-center space-x-2">
          <IoArrowUpCircle className="text-red-500 text-xl" />
          <span className="text-red-500 font-medium">+5%</span>
          <span className="text-sm text-neutral-500">
            (compared to last week)
          </span>
        </div>
      </div>

      {/* State Average */}
      <div className="flex flex-col space-y-6 items-start justify-between p-4 border border-neutral-300 rounded-2xl bg-green-50">
        <div className="flex items-center space-x-2">
          <MdMap className="text-green-600 text-2xl" />
          <h2 className="text-lg font-semibold">State Average</h2>
        </div>
        <p className="text-6xl font-medium">14</p>
        <div className="flex items-center space-x-2">
          <IoArrowDownCircle className="text-green-500 text-xl" />
          <span className="text-green-500 font-medium">-3%</span>
          <span className="text-sm text-neutral-500">
            (compared to last week)
          </span>
        </div>
      </div>

      {/* National Average */}
      <div className="flex flex-col space-y-6 items-start justify-between p-4 border border-neutral-300 rounded-2xl bg-yellow-50">
        <div className="flex items-center space-x-2">
          <MdPublic className="text-yellow-600 text-2xl" />
          <h2 className="text-lg font-semibold">National Average</h2>
        </div>
        <p className="text-6xl font-medium">16</p>
        <div className="flex items-center space-x-2">
          <IoArrowUpCircle className="text-red-500 text-xl" />
          <span className="text-red-500 font-medium">+2%</span>
          <span className="text-sm text-neutral-500">
            (compared to last week)
          </span>
        </div>
      </div>

      {/* National Average */}
      <div className="flex flex-col space-y-6 items-start justify-between p-4 border border-neutral-300 rounded-2xl bg-gray-50">
        <div className="flex items-center space-x-2">
          <MdOutlineStar className="text-gray-600 text-2xl" />
          <h2 className="text-lg font-semibold">Ideal Value</h2>
        </div>
        <p className="text-6xl font-medium">15</p>
        <div className="flex flex-col space-y-2 text-sm text-neutral-500">
          <p>Compare to:</p>
          <p>
            Municipal: <span className="text-red-500">-3</span>
          </p>
          <p>
            State: <span className="text-green-500">+1</span>
          </p>
          <p>
            National: <span className="text-green-500">-1</span>
          </p>
        </div>
      </div>
      <p className="text-neutral-400 my-4 italic font-extralight">All values are measured in Lbs*</p>
    </div>
  );
}

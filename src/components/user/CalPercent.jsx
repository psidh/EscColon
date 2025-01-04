import { ImLeaf } from "react-icons/im";
export default function CalPercent() {
  return (
    <div className="border border-neutral-300 rounded-2xl p-4 flex flex-col items-center justify-between dark:bg-black bg-white w-full h-full space-y-4">
      <h2 className="text-2xl font-bold text-black dark:text-white flex justify-center items-center">
        <ImLeaf className="text-green-500 mr-2" /> 
        Your contribution to Environment Impact
      </h2>

      <p className="text-9xl font-bold text-red-500">31%</p>
      <div className="flex flex-row justify-between w-full px-4">
        <div className="space-x-2 flex items-center">
          <span className="h-4 w-4 rounded-full bg-green-500" />
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            Minimum usage
          </span>
        </div>
        <div className="space-x-2 flex items-center">
          <span className="h-4 w-4 rounded-full bg-yellow-500" />
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            Medium usage
          </span>
        </div>
        <div className="space-x-2 flex items-center">
          <span className="h-4 w-4 rounded-full bg-red-500" />
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            Maximum usage
          </span>
        </div>
      </div>
    </div>
  );
}

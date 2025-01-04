"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CiWarning } from "react-icons/ci";
import Globe from "@/components/user/Globe";
import Comparisons from "../municipal/Comparison";

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState(110);
  const [isEditing, setIsEditing] = useState(false);
  const [threshold, setThreshold] = useState(100);

  const handleSave = () => {
    setThreshold(threshold);
    setIsEditing(false);
  };

  return (
    <div className="mt-32 px-20">
      <h1 className="text-2xl font-light">
        Welcome Back{" "}
        <span className="text-4xl font-medium ml-4">Sidharth!</span>
      </h1>

      <div className="grid grid-cols-4 gap-6 my-12">
        <div className="p-4 flex flex-col items-start justify-between border border-neutral-300 rounded-2xl">
          <h2 className="text-xl font-semibold">Weekly Plastic Waste</h2>

          {isEditing ? (
            <div className="w-full">
              <input
                type="number"
                value={threshold}
                onChange={(e) => setThreshold(Number(e.target.value))}
                className="border border-neutral-400 rounded-lg w-full p-2 mb-2"
              />
              <div className="flex space-x-2">
                <Button className="w-full" onClick={handleSave}>
                  Save
                </Button>
                <Button
                  className="bg-neutral-200 text-black hover:bg-neutral-300 w-full"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-between w-full">
              <h3
                className={`text-8xl mb-24 font-medium ${
                  data >= threshold ? `text-red-500` : `text-green-500`
                }`}
              >
                {data} <span className="text-3xl">lbs</span>
              </h3>
              <Button
                className={`w-full ${data >= threshold ? `bg-red-500` : `bg-green-500`} `}
                onClick={() => router.push("/user/track")}
              >
                Track Now
                {data >= threshold && <CiWarning className="ml-2" />}
              </Button>
              <Button
                className="w-full mt-2"
                onClick={() => setIsEditing(true)}
              >
                Edit Threshold
              </Button>
            </div>
          )}
        </div>

        <div className="p-4 flex flex-col items-start justify-between border border-neutral-300 rounded-2xl">
          <h2 className="text-3xl font-semibold">Trends</h2>
          <img src="/user/trends.svg" alt="Trends" />
          <Button
            className="w-full"
            onClick={() => router.push("/user/report")}
          >
            See Report
          </Button>
        </div>

        <div className="p-4 flex flex-col items-start justify-between border border-neutral-300 rounded-2xl space-y-4">
          <h2 className="text-3xl font-semibold">Eco-AI Assistant</h2>
          <img src="/user/suggestion.jpg" alt="Suggestions" className="rounded-2xl" />
          <Button
            className="w-full "
            onClick={() => router.push("/user/suggestion")}
          >
            Let's GO
          </Button>
          </div>
        <div className="col-span-2">
          <Globe />
        </div>
      </div>
      <Comparisons />
    </div>
  ); 
}

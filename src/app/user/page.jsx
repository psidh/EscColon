"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CiWarning } from "react-icons/ci";
import Globe from "@/components/user/Globe";

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState(120);
  const [isEditing, setIsEditing] = useState(false);
  const [newThreshold, setNewThreshold] = useState(data);

  const handleSave = () => {
    setData(newThreshold);
    setIsEditing(false);
  };

  return (
    <div className="mt-32 px-20">
      <h1 className="text-2xl font-light">
        Welcome Back{" "}
        <span className="text-4xl font-medium ml-4">Sidharth!</span>
      </h1>

      <div className="grid grid-cols-3 gap-8 my-12 w-3/4">
        <div className="p-4 flex flex-col items-start justify-between border border-neutral-300 rounded-2xl">
          <h2 className="text-3xl font-semibold">Weekly Threshold</h2>

          {isEditing ? (
            <div className="w-full">
              <input
                type="number"
                value={newThreshold}
                onChange={(e) => setNewThreshold(Number(e.target.value))}
                className="border border-neutral-400 rounded-lg w-full p-2 mb-2"
              />
              <div className="flex space-x-2">
                <Button className="w-full" onClick={handleSave}>
                  Save
                </Button>
                <Button
                  className="bg-neutral-200 text-black w-full"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-between w-full">
              <h3
                className={`text-8xl mb-12 font-medium ${
                  data >= 100 ? `text-red-500` : `text-green-500`
                }`}
              >
                {data} <span className="text-3xl">lbs</span>
              </h3>
              <Button
                className={`w-full ${data >= 100 ? `bg-red-500` : `bg-black`} `}
                onClick={() => router.push("/user/track")}
              >
                Track Now
                {data >= 100 && <CiWarning className="ml-2" />}
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

        <div className="p-4 flex flex-col items-start justify-center border border-neutral-300 rounded-2xl">
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
      </div>
      <Globe/>
    </div>
  ); 
}

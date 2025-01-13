"use client";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import { useRef, useState, useCallback } from "react";
import Loading from "@/components/Loading";

const videoConstraints = {
  width: 350,
  facingMode: "environment",
};
export default function page() {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestionsResponse, setSuggestionsResponse] = useState(null);
  const capture = useCallback(async () => {
    setIsLoading(true);
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);

    try {
      const response = await fetch("https://esc-colon-server.vercel.app/analyzeImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageData: imageSrc }), // Send image data
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();
      const cleanedData = data.suggestions.replace(/```json\n|```/g, "");
      const parsedData = JSON.parse(cleanedData);
      console.log("data recevied = ", parsedData);
      setSuggestionsResponse(parsedData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error analyzing image:", error);
    }
  }, [webcamRef]);

  return (
    <div className="w-full min-h-screen flex justify-around items-center space-x-5 pt-28 px-6">
      <div className="space-y-4">
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="border-4 border-dashed "
        />
        <div className="flex space-x-4">
          <Button className="w-fit" onClick={capture}>
            Capture Wastage
          </Button>
          <Button
            className="w-fit"
            variant="secondary"
            onClick={() => setUrl(null)}
          >
            Refresh
          </Button>
        </div>
      </div>

      {!isLoading && (
        <div className="w-fit h-[300px] bg-yellow-300/15 rounded-xl border-2 border-yellow-400 flex justify-center items-center p-6">
          {url === null && (
            <p className="text-yellow-700 font-semibold text-xl text-center">
              First capture wastage to see suggestion !!
            </p>
          )}
          {url !== null && (
            <div className="w-[250px] h-[250px]">
              <p className="text-slate-500 font-medium mb-4">Captured Image</p>
              <img
                src={url}
                alt="Screenshot"
                className="object-contain rounded-xl"
              />
            </div>
          )}
        </div>
      )}

      {suggestionsResponse !== null  && !isLoading && (
        <div className="grid grid-cols-2 gap-5 rounded-xl  p-6">
          {suggestionsResponse?.suggestions?.map((sug, index) => (
            <div
              key={index}
              className="grid-cols-2 gap-4 p-4 rounded-2xl border border-neutral-200 shadow-md flex flex-col justify-start items-center space-y-4"
            >
              <p className="text-lg font-bold text-black">{sug?.item}</p>
              <ul>
                {sug.actions.map((act, index) => (
                  <li
                    key={index}
                    className="text-sm font-normal list-disc"
                  >
                    {act}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {isLoading && <Loading />}
    </div>
  );
}

import React from "react";

function Display({ flag }) {
  return (
    <div className="flex justify-center mt-4">
      <div
        className={`flex justify-center items-center text-xl h-96 w-96 mt-10 rounded-lg border-4 ${
          flag
            ? "bg-black text-white border-gray-800"
            : "bg-blue-600 text-white border-blue-300"
        }`}
      >
        <h1 className="font-semibold">{flag ? "Night Mode" : "Day Mode"}</h1>
      </div>
    </div>
  );
}

export default Display;

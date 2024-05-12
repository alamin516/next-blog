import React from "react";

const EmptyData = () => {
  return (
    <div className="rounded-md p-6 min-h-72 flex flex-col items-center justify-center">
      <img className="w-32" src="/download.svg" alt="Download Icon" />
      <p className="text-gray-600 mt-10">No posts found.</p>
    </div>
  );
};

export default EmptyData;

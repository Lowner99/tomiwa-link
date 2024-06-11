import React from "react";

const Loading = () => {
  return <div className="w-auto justify-center items-center h-full"> <p
  className="bg-red-100 border border-blue-400 text-blue-900 px-4 py-3 rounded relative animate-pulse  "
  role="alert"
>
  Connecting...
</p></div>;
};

export default Loading;

import React from "react";

function Background() {
  return (
    <>
      <div className="fixed z-[1] w-full h-screen">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[11vw] leading-none tracking-tight font-semibold text-zinc-900">
          Docs.
        </h1>
        <p className="absolute top-[5%] w-full text-xl font-bold flex items-center justify-center py-8 text-zinc-600">
          Documents
        </p>
      </div>
    </>
  );
}

export default Background;

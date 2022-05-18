import React from "react";

function Brand() {
  return (
    <>
      <div className="px-10 bg-white">
        <h2 className="pt-10 pb-2 font-bold text-black md:text-2xl ">
          <span className="underline decoration-red-500 underline-offset-8">Brands</span> with us
        </h2>
        <div className="grid w-full grid-cols-1 p-10 sm:gap-4 h-30 md:grid-cols-5 sm:grid-cols-2 ">
          <div className="flex items-center justify-center py-2 bg-white w-28 hover:rounded-lg hover:scale-110">
            <img src="pepsico.png" alt=""  />
          </div>
          <div className="flex items-center justify-center py-2 bg-white rounded-lg w-28 hover:scale-110">
            <img src="dunkin.png" alt="" />
          </div>
          <div className="flex items-center justify-center py-2 bg-white rounded-lg w-28 hover:scale-110">
            <img src="Zapier.png" alt="" />
          </div>
          <div className="flex items-center justify-center py-2 bg-white rounded-lg w-28 hover:scale-110">
            <img src="airtable.png" alt="" />
          </div>
          <div className="flex items-center justify-center py-2 bg-white rounded-lg w-28 hover:scale-110">
            <img src="pepsico.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;

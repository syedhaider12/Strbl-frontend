import React from "react";

function Categories() {
  return (
    <>
      <div className="p-10">
        <h1 className="pt-10 pb-2 font-bold text-black md:text-2xl ">
          <span className="underline decoration-red-500 underline-offset-8">Catego</span>ries
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className=" max-w-xs bg-white border border-gray-200 rounded-lg shadow-md  md:w-[250px] dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg " src="Fashions.jpg" alt="" />

          <div class="p-5">
            <h1 className="font-bold text-center"> Fashion</h1>
          </div>
        </div>
        <div className="max-w-xs my-5 bg-white border border-gray-200 rounded-lg md:w-[250px] shadow-md md:mx-5 dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg " src="electronic.jpeg" alt="" />

          <div class="p-5">
            <h1 className="font-bold text-center">Electronic</h1>
          </div>
        </div>
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md md:w-[250px] dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-lg " src="scoty.jpg" alt="" />

              <div class="p-5">
                <h1 className="font-bold text-center">Recreational</h1>
              </div>
            </div>
      </div>
    </>
  );
}

export default Categories;

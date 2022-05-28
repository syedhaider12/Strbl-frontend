import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
function Seller() {
  return (
    <div className="h-auto m-10 ">
      <h2 className="pt-10 pb-2 font-bold text-black md:text-2xl ">
        <span className="underline decoration-red-500 underline-offset-8">
          Best Se
        </span>
        llers
      </h2>
      <div className="grid grid-flow-row gap-1 md:p-5 bg-white grid-col-1 md:grid-flow-col md:grid-rows-2">
        <div className="md:max-w-[250px]   sm:max-w-[350px] w-full md:row-span-2 md:h-[460px] h-auto my-5  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <div className="flex justify-between flex-col-2">
              <p className="text-xs font-bold">Truata scott addict 300</p>

              <p className="text-xs font-bold">
                AED
                <span className="text-sm text-red-600 font--bold">25</span>
              </p>
            </div>
            <div className="flex justify-between flex-col-2">
              <button className="w-32 p-1 text-white bg-blue-300 rounded">
                Try Now
              </button>
              <HeartIcon className="w-8 h-8 text-red-600 "></HeartIcon>
            </div>
          </div>
          <img className="w-full rounded-t-lg " src="fashion.jpg" alt="" />
        </div>
        <div className="flex flex-col sm:h-auto h-[410px] my-5  bg-white border rounded-lg shadow-md md:mx-5 md:mb-5 sm:flex-row sm:max-w-xl ">
          <img
            className="object-cover sm:w-1/2 sm:h-[200px] w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="scoty.jpg"
            alt=""
          />
          <div className="flex flex-col p-4 leading-normal ">
            <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
              ideapad 1 Laptop with 11.6 inch HD display
            </h5>
            <p className="mb-3 font-bold text-red-600">AED650</p>
            <div className="flex justify-between">
              <button className="w-24 p-1 text-white bg-blue-300 rounded">
                Try Now
              </button>
              <button className="w-24 p-1 text-black bg-white border-2 border-black rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:h-auto h-[410px] my-5  bg-white border rounded-lg shadow-md md:mx-5 md:mb-5 sm:flex-row sm:max-w-xl ">
          <img
            className="object-cover sm:w-1/2 sm:h-[200px] rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="scoty.jpg"
            alt=""
          />
          <div className="flex flex-col p-4 leading-normal ">
            <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
              ideapad 1 Laptop with 11.6 inch HD display
            </h5>
            <p className="mb-3 font-bold text-red-600">AED650</p>
            <div className="flex justify-between">
              <button className="w-24 p-1 text-white bg-blue-300 rounded">
                Try Now
              </button>
              <button className="w-24 p-1 text-black bg-white border-2 border-black rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:h-auto h-[410px] my-5  bg-white border rounded-lg shadow-md md:mx-5 md:mb-5 sm:flex-row sm:max-w-xl ">
          <img
            className="object-cover sm:w-1/2 sm:h-[200px] rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="scoty.jpg"
            alt=""
          />
          <div className="flex flex-col p-4 leading-normal ">
            <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
              ideapad 1 Laptop with 11.6 inch HD display
            </h5>
            <p className="mb-3 font-bold text-red-600">AED650</p>
            <div className="flex justify-between">
              <button className="w-24 p-1 text-white bg-blue-300 rounded">
                Try Now
              </button>
              <button className="w-24 p-1 text-black bg-white border-2 border-black rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:h-auto h-[410px] my-5  bg-white border rounded-lg shadow-md md:mx-5 md:mb-5 sm:flex-row sm:max-w-xl ">
          <img
            className="object-cover sm:w-1/2 sm:h-[200px] rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="scoty.jpg"
            alt=""
          />
          <div className="flex flex-col p-4 leading-normal ">
            <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
              ideapad 1 Laptop with 11.6 inch HD display
            </h5>
            <p className="mb-3 font-bold text-red-600">AED650</p>
            <div className="flex justify-between">
              <button className="w-24 p-1 text-white bg-blue-300 rounded">
                Try Now
              </button>
              <button className="w-24 p-1 text-black bg-white border-2 border-black rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        
       
        
      </div>
    </div>
  );
}

export default Seller;

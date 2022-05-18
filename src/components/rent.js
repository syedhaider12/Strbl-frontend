import React from 'react'

function Rent() {
  return (
    <div className="px-10 bg-white">
    <h2 className="pt-10 pb-2 font-bold text-black md:text-2xl ">
      <span className="underline decoration-red-500 underline-offset-8">For Ren</span>t
    </h2>
    <div className="flex flex-col items-center justify-around p-10 md:flex-row">
        <div className="  bg-white border border-gray-200 rounded-lg shadow-md  md:w-[350px] dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg " src="Fashions.jpg" alt="" />

         
        </div>
        <div className=" my-5 bg-white border border-gray-200 rounded-lg md:w-[350px] shadow-md md:mx-5 dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg " src="electronic.jpeg" alt="" />

          
        </div>
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md md:w-[350px] dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-lg " src="scoty.jpg" alt="" />

              
            </div>
      </div>
    </div>
  )
}

export default Rent
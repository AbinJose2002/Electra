import React from "react";
import Button from "../Buttons/Button";

function Sponsors() {
  return (
    <div className="flex justify-center" id="Sponsors-Page">
      <div className="w-3/4 bg-white h-autorounded-xl pt-3 rounded-lg">
        <div className="header flex justify-center">
          <h1 className="font-medium text-black text-4xl m-10">Our Sponsors</h1>
        </div>
        <div className="flex w-full flex-col justify-center">
          <div className="mr-10 ml-10 text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            neque? Dolorem, itaque hic. Blanditiis beatae laborum ullam totam
            quidem tempora quis voluptatem numquam nostrum commodi, aliquid
            praesentium nihil? Perspiciatis placeat nihil esse eligendi atque
            earum quasi a, provident velit hic.
          </div>
          <div className="mt-10 flex flex justify-center w-full flex-col">
            <h2 className="text-center text-2xl text-bold">Want to Sponsor Us?</h2>
            <div>
              <div className="w-auto flex justify-center items-center flex-col">
                {/* <button id="sponsor" className="mt-10 mb-10 px-6 py-2 transition border-2 ease-in duration-200 uppercase text-black rounded-full hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none">
                  Sponsor Now
                </button> */}
                <Button text={"Sponsor Us"} class_val={"mt-10 mb-10 px-6 py-2 transition border-2 ease-in duration-200 uppercase text-black rounded-full hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;

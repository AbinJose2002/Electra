import React from "react";
import Button from "../Buttons/Button";

const SponsorList = ({ img, content }) => {
  return (
    <div>
      <a href="https://equipo.io/">
        <div className="border-black border-8 rounded-full hover:scale-110 duration-200 transition hover:bg-blue-100 h-60 w-60 flex justify-center">
          <img src={`${process.env.PUBLIC_URL}/${img}`} className="p-2" alt="" />
        </div>
      </a>
    </div>
  );
};
function Sponsors() {
  return (
    <div className="flex justify-center" id="Sponsors-Page">
      <div className="w-3/4 bg-white h-autorounded-xl pt-3 rounded-lg">
        <div className="header flex justify-center">
          <h1 className="font-medium text-black text-4xl m-10">Our Sponsors</h1>
        </div>
        <div className="flex w-full flex-col justify-center">
          <div className="text-lg mr-10 ml-10 text-center mb-10 ">
            Here are our wonderful sponsors!!!!
          </div>
          <div className="SponsorList flex justify-center">
            <SponsorList img={"equipo.png"} />
          </div>
          <div className="mt-10 flex flex justify-center w-full flex-col">
            <h2 className="text-center text-2xl text-bold">
              Want to Sponsor Us?
            </h2>
            <div>
              <div className="w-auto flex justify-center items-center flex-col">
                <Button
                  text={"Sponsor Us"}
                  class_val={
                    "mt-10 mb-10 px-6 py-2 transition border-2 ease-in duration-200 uppercase text-black rounded-full hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;

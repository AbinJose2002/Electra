import React, { useState, useEffect } from "react";
import { FaWrench, FaTrophy, FaTasks, FaTableTennis } from "react-icons/fa";
import extraInfo from "./ExtraInfo";
import "./Events.css";

// function Events() {
//     const [isVisible, setVisible] = useState({key:0,isActive:false})
//     const [rendertheText, setRendertheText] = useState('')

//     const buttonClick = (val) =>{
//         setVisible((prev) => {
//             return {key:val, isActive:!prev.isActive}
//         })

//         if(isVisible.isActive){
//             setRendertheText(() => extraInfo[val].html)

//             // Set the icon to color here
//             document.querySelector(`#val-${val}`).style.color = "#ADD8E6";
//         }
//         else {
//             setRendertheText(() => '')
//             document.querySelector(`#val-${val}`).style.color = "#000";
//         }
//     }

//     return (
//         <div className="flex justify-center mt-20 mb-20 " id="Events-Page">
//             <div className="w-3/4 bg-white pt-3 rounded-lg">
//                 <div className="flex justify-center mb-10">
//                     <h1 className="font-medium text-black text-5xl">Events</h1>
//                 </div>
//                 <div className="flex flex-wrap md:flex-nowrap m-10">
//                     <div className="workshops p-3 basis-full text-center" onClick={() => buttonClick(1)}>
//                         <FaWrench className="icons w-full text-3xl" id="val-1"/>
//                         <p className="">Workshops</p>
//                     </div>
//                     <div className="workshops p-3 basis-full text-center" onClick={() => buttonClick(2)}>
//                         <FaTrophy className="icons w-full text-3xl" id="val-2"/>
//                         <p className="">Competitions</p>
//                     </div>
//                     <div className="workshops p-3 basis-full text-center" onClick={() => buttonClick(3)}>
//                         <FaTasks className="icons w-full text-3xl" id="val-3"/>
//                         <p className="">Expo</p>
//                     </div>
//                     <div className="workshops p-3 basis-full text-center" onClick={() => buttonClick(4)}>
//                         <FaTableTennis className="icons w-full text-3xl" id="val-4"/>
//                         <p className="">Games</p>
//                     </div>
//                 </div>
//                 <div className="h-100 w-full">{rendertheText}</div>
//             </div>
//         </div>
//     )
// }

const registerButton = () => {
  return (
    <div
      className="shadow-lg rounded-2xl  bg-white w-48 md:w-56
                     mt-10 p-2"
    >
      <img
        src="/images/object/3.png"
        alt="adidas"
        className="w-32 p-4 h-36 m-auto"
      />
      <div className="bg-pink-200 m-3 p-4 rounded-lg">
        <p className="text-white text-xl font-bold ">Adidas</p>
        <p className="text-gray-50 text-xs">Live your dream</p>
        <div className="flex items-center justify-between ">
          <p className="text-white">$98.00</p>
          <button
            type="button"
            className="w-10 h-10 text-base font-medium rounded-full text-white bg-pink-500 hover:bg-pink-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="mx-auto"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-col md:flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <div
                className={
                  "text-xs flex rounded justify-center flex-col items-center font-bold uppercase px-5 py-3 block leading-normal" +
                  (openTab === 1
                    ? "text-white bg-red-600"
                    : "bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
              >
                <FaWrench className="text-2xl" />
                <a
                  className="mt-10"
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Workshops
                </a>
              </div>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <div
                className={
                  "text-xs flex rounded justify-center flex-col items-center font-bold uppercase px-5 py-3 block leading-normal" +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
              >
                <FaTrophy className="text-2xl" />
                <a
                  className="mt-10"
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Competitions
                </a>
              </div>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <div
                className={
                  "text-xs flex rounded justify-center flex-col items-center font-bold uppercase px-5 py-3 block leading-normal" +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
              >
                <FaTasks className="text-2xl" />
                <a
                  className="mt-10"
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Expo
                </a>
              </div>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <div
                className={
                  "text-xs flex rounded justify-center flex-col items-center font-bold uppercase px-5 py-3 block leading-normal" +
                  (openTab === 4
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
              >
                <FaTableTennis className="text-2xl" />
                <a
                  className="mt-10"
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Games
                </a>
              </div>
            </li>
          </ul>
          <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                    {registerButton()}
                    {registerButton()}
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                    {registerButton()}
                    {registerButton()}
                    {registerButton()}
                    {registerButton()}
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                    {registerButton()}
                  </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                  <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                    {registerButton()}
                    {registerButton()}
                    {registerButton()}
                    {registerButton()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Events() {
  return (
    <div className="flex justify-center mt-20 mb-20" id="Events-Page">
      <div className="w-3/4 bg-white pt-3 rounded-lg">
        <div className="flex justify-center mb-10">
          <h1 className="font-medium text-black text-5xl">Events</h1>
        </div>
        <div className="m-10">
          <Tabs color="red" />;
        </div>
      </div>
    </div>
  );
}

export default Events;

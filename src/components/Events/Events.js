import React, { useState, useEffect } from "react";
import { FaWrench, FaTrophy, FaTasks, FaTableTennis } from "react-icons/fa";
import extraInfo from "./ExtraInfo";
import "./Events.css";


const registerButton = ({ img_src, title, content, cash_price, link }) => {
  return (
    <div
      className="shadow-lg rounded-2xl  bg-white w-48 md:w-56
                     mt-10 p-2"
    >
      <img
        src={img_src}
        alt="adidas"
        className="w-32 p-4 h-36 m-auto"
      />
      <div className="bg-pink-200 m-3 p-4 rounded-lg">
        <p className="text-white text-center text-xl font-bold ">{title}</p>
        <p className="text-gray-50 text-xs">{content}</p>
        <div className="flex items-center justify-between flex-col">
          <p className="text-blue-500 mt-5 mb-5">₹{cash_price}/-</p>
          <button
            type="button"
            className="rounded w-full text-base font-medium duration-200 text-white bg-pink-500 hover:bg-pink-700"
          >
            <a href={link}>
              Register
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
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
                className="mt-10 hidden md:flex"
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
                className="mt-10 hidden md:flex"
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
                className="mt-10 hidden md:flex"
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
                className="mt-10 hidden md:flex"
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
                <h1 className="flex md:hidden text-bold text-3xl w-full justify-center mb-10">Workshops</h1>
                <div className="text-center w-full hidden md:flex">
                  {/* Workshop text */}
                  Technology can circumvent traditional processes and empower individuals through networks, information and digital trade. Technology emboldens the notion of human rights, quite literally, with the touch of a hand
Department of Electrical and Electronics Engineering in association with COSPHI presents you two phenomenal workshops to build your technical skills and passion in engineering.
                </div>
                <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                  {registerButton({ img_src: null, title: "Cervello", content: "Quizzing is an art and a test for the intellect to improve or expand one's knowledge.", cash_price: 3000, link: "www.google.com" })}
                  {registerButton({ img_src: null, title: "Cervello", content: "Quizzing is an art and a test for the intellect to improve or expand one's knowledge.", cash_price: 3000, link: "www.google.com" })}
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <h1 className="flex md:hidden text-bold text-3xl w-full justify-center mb-10">Competitions</h1>
                <div className="text-center w-full hidden md:flex justify-center">
                Department of Electrical and Electronics Engineering, FISAT and ELECTRA on behalf of COSPHI presents you a wide varieties of technical competitions to enhance your skill and test your knowledge.
                </div>
                <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                  {registerButton({ img_src: null, title: "Cervello", content: "Quizzing is an art and a test for the intellect to improve or expand one's knowledge.", cash_price: 3000, link: "www.google.com" })}
                  {registerButton({ img_src: null, title: "Cervello", content: "Quizzing is an art and a test for the intellect to improve or expand one's knowledge.", cash_price: 3000, link: "www.google.com" })}
                  {registerButton({ img_src: null, title: "Cervello", content: "Quizzing is an art and a test for the intellect to improve or expand one's knowledge.", cash_price: 3000, link: "www.google.com" })}
                  {registerButton({ img_src: null, title: "Cervello", content: "Quizzing is an art and a test for the intellect to improve or expand one's knowledge.", cash_price: 3000, link: "www.google.com" })}
                </div>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                  <h1 className="flex md:hidden text-bold text-3xl w-full justify-center mb-10">Expo</h1>
                  <div className="text-center w-full hidden md:flex justify-center">
                    Electric vehicles (EVs) have the potential to eliminate the use of fossil fuels in the transportation industry. Electrification of the transportation industry can also result in better energy efficiency and lower pollution levels in the local area.
                    However, there are legitimate concerns about meeting future energy demand for charging electric vehicle batteries with clean and renewable sources.<br />
                    Here is a visual treat on electric vehicles put on by the electra community under the auspices of COSPHI. We feature industry leaders such as Revolt, Aban Motors, Gokulam Motors, Tata, Hyundai, Odysse, and MG COASTLINE GARAGES.
                  </div>
                  {registerButton({ img_src: null, title: "Cervello", content: "Quizzing is an art and a test for the intellect to improve or expand one's knowledge.", cash_price: 3000, link: "www.google.com" })}
                </div>
              </div>
              <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                <h1 className="flex md:hidden text-bold text-3xl w-full justify-center mb-10">Games</h1>
                <div className="text-center w-full hidden md:flex justify-center">
                  GET READY FOR FUN CHALLENGES AND UNIQUE ADVENTURE
                </div>
                <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                  {registerButton({ img_src: null, title: "Cervello", content: "Quizzing is an art and a test for the intellect to improve or expand one's knowledge.", cash_price: 3000, link: "www.google.com" })}
                  {registerButton({ img_src: null, title: "Cervello", content: "Quizzing is an art and a test for the intellect to improve or expand one's knowledge.", cash_price: 3000, link: "www.google.com" })}
                  {registerButton({ img_src: null, title: "Cervello", content: "Quizzing is an art and a test for the intellect to improve or expand one's knowledge.", cash_price: 3000, link: "www.google.com" })}
                  {registerButton({ img_src: null, title: "Cervello", content: "Quizzing is an art and a test for the intellect to improve or expand one's knowledge.", cash_price: 3000, link: "www.google.com" })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

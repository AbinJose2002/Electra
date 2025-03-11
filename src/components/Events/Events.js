import React, { useState, useEffect } from "react";
import { FaWrench, FaTrophy, FaTasks, FaTableTennis } from "react-icons/fa";
import "./Events.css";
import Drone from "../../assets/drones.jpeg";
import Additive from "../../assets/additive.jpeg";
import PLC from "../../assets/pathPixel.jpeg";
import CAD from "../../assets/cad.jpg";
import EV from "../../assets/ev_cars.jpeg";
import Quiz from "../../assets/cervello.jpeg";
import Debug from "../../assets/circuitgenix.jpeg";
import threevsthree from '../../assets/threevsthree.jpeg'
import ScrapYard from "../../assets/scrapyard.jpg";
import Treasure from "../../assets/basket.jpeg";
import efootball from '../../assets/efootball.jpeg'
import tressurehunt from '../../assets/tressurehunt.jpeg'
import capture from '../../assets/captutr.jpeg'
import pillow from '../../assets/pillowfight.jpeg'

const Content = ({ isMoney, link }) => {
  return (
    <div className="w-full">
      {isMoney == true ? (
        <div className="w-full">
          <a href={link}>
            <button
              type="button"
              className="rounded w-full text-base h-12 font-medium duration-200 text-white bg-green-500 hover:bg-pink-700 mt-auto reg-btn"
            >
              Register Now
            </button>
          </a>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}



const registerButton = ({
  class_new = "",
  complete = false,
  img_src,
  date,
  title,
  content,
  cash_price,
  link,
  isMoney = true,
  FeesOrPrize = "Fees",
  team,
  regFees,
  coordinators,
}) => {
  return (
    <div class={`p-2 sm:p-4 w-full sm:w-1/2 lg:w-1/3 ${class_new}`}>
      <div class="h-full event-bg hover:text-white transition duration-300 ease-in border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          class="h-48 sm:h-56 lg:h-72 w-full object-cover object-center"
          src={img_src}
          alt="blog"
        />
        <div class="p-4 sm:p-6">
          <h1 class="text-xl sm:text-2xl font-semibold mb-3">{title}</h1>
          <p class="text-sm sm:text-base leading-relaxed mb-3 text-justify">{content}</p>
          <div>
            <h6 className="text-lg sm:text-xl text-center mb-5">DATE: {date}</h6>
          </div>
          {team != null ? <h3 className="text-base sm:text-lg mb-5 text-center font-bold">** Register as team of two</h3> : <></>}
          <div class="flex items-center flex-wrap flex-col">
            {isMoney == true ? (
              <p className="text-black-500 hover:text-grey text-2xl sm:text-3xl mb-5">{FeesOrPrize} : ₹ {cash_price} /-</p>
            ) : (
              <></>
            )}
            {regFees != null ? <p className="text-base sm:text-lg mb-5">Registration Fees: ₹ {regFees} /-</p> : <></>}
            {coordinators && coordinators.length > 0 && (
              <div className="w-full mb-5">
                <h3 className="text-base sm:text-lg font-semibold mb-2">Coordinators:</h3>
                {coordinators.map((coordinator, index) => (
                  <div key={index} className="flex flex-col mb-2">
                    <p className="text-sm sm:text-base font-medium">{coordinator.name}</p>
                    <p className="text-sm sm:text-base">{coordinator.phone}</p>
                  </div>
                ))}
              </div>
            )}
            {complete == false ?
              <h3 className="text-red-600 text-sm sm:text-base">Registration is Closed, Thank you for your participation.</h3>
              : <Content link={link} isMoney={isMoney} />
            }
          </div>
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
              style={{ width: "200px" }}
              className={
                "text-xs flex rounded justify-center flex-col items-center font-bold uppercase px-5 py-3 block leading-normal" +
                (openTab === 1 ? " border-4 border-black" : " bg-white")
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
              style={{ width: "200px" }}
              className={
                "text-xs flex rounded justify-center flex-col items-center font-bold uppercase px-5 py-3 block leading-normal" +
                (openTab === 2 ? " border-4 border-black" : " bg-white")
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
              style={{ width: "200px" }}
              className={
                "text-xs flex rounded justify-center flex-col items-center font-bold uppercase px-5 py-3 block leading-normal" +
                (openTab === 3 ? " border-4 border-black" : " bg-white")
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
              style={{ width: "200px" }}
              className={
                "text-xs flex rounded justify-center flex-col items-center font-bold uppercase px-5 py-3 block leading-normal" +
                (openTab === 4 ? " border-4 border-black" : " bg-white")
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
                <h1 className="flex md:hidden text-bold text-3xl w-full justify-center mb-10">
                  Workshops
                </h1>
                <div className="text-center w-full hidden md:flex">
                  {/* Workshop text */}
                  Technology can circumvent traditional processes and empower
                  individuals through networks, information and digital trade.
                  Technology emboldens the notion of human rights, quite
                  literally, with the touch of a hand Department of Electrical
                  and Electronics Engineering in association with COSPHI
                  presents you two phenomenal workshops to build your technical
                  skills and passion in engineering.
                </div>
                <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                  {registerButton({
                    complete: true,
                    img_src: Drone,
                    date: "14th March 2025",
                    title: "AVIAN",
                    content:
                      "This workshop will take you to the fundamentals of a drone. Participants will get a clear idea on how to build a drone, its theory and the physics behind it. The workshop will be handled by one of the most famous Drone enthusiasts Mr. Abraham George, founder of Drone Racers Kerala. Flying of drones will be exhibited after the workshop by Drone Racers Kerala .",
                    cash_price: 149,
                    link: "https://www.yepdesk.com/avian",
                    coordinators: [
                      {
                        name: "Nitin Jose",
                        phone: "+91 8078533091"
                      },
                      {
                        name: "Devika",
                        phone: "+91 82899 66507"
                      }
                    ]
                  })}
                  {registerButton({
                    img_src: Additive,
                    complete: true,
                    date: "15th March 2025",
                    title: "3D FORGE",
                    content:
                      "Explore 3D Forge in our 1-Day 3D Printing Workshop, hosted by ELECTRA and COSPHI. This beginner-friendly session introduces the basics of 3D printing, from design to printing, and guides you through creating physical objects from digital models. Perfect for those new to 3D printing, this hands-on workshop provides a clear introduction to its potential and helps you begin exploring this innovative technology. Take your first step toward creating the future!",
                    cash_price: 129,
                    link: "https://www.yepdesk.com/3d-forge",
                    coordinators: [
                      {
                        name: "Jithin Joseph",
                        phone: "+91 98952 21439"
                      },
                      {
                        name: "Nandana Anil",
                        phone: "+91 9526088462"
                      }
                    ]
                  })}
                  {registerButton({
                    img_src: PLC,
                    complete: true,
                    date: "15th March 2025",
                    title: "PATH PIXELS",
                    content:
                      "Join our AR & VR Workshop by ELECTRA and COSPHI for an immersive, hands-on experience with Augmented and Virtual Reality. Discover the fundamentals of AR/VR, explore their applications in industries like gaming, healthcare, and education, and learn to create simple AR/VR experiences using accessible tools. Ideal for tech enthusiasts and creative minds eager to explore the future of interactive technologies.",
                    cash_price: 129,
                    link: "https://www.yepdesk.com/path-pixel",
                    coordinators: [
                      {
                        name: "Alan George",
                        phone: "+91 8129384284"
                      },
                      {
                        name: "V.Partip",
                        phone: "+91 8138084357"
                      }
                    ]
                  })}
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <h1 className="flex md:hidden text-bold text-3xl w-full justify-center mb-10">
                  Competitions
                </h1>
                <div className="text-center w-full hidden md:flex justify-center">
                  Creativity is the act of turning new and imaginative ideas
                  into reality. Here is an opportunity to stretch your
                  imagination.
                </div>
                <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                  {registerButton({
                    class_new: "",
                    FeesOrPrize: "Prize",
                    img_src: Treasure,
                    date: "15th March 2025",
                    title: "BATTLE ON THE BOARDS",
                    content:
                      "To challenge your skills, ELECTRA in association with COSPHI brings before you BATTLE ON THE BOARDS, 3x3 Basketball Tournament, a platform for students to showcase their talent in sports.",
                    cash_price: 15000,
                    link: "https://www.yepdesk.com/battle-on-the-boards",
                    isMoney: true,
                    complete: true,
                    coordinators: [
                      {
                        name: "Eldho Bibin Binu",
                        phone: "+91 9539392817"
                      },
                      {
                        name: "Ajeesh Antony",
                        phone: "+91 7356433524"
                      }
                    ]
                  })}
                  
                  {registerButton({
                    img_src: capture,
                    complete: true,
                    date: "14th March 2025",
                    FeesOrPrize: "Prize",
                    regFees: 200,
                    title: "LIGHTS CAMERA CLICK",
                    content:
                      "This competition is open to all, from amateur enthusiasts with smartphones to professional photographers with sophisticated equipment. Whether you’re just beginning your photography journey or are a seasoned pro, this competition offers a platform to showcase your creativity and passion. We encourage diverse perspectives, unique angles, and original interpretations",
                    cash_price: 5000,
                    link: "https://www.yepdesk.com/lights-camera-click",

                    coordinators: [
                      {
                        name: "Adharsh",
                        phone: "+91 99617 17920"
                      },
                      {
                        name: "Devapriya",
                        phone: "+91 98467 30098"
                      }
                    ]
                  })}
                  {registerButton({
                    class_new: "",
                    FeesOrPrize: "Prize",
                    img_src: efootball,
                    date: "1th March 2025",
                    title: "E-FOOTBALL TOURNAMENT",
                    content:
                      "A PES (Pro Evolution Soccer) Tournament is a competitive gaming event where players compete against each other in eFootball (formerly PES), Konami's popular football simulation game.",
                    cash_price: 2000,
                    regFees: 50,
                    link: "https://www.yepdesk.com/e-football-tournament1",
                    isMoney: true,
                    complete: true,
                    coordinators: [
                      {
                        name: "Nihal",
                        phone: "+91 95672 56446"
                      },
                      {
                        name: "Amil",
                        phone: "+91  91640 32056"
                      }
                    ]
                  })}
                  {registerButton({
                    img_src: Quiz,
                    complete: true,
                    date: "14th March 2025",
                    regFees: 100,
                    title: "CERVELLO",
                    content:
                      "Cervello is a thrilling quiz platform where engineering students test their logic and technical skills. It challenges creativity and problem-solving across diverse engineering topics. Students compete, learn, and push boundaries, turning knowledge into adventure. Ready to prove your mettle? Step into Cervello and let your engineering brilliance shine!",
                    cash_price: 1000,
                    FeesOrPrize: "Prize",
                    link: "https://docs.google.com/forms/d/e/1FAIpQLSeuIhH54hOPWAnXh816vyS5e1qwnS1KPyugQG_LzX9d-WzIaw/viewform?usp=header",

                    coordinators: [
                      {
                        name: "Pooja P. P",
                        phone: "+91 62823 46836"
                      },
                      {
                        name: "Saj Krishna",
                        phone: "+91 90610 34100"
                      }
                    ]
                  })}
                  {/* {registerButton({
                    img_src: ScrapYard,
                    complete:true,
                    date:"14th May 2022",
                    title: "SCRAPYARD",
                    regFees: 20,
                    FeesOrPrize:"Prize",
                    content:
                      "ELECTRA in association with COSPHI presents you Scrapyard, a competition which helps students to think on ways of reusing everyday materials. Participants will be provided a theme for which they have to model best creative and attractive products out of the waste materials.The competition's purpose is to raise environmental awareness and foster",
                    cash_price: 2500,
                    link: "https://www.yepdesk.com/open-register/6298d8fb46e0fb0001736ab5/l4k5i3oera",
                    coordinators: [
                      {
                        name: "John Doe",
                        phone: "+91 9876543210"
                      },
                      {
                        name: "Jane Smith", 
                        phone: "+91 9876543211"
                      }
                    ]
                  })} */}
                  {/* {registerButton({
                    img_src: CAD,
                    complete:true,
                    date:"13th May 2022",
                    FeesOrPrize:"Prize",
                    regFees: 20,
                    title: "Pencil Drawing",
                    content:
                      "To challenge your skills, ELECTRA in association with COSPHI brings before you SKETCH IT UP,  Cad  Competition, a platform for students to showcase their designs and their creative skills.",
                    cash_price: 2000,
                    link: "https://www.yepdesk.com/open-register/6298d8fb46e0fb0001736ab5/l4k5i3oera",
                    coordinators: [
                      {
                        name: "John Doe",
                        phone: "+91 9876543210"
                      },
                      {
                        name: "Jane Smith", 
                        phone: "+91 9876543211"
                      }
                    ]
                  })} */}
                  {registerButton({
                    img_src: Debug,
                    complete: true,
                    date: "15th March 2025",
                    FeesOrPrize: "Prize",
                    regFees: 100,
                    title: "CIRCUITGENIX",
                    content:
                      "Circuit debugging is essential for identifying and fixing faults in electronic circuits. It involves testing components and connections to isolate issues, ensuring proper functionality. Debugging enhances problem-solving and design efficiency. Mastering this skill leads to more reliable and optimized circuit designs.",
                    cash_price: 1000,
                    link: "https://www.yepdesk.com/circuitgenix",
                    team: "Register as a team of two",
                    coordinators: [
                      {
                        name: "Sayooj",
                        phone: "+91 89432 90093"
                      },
                      {
                        name: "Abhinav M K",
                        phone: "+91 85905 10329"
                      }
                    ]
                  })}
                  
                </div>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                  <h1 className="flex md:hidden text-bold text-3xl w-full justify-center mb-10">
                    Expo
                  </h1>
                  <div className="text-center w-full hidden md:flex justify-center">
                    Electric vehicles (EVs) have the potential to eliminate the
                    use of fossil fuels in the transportation industry.
                    Electrification of the transportation industry can also
                    result in better energy efficiency and lower pollution
                    levels in the local area. However, there are legitimate
                    concerns about meeting future energy demand for charging
                    electric vehicle batteries with clean and renewable sources.
                    <br />
                    {/* Here is a visual treat on electric vehicles put on by the
                    electra community under the auspices of COSPHI. We feature
                    industry leaders such as Revolt, Aban Motors, Gokulam
                    Motors, Tata, Hyundai, Odysse, and MG COASTLINE GARAGES. */}
                  </div>
                  {registerButton({
                    img_src: EV,
                    date: "14th and 15th March 2025",
                    class_new: "text-center",
                    complete: true,
                    title: "Expo",
                    isMoney: false,
                    cash_price: 3000,
                  })}
                </div>
              </div>
              <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                <h1 className="flex md:hidden text-bold text-3xl w-full justify-center mb-10">
                  Games
                </h1>
                <div className="text-center w-full hidden md:flex justify-center">
                  GET READY FOR FUN CHALLENGES AND UNIQUE ADVENTURE
                </div>
                <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                  {registerButton({
                    class_new: "",
                    FeesOrPrize: "Prize",
                    img_src: tressurehunt,
                    date: "15th March 2025",
                    title: "TREASURE HUNT",
                    content:
                      "A Treasure Hunt is an adventurous game where participants follow a series of clues to find hidden objects or a final prize. It can be played indoors or outdoors and is popular at events, schools, corporate team-building, and parties.",
                    cash_price: 1000,
                    regFees: 50,
                    link: "https://www.yepdesk.com/treasure-hunt11",
                    isMoney: true,
                    complete: true,
                    coordinators: [
                      {
                        name: "Aagna",
                        phone: "+91 94471 66260"
                      },
                      {
                        name: "Navaneeth",
                        phone: "+91 80754 37404"
                      }
                    ]
                  })}
                  {registerButton({
                    class_new: "",
                    img_src: pillow,
                    date: "14th and 15th March 2025",
                    title: "PILLOW FIGHT",
                    content:
                      "A pillow fight is a fun and lighthearted activity where participants use soft pillows to playfully hit each other. It is often enjoyed by children, friends, or even in organized competitions.",
                    regFees: 20,
                    link: "https://www.yepdesk.com/battle-on-the-boards",
                    isMoney: false,
                    complete: true,
                    coordinators: [
                      {
                        name: "Vishnu",
                        phone: "+91  62387 13899"
                      },
                      {
                        name: "Abhijith",
                        phone: "+91 92079 00184"
                      }
                    ]
                  })}
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
          <Tabs color="red" />
        </div>
      </div>
    </div>
  );
}

export default Events;

// "ELECTRA in association with COSPHI presents you Scrapyard, a competition which helps students to think on ways of reusing everyday materials. Participants will be provided a theme for which they have to model best creative and attractive products out of the waste materials.The competition's purpose is to raise environmental awareness and foster"
// "To challenge your skills, ELECTRA in association with COSPHI brings before you SKETCH IT UP,  Cad  Competition, a platform for students to showcase their designs and their creative skills."

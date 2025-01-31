import React, { useState } from "react";
import Button from "../Buttons/Button";
import { Collapse } from "react-collapse";
import './Hackathon.css'
import SplitText from "../SplitText/SplitText";
import hackatraonImage from '../../assets/WhatsApp Image 2025-01-23 at 10.00.59 PM.jpeg'
import basketImage from '../../assets/basket.jpeg'

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};


const ProblemStateMent = ({ content }) => {
  return (
    <div className="p-4 md:w-1/3 sm:w-1/2 w-full"
    /* style={{minWidth:""}} */
    >
      <div className="flex justify-center items-center border-2 border-gray-600 px-4 py-6 rounded-lg duration-500 hover:scale-110 h-72">
        <h2 className="title-font font-medium text-2xl text-gray-900">{content}</h2>
      </div>
    </div>
  );
};

function Hackathon() {
  const [isOpened1, setIsOpened1] = useState(false);
  const [isOpened2, setIsOpened2] = useState(false);
  const [isLearnMoreVisible1, setIsLearnMoreVisible1] = useState(true);
  const [isLearnMoreVisible2, setIsLearnMoreVisible2] = useState(true);

  const onButtonClick1 = () => {
    setIsOpened1((prev) => !prev);
    setIsLearnMoreVisible1((prev) => !prev);
  };

  const onButtonClick2 = () => {
    setIsOpened2((prev) => !prev);
    setIsLearnMoreVisible2((prev) => !prev);
  };

  return (
    <div className="flex justify-center mb-20">
      <div className="bg-white w-3/4 pt-3 rounded-lg">
        {/* First Event Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-8 border-b-2">
          {/* Poster Side */}
          <div className="w-full md:w-1/2">
            <img
              src={hackatraonImage}
              alt="Hackatron Poster"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2">
            <h2 className="font-extrabold text-black">
              <span className="text-4xl md:text-6xl block">
                <SplitText
                  text="HACKATRON"
                  className="text-4xl sm:text-5xl md:text-6xl font-semibold"
                  delay={100}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </span>
              <span className="block text-black text-xl mt-4">
                24 HOUR HACKATHON COMPETITION WITH A PRIZE POOL OF 50K
              </span>
            </h2>

            <p className="text-xl mt-4 text-gray-400">
              Hackatron is a 24 hour hackathon competition conducted as a part of COSPHI by ELECTRA, an association of Electrical and Electronics Engineering students.
            </p>
            {/* sett the coordinator details */}
            {/* <h3 className="text-base sm:text-lg font-semibold mb-2">Venue:</h3> */}<br />
            <h3 className="text-base sm:text-lg font-semibold mb-2">Coordinators:</h3>
            <p className="text-sm sm:text-base font-medium">Sreelekshmi V.S:  +91 82198 66854</p>
            <p className="text-sm sm:text-base font-medium">Antony Paulachan:  +91 95673 50607</p>
            <div className="mt-8 bg-blue-400 glow-on-hover rounded-full p-4 text-center prize-pool-pill">
              <h1 className="text-black text-3xl">Prize Pool of ₹50,000/-</h1>
            </div>


            
                    <Button
                      text={"Registration Open !!!"}
                      isLink={true}
                      class_val={
                        "px-6 mt-4 py-2 transition border-2 ease-in duration-200 uppercase text-black rounded-full hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none"
                      }
                      link={"https://www.yepdesk.com/hackatron"}
                    />
          </div>
        </div>

        {/* Second Event Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-8">
          {/* Content Side */}
          <div className="w-full md:w-1/2">
            <h2 className="font-extrabold text-black">
              <span className="text-4xl md:text-6xl block">
                <SplitText
                  text="BATTLE ON THE BOARDS"
                  className="text-5xl sm:text-3xl md:text-5xl font-semibold break-words"
                  delay={100}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                  onLetterAnimationComplete={handleAnimationComplete}
                  // style={{ fontSize: '4.20rem' }}
                />
              </span>
              <span className="block text-black text-xl mt-4">
                BATTLE ON THE BOARDS is a 3x3 Basketball Tournament that provides a platform for students to showcase their athletic abilities.
              </span>
            </h2>

            <p className="text-xl mt-4 text-gray-400">
              To challenge your skills, ELECTRA in association with COSPHI brings before you BATTLE ON THE BOARDS, 3x3 Basketball Tournament, a platform for students to showcase their talent in sports.
            </p><br />
            <h3 className="text-base sm:text-lg font-semibold mb-2">Coordinators:</h3>
            <p className="text-sm sm:text-base font-medium">Eldho Bibin Binu:  +91 98470 28561</p>
            <p className="text-sm sm:text-base font-medium">Ajeesh Antony:  +91 73564 33524</p>
            <div className="mt-8 bg-blue-400 glow-on-hover rounded-full p-4 text-center prize-pool-pill">
              <h1 className="text-black text-3xl">Prize Pool of ₹15,000/-</h1>
            </div>
            {/* sett the coordinator details */}
            <div className="mt-8 flex justify-center">
              <Button
                text="Register Now"
                isLink={true}
                class_val="px-6 py-2 transition border-2 ease-in duration-200 uppercase text-black rounded-full hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none"
                link="https://www.yepdesk.com/battle-on-the-boards"
              />
            </div>
          </div>

          {/* Poster Side */}
          <div className="w-full md:w-1/2">
            <img
              src={basketImage}
              alt="Basketball Event Poster"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hackathon;

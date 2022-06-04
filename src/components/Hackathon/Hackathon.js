import React, { useState } from "react";
import Button from "../Buttons/Button";
import { Collapse } from "react-collapse";
import './Hackathon.css'

const ProblemStateMent = ({content}) => {
  return (
    <div className="p-4 md:w-1/3 sm:w-1/2 w-full"
    /* style={{minWidth:""}} */
    >
      <div className="flex justify-center items-center border-2 border-gray-600 px-4 py-6 rounded-lg duration-500 hover:scale-110 h-72">
        <h2 className="title-font font-medium text-3xl text-gray-900">{content}</h2>
      </div>
    </div>
  );
};

function Hackathon() {
  const [isOpened, setIsOpened] = useState(false);
  const [isLearnMoreVisible, setIsLearnMoreVisible] = useState(true);
  const onButtonClick = () => {
    console.log("Pressed");
    setIsOpened((prev) => !prev);
    setIsLearnMoreVisible((prev) => !prev);
  };
  return (
    <div className="flex justify-center mb-20" id="Hackathon-Page">
      <div className="bg-white w-3/4 bg-white pt-3 rounded-lg">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            <span className="block">Hackatron</span>
            <span className="block text-black text-xl">
            24 HOUR HACKATHON COMPETITION WITH A PRIZE POOL OF 40K
            </span>
          </h2>
          <p className="text-xl mt-4 text-gray-400">
            Hackatron is a 24 hour hackathon competition conducted as a part of COSPHI by ELECTRA, an association of Electrical and Electronics Engineering students. The hackathon will be conducted on 13th and 14th of June at Federal Institute of Science and Technology with a prize pool of 40k.
            The participants need to select a problem statement at the time of registration.
          </p>
          
          <div class="mt-20 w-60 h-24 rounded-md mx-auto parent-div">
              <div class="flex bg-blue-400 glow-on-hover rounded-full flex-row items-center h-full justify-center space-x-5" id="animate-bounce">
                <h1 className="text-black text-3xl">Prize Pool of ₹40000/-</h1>
              </div>
          </div>

          <div
            onClick={() => onButtonClick()}
            className={isLearnMoreVisible ? "duration-200" : "hidden"}
          >
            <Button
              text={"Learn More"}
              link={""}
              class_val={
                "mt-10 mb-10 px-6 py-2 transition border-2 ease-in duration-200 uppercase text-black rounded-full hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none"
              }
            />
          </div>

          {/* Start here */}
          <Collapse isOpened={isOpened}>
            <section className="text-gray-700 body-font duration-200">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex justify-evenly flex-wrap -m-4 text-center">
                  {/* <h1 className="text-3xl">Coming Soon!!!!!</h1> */}
                  {ProblemStateMent({content:"Support differently abled students in professional stem field - engineering"})}
                  {ProblemStateMent({content:"Indoor mapping solutions at large institutions"})}
                  {ProblemStateMent({content:"AI assistance in electrical power grid"})}
                  {ProblemStateMent({content:"Smart solutions for assisting emergency services to navigate/reduce traffic congestion"})}
                </div>
              </div>
              <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Button
                    text={"Hack Now!!!"}
                    isLink={true}
                    class_val={
                      "px-6 py-2 transition border-2 ease-in duration-200 uppercase text-black rounded-full hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none"
                    }
                    link={"https://www.yepdesk.com/open-register/6298e49946e0fb000173b882/bef7p9s0o8"}
                  />
                </div>
              </div>
            </section>
          </Collapse>
          {/* End here */}
        </div>
      </div>
    </div>
  );
}

export default Hackathon;

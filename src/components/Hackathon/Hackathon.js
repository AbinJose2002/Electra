import React, { useState } from "react";
import Button from "../Buttons/Button";
import { Collapse } from "react-collapse";

const ProblemStateMent = () => {
  return (
    <div className="p-4 md:w-1/3 sm:w-1/2 w-full" 
    /* style={{minWidth:""}} */
    >
      <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="text-indigo-500 w-12 h-12 mb-3 inline-block"
          viewBox="0 0 24 24"
        >
          <path d="M8 17l4 4 4-4m-4-5v9"></path>
          <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
        </svg>
        <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
        <p className="leading-relaxed">Downloads</p>
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
    <div className="flex justify-center mt-20 mb-20">
      <div className="bg-white w-3/4 bg-white pt-3 rounded-lg">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            <span className="block">Hackatron</span>
            <span className="block text-black text-2xl">
              It&#x27;s today or never.
            </span>
          </h2>
          <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
            deserunt provident consectetur voluptate fuga eveniet qui. Eum
            numquam asperiores minima accusamus hic atque repellat deleniti! Id
            architecto debitis excepturi consequuntur!
          </p>
          <div
            onClick={() => onButtonClick()}
            className={isLearnMoreVisible ? "duration-200" : "hidden"}
          >
            <Button
              text={"Learn More"}
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
                  {ProblemStateMent()}
                  {ProblemStateMent()}
                  {ProblemStateMent()}
                  {ProblemStateMent()}
                  {ProblemStateMent()}                  
                </div>
              </div>
              <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Button
                    text={"Hack Now!!!"}
                    class_val={
                      "px-6 py-2 transition border-2 ease-in duration-200 uppercase text-black rounded-full hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none"
                    }
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

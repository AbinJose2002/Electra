import React from "react";
import Particles from "react-tsparticles";
import Button from "../Buttons/Button";
import './LandingPage.css'

export default function LandingPage({particlesInit, particlesLoaded}) {
    return <div id="Landing-Page">
        <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded}
        // options={particleConfig}
        options={{
            fullScreen:{
                enable:true,
                zIndex:-1
            },
            particles:{
                number:{
                    value:60,
                    density:{
                        enable:true,
                        value_area:800
                    }
                },
                color:{
                    value:"fff"
                },
                shape:{
                    type:"circle",
                    stroke:{
                        width:0,
                        color:"fff"
                    },
                    polygon:{
                        nb_sides:3
                    }
                },
                opacity:{
                    value:0.5,
                    random:false,
                    anim:{
                        enable:false,
                        speed:1,
                        opacity_min:0.1,
                        sync:false
                    }
                },
                size:{
                    value:2,
                    random:true,
                    anim:{
                        enable:true,
                        speed:80,
                        size_min:0.1,
                        sync:false
                    }
                },
                lineLinked:{
                    enable:true,
                    distance:150,
                    color:"fff",
                    opacity:0.4,
                    width:2
                },
                move:{
                    enable:true,
                    speed:3,
                    direction:"none",
                    random:false,
                    straight:false,
                    outMode:"out",
                    bounce:false,
                    attract:{
                        enable:false,
                        rotateX:600,
                        rotateY:1200
                    }
                }
            },
            interactivity:{
                detect_on:"canvas",
                events:{
                    onHover:{
                        enable:true,
                        mode:"repulse"
                    },
                    resize:true
                },
                modes:{
                    repulse:{
                        distance:100,
                        duration:0.1
                    }
                }
            },
            retina_detect:true,
            fpsLimit:60
        }}
        />
        <div className="w-auto h-screen flex justify-center items-center mt-20 flex-col">
            {/* <button className="mt-40 mb-10 button-register px-6 py-2  transition border-2 ease-in duration-200 uppercase text-white rounded-full hover:bg-white hover:text-black border-2 border-gray-900 focus:outline-none">
                Register Now
            </button> */}
            {/* <Button text="Register Now" /> */}
            <svg className="mt-40" id="scrolltrigger" width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame 1">
                        <path id="outer" d="M67.5 34V66C67.5 75.665 59.665 83.5 50 83.5C40.335 83.5 32.5 75.665 32.5 66V34C32.5 24.335 40.335 16.5 50 16.5C59.665 16.5 67.5 24.335 67.5 34Z" stroke="white" strokeWidth="3"></path>
                        <rect id="inner" x="47" y="27" width="7" height="23" rx="3.5" fill="#20A2DE"></rect>
                    </g>
            </svg>
        </div>
    </div>;
}
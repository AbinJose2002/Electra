import React, { useState, Fragment } from "react";
import { Transition } from "@headlessui/react";
import './NavBar.css'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 500){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };

  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className="sticky top-0">
      <nav className={colorChange ? 'navbar bg-black opacity-75 duration-200' : 'navbar duration-200'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-20 w-20 mt-2"
                  src="electra.png"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => {window.scrollTo({top:0, behavior:'smooth'})}}
                  >
                    Home
                  </a>

                  <a
                    className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => {document.querySelector("#About-Page").scrollIntoView({behavior:'smooth', block:'center'})}}
                  >
                    About
                  </a>

                  <a
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => {document.querySelector("#Events-Page").scrollIntoView({behavior:'smooth', block:'center'})}}
                  >
                    Events
                  </a>

                  <a
                    href="#"
                    className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Schedule
                  </a>

                  <a
                    href="#"
                    className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  onClick={() => {document.querySelector("#Landing-Page").scrollIntoView({behavior:'smooth', block:'center'})}}
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  onClick={() => {document.querySelector("#About-Page").scrollIntoView({behavior:'smooth', block:'start'})}}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>

                <a
                  onClick={() => {document.querySelector("#Events-Page").scrollIntoView({behavior:'smooth', block:'center'})}}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Events
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Schedule
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contacts
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
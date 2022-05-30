import React from "react";
import Logo from "../Logo/Logo";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from '@heroicons/react/outline'

function About() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex justify-center " id="About-Page">
      <div className="w-3/4 bg-white h-autorounded-xl pt-3 rounded-lg">
        <div className="header flex justify-center">
          <h1 className="font-medium text-black text-4xl">About Electra</h1>
        </div>
        <div className="flex justify-evenly flex-wrap md:flex-row">
          {/* Transition here */}

          {/* <main className="w-screen h-screen grid grid-flow-col place-items-center group">
            <section className="border bg-red-200 absolute transition-all duration-500 -left-36 group-hover:left-0">
                <p className="h-screen grid place-items-center w-32">sidebar</p>
            </section>
            <section className="w-64">
                <p> harum modi dignissimos laborum blanditiis aut quasi laborum 
                et repellendus autem blanditiis voluptatem consequatur omnis 
                sit ipsum hic sunt molestias </p>
            </section>
        </main> */}

          <Logo />
          <div className="abt-text w-72 m-10 flex flex-col">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            saepe, dolorem corrupti aut quasi veniam vitae praesentium fuga cum
            atque facere, molestiae rem placeat amet eligendi enim perspiciatis
            illo quia consectetur, id cupiditate molestias! Rerum delectus
            exercitationem doloribus nostrum nisi ipsa, pariatur, libero quis
            dolorum quasi repudiandae dolorem minima porro.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

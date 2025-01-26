import React from "react";
import Logo from "../Logo/Logo";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from '@heroicons/react/outline'

function About() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex justify-center mt-20" id="About-Page">
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
          <div className="abt-text w-full text-center pr-10 pl-10 md:p-0 md:w-72 mt-10 flex flex-col">
            Electra is an association of electrical and electronics engineering student community at the Federal Institute of Science and Technology.  Electra was founded in 2004 and has been active ever since, manifesting perfection in each FISAT electrical student.
          </div>
        </div>
        <div className="w-full text-justify p-10">
          The Electrical and Electronics Association embodies sparks of creativity, the rays of originality, the colours of imagination, and the genuine expressions of the electrical students of FISAT. Electra aims at nurturing and developing the talents of young men and women from FISAT. It is not a purely technical association; it also promotes the academic, technological, managerial, cultural, and artistic skills of the electrical students of FISAT.
          <br />
          <br />
          The organization hosts seminars and presentations by prominent figures from the industrial and academic worlds. Industrial visits are also scheduled to provide information.
        </div>

        <h1 className="text-center w-full text-bold text-3xl md:text-4xl">The Department Vision</h1>
        <div className="p-10">
        To prepare the students to meet the demands of growing industries and to mould
        them into successful professionals, globally competent and morally upright, in the
        field of Electrical and Electronics Engineering, contributing to nation building and
        the progress of humanity.
        </div>

        <h1 className="text-center w-full text-bold text-3xl md:text-4xl">The Department Mission</h1>
        <div className="p-10">
          <li>
            To impart quality and value based education enabling the students to become
            solution providers for the growing challenges in the industry and society
          </li>
          <li>
            To create awareness among the students, the impact of Electrical and
            Electronics Engineering in the global scenario and the challenges of
            electrical based industries and organizations
          </li>
          <li>
            To enhance the competitiveness of the graduates for higher studies by
            promoting research and development in the field of electrical as well as
            interdisciplinary subjects.
          </li>
        </div>
      </div>
    </div>
  );
}

export default About;

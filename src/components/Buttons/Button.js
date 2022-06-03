import React from 'react'

export default function Button({text, isLink=false, link="https://electra.fisat.ac.in", class_val="mt-40 mb-10 button-register px-6 py-2  transition border-2 ease-in duration-200 uppercase text-white rounded-full hover:bg-white hover:text-black border-2 border-gray-900 focus:outline-none"}) {
  return (
    <div>
      {isLink == true ? 
      <a href={link}>
        <button className={class_val}>
            {text}
        </button>
      </a>
      :
      <button className={class_val}>
        {text}
      </button>
    }
    </div>
  )
}

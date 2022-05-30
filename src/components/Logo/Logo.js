import React from 'react'

export default function ({logoColor="black"}) {
  return (
    <div className="image-container h-48 w-48 md:h-72 md:w-72 lg:h-80 lg:w-80 m-5 rounded-full" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/electra.png')`, backgroundSize:"cover", backgroundColor:`${logoColor}`}}></div>
  )
}

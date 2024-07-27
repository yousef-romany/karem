import React from 'react'

function Loader() {
  return (
    <div className='fixed top-0 left-0 z-[999999] bg-black w-full h-screen flex justify-center items-center'>
      <span className="loader"></span>
    </div>
  )
}

export default Loader
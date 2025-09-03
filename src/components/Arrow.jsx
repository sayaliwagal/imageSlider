import React from 'react'
import { FcPrevious, FcNext } from 'react-icons/fc'



const Arrow = (props) => {
   const {prevSlide, nextSlide} = props
  return (
    <div className="absolute top-1/2 left-0 right-0 flex items-center justify-between px-2 sm:px-4 z-20">
      <div 
           onClick={prevSlide}
        className="absolute w-8 h-8 md:w-10 md:h-10  md:p-2 sm:w-16 sm:h-16 top-1/2 left-[50px] -translate-y-1/2 bg-gray-200 p-2 text-2xl rounded-full cursor-pointer hover:bg-gray-300 shadow-md z-20"

      >
          <FcPrevious/>
      </div>
       <div
        onClick={nextSlide}
        className="absolute w-8 h-8 md:w-10 md:h-10  md:p-2 sm:w-16 sm:h-16 top-1/2 right-[50px] -translate-y-1/2 bg-gray-200 p-2 text-2xl rounded-full cursor-pointer hover:bg-gray-300 shadow-md z-20"
      >
        <FcNext />
      </div>
    </div>
  )
}
export default Arrow
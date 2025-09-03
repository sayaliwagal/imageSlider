import React from 'react'

const Dots = ({activeInd, onClick, sliderImage}) => {
  return (
    <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30 '>
        {sliderImage.map((_, index) => (
        <span 
          key={index}
          className={`inline-block w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${activeInd ===index ? 'bg-white scale-110 shadow-lg' : 'bg-gray-500 hover:bg-gray-300'}`}
          onClick={() => onClick(index)}
          ></span>
        ))
        }
      
    </div>
  );  
};

export default Dots

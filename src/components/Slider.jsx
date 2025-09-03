import React from 'react'

   

const Slider = (props) => {
  const { imgUrl, altText, isActive, transitionClass} = props;
  // console.log(imgUrl, altText);
  
  return (
    <div 
    className={`absolute inset-0 flex items-center justify-center overflow-y-hidden 
      ${transitionClass || ''} //Apply transition classes if provided
      ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'} //Control visibility and layering `}
    >
          <img src={imgUrl} className="w-[700px] h-[800px] object-cover rounded-2xl shadow-lg mx-auto  bg-gray-900"
           alt={altText}
           onError={(e) =>{
            e.target.onerror = null;
            e.target.src = "https://placehold.co/259x385/999999/FFFFFF?text=Image+Not+Available";
            console.error(`Failed to load image: ${imageUrl}. Displaying fallback.`)
           }} />
    </div>
  )
}

export default Slider

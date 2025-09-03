import { useEffect, useState } from 'react';
import Slider from './components/Slider';
import Arrow from './components/Arrow';
import Dots from './components/Dots';
import './App.css';
import { imageObj } from './HarryPotter';

const len = imageObj.length - 1;
function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const transitionClass = "transition-transform duration-700 ease-in-out";
  
  useEffect(() =>{
    const interval = setInterval(() => {
      setCurrentImageIndex(currentImageIndex ===  len ? 0 : currentImageIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
    },[currentImageIndex]); 
  return (
    <div className='flex relative justify-center w-full h-full items-center h-screen bg-gray-900  flex-row overflow-y-hidden '>
      {imageObj.map((image , index)=>(
        <Slider
        key={image.id}
        imgUrl = {image.image_url}
        altText = {image.character}
        isActive = {index === currentImageIndex} //if it is true this slide is the current one
        transitionClass = {transitionClass}
        style ={{transform: `translateX(-${currentImageIndex * 100}%)`}}
        />
      ))}
      <Arrow prevSlide={() =>
        setCurrentImageIndex(currentImageIndex < 1 ? len : currentImageIndex -1 )
      } 
      nextSlide={() => 
        setCurrentImageIndex(currentImageIndex === len ? 0 : currentImageIndex + 1)
      }
      />
      <Dots 
      activeInd={currentImageIndex} 
      sliderImage={imageObj} 
      onClick={(currentImageIndex) => setCurrentImageIndex(currentImageIndex)}
      />
    </div>
  )
}
export default App
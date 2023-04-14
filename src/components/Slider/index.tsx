import React, {useState} from 'react';
import { BiCaretRight, BiCaretLeft } from "react-icons/bi";
import './index.css'

type Props = {
  slides: Array<string>
}

export const Slider: React.FC<Props> = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)

  }
  const goToPrevious = () => {
    if(currentIndex !== 0) {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
    }
  }

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex)
  }


  return (
      <div className='container'>
        <div style={{backgroundImage:`url(${slides[currentIndex]})`}} className='main-slide'>
          <div className='left-arrow-container' onClick={goToPrevious}>
            <BiCaretLeft className='arrow'/>
          </div>
          <div className='right-arrow-container' onClick={goToNext}>
            <BiCaretRight className='arrow'/>
          </div>
        </div>
        <div className='slides-container'>
          {slides.map((slide, slideIndex) => (
            <img
              key={slideIndex}
              src={slide}
              className={slideIndex === currentIndex ? 'selected-slide slide' :  'slide'}
              onClick={() => goToSlide(slideIndex)}
              alt='image'

            />
          ))}
        </div>
      </div>
  );
};
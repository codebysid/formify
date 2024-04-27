import React from 'react'
import CustomImage from './CustomImage'

const HeroSlide = () => {
  return (
    <div className='slide-container'>
      <div className='slide'>
        <CustomImage src="/sc1.png" />
        <CustomImage src="/sc2.png" />
        <CustomImage src="/sc3.png" />
        <CustomImage src="/sc4.png" />
        <CustomImage src="/sc5.png" />
      </div>
      <div className='slide'>
        <CustomImage src="/sc1.png" />
        <CustomImage src="/sc2.png" />
        <CustomImage src="/sc3.png" />
        <CustomImage src="/sc4.png" />
        <CustomImage src="/sc5.png" />
      </div>
    </div>
  )
}

export default HeroSlide

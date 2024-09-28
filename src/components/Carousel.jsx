import React from 'react'
import hero from '../images/hero.png'
const Carousel = () => {
  return (
    <div className='px-10 lg:px-40'>
      <img src={hero} alt="" className='w-full'/>
    </div>
  )
}

export default Carousel

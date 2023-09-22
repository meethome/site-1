import React from 'react'
import styles from './Hero.module.css'

const Hero = ({ 
  heading, 
  description,
  buttonText,
  buttonLink  
}) => {

  return (
    <div>
    <div className="flex flex-col items-center gap-10 max-w-[100%] mx-auto">

      {/* Heading & Description */}
      <div className="mx-auto max-w-[1024px]">
        <h1 className={`${styles.heroHeading} text-center  font-bold`}>  
          {heading}
        </h1>

        <p className={`${styles.heroDescription} text-center md:text-xl w-3/4 mx-auto`}>
          {description} 
        </p>
      </div>

      {/* Button */}
      <div className="mx-auto w-full md:w-1/2">
        <a 
          href={buttonLink}
          className={`${styles.heroButton} bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded`}
        >
          {buttonText}
        </a>
      </div>

      {/* Image */}
      <div className="relative mt-10 md:w-1/2">
        <img 
          src="/objects.svg"
          alt=""
          className="w-full h-auto" 
        />
      </div>

    </div>
    </div>
  )
}

export default Hero
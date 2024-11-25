import Image from 'next/image'
import React from 'react'
import hero from "../../public/hero.png"
import { IoCloudDownloadOutline } from 'react-icons/io5'

const Hero = () => {
  return (
    <section id='hero' className="text-gray-600 body-font pb-24">
  <div className="md:container px-10 mx-auto flex xl:px-28 py-6 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h3 className="mb-2 mt-28 text-2xl text-primary leading-relaxed">
        Hi Everyone, I am
      </h3>
      <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900">
        Rizfan Herlaya
      </h1>
      <p className="mb-8 text-[18px]">
      Lorem ipsum dolor sit amet consectetur. Vitae maecenas pellentesque tellus tempus purus integer nisi cras fermentum.
      </p>
      <div className="grid lg:grid-cols-2 gap-5 justify-center">
        <button className="inline-flex text-sm justify-self-center text-white bg-primary shadow-md shadow-gray-500 border-0 md:h-14 md:w-60 py-2 px-4 md:py-4 md:px-9 focus:outline-none hover:bg-accent hover:border-2 hover:border-primary hover:text-primary rounded sm:text-lg">
        Download CV
        <IoCloudDownloadOutline className='ml-3 mt-1 text-lg sm:text-2xl' />
        </button>
        <button className="lg:ml-4 text-sm inline-flex justify-self-center text-primary bg-accent border-2 border-primary md:h-14 md:w-60 py-2 px-8 md:py-3 md:px-14 focus:outline-none hover:bg-primary hover:text-accent hover rounded sm:text-lg">
          Explore More
        </button>
      </div>
    </div>
    <div className="relative -mt-10  lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
    <Image src={hero} alt="Hero Section Image" className='z-10 relative drop-shadow-[0_5px_5px_rgba(0,0,0,0.55)] shadow-black'>
    </Image>
    </div>
  </div>
</section>

  )
}

export default Hero
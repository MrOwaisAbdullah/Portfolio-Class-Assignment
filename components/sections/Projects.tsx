import Image from 'next/image'
import React from 'react'
import project1 from '../../public/project (4).png'
import project2 from '../../public/project (3).png'
import project3 from '../../public/project (2).png'
import project4 from '../../public/project (1).png'

const Projects = () => {
  return (
    <section id='projects' className="text-gray-600 body-font bg-background">
  <div className="md:container px-10  xl:px-28 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <h3 className="mb-4 -mt-5 text-3xl font-bold text-primary leading-relaxed">
        Projects
      </h3>
      <h2 className="title-font sm:text-4xl text-3xl font-bold text-gray-900">
      What I have made?
      </h2>
    </div>

    <div className="flex flex-wrap -m-4">

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex flex-col relative shadow-md rounded-lg shadow-gray-300">
          <Image
            alt="Project 1"
            className="inset-0 w-full h-full object-cover object-center"
            src={project1} />
            <div className='py-6 px-5 rounded'>
            <h1 className="title-font text-xl font-semibold text-gray-900 mb-1">
              Portfolio Website Design
            </h1>
            <p className="leading-relaxed mb-1 font-normal text-sm">
            Lorem ipsum dolor sit amet consectetur.
            </p>
            <div>
            <h2 className="tracking-widest text-sm title-font font-normal text-indigo-500">
              Figma
            </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex flex-col relative shadow-md rounded-lg shadow-gray-300">
          <Image
            alt="Project 1"
            className="inset-0 w-full h-full object-cover object-center"
            src={project2} />
            <div className='py-6 px-5 rounded'>
            <h1 className="title-font text-xl font-semibold text-gray-900 mb-1">
            LitterCycle Exchange
            </h1>
            <p className="leading-relaxed mb-1 font-normal text-sm">
            Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className='grid sm:flex gap-4'>
            <h2 className="tracking-widest text-sm title-font font-normal text-indigo-500">
              Live View
            </h2>
            <h2 className="tracking-widest text-sm title-font font-normal text-indigo-500">
              Github
            </h2>
            <h2 className="tracking-widest text-sm title-font font-normal text-indigo-500">
              Figma
            </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex flex-col relative shadow-md rounded-lg shadow-gray-300">
          <Image
            alt="Project 1"
            className="inset-0 w-full h-full object-cover object-center"
            src={project3} />
            <div className='py-6 px-5 rounded'>
            <h1 className="title-font text-xl font-semibold text-gray-900 mb-1">
            Edubix
            </h1>
            <p className="leading-relaxed mb-1 font-normal text-sm">
            Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className='grid sm:flex gap-4'>
            <h2 className="tracking-widest text-sm title-font font-normal text-indigo-500">
              Live View
            </h2>
            <h2 className="tracking-widest text-sm title-font font-normal text-indigo-500">
              Github
            </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex flex-col relative shadow-md rounded-lg shadow-gray-300">
          <Image
            alt="Project 1"
            className="inset-0 w-full h-full object-cover object-center"
            src={project4} />
            <div className='py-6 px-5 rounded'>
            <h1 className="title-font text-xl font-semibold text-gray-900 mb-1">
            PPDB SMK Telesandi Bekasi
            </h1>
            <p className="leading-relaxed mb-1 font-normal text-sm">
            Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className='grid sm:flex gap-4'>
            <h2 className="tracking-widest text-sm title-font font-normal text-indigo-500">
              Live View
            </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex flex-col relative shadow-md rounded-lg shadow-gray-300">
          <Image
            alt="Project 1"
            className="inset-0 w-full h-full object-cover object-center"
            src={project4} />
            <div className='py-6 px-5 rounded'>
            <h1 className="title-font text-xl font-semibold text-gray-900 mb-1">
            PPDB SMK Telesandi Bekasi
            </h1>
            <p className="leading-relaxed mb-1 font-normal text-sm">
            Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className='grid sm:flex gap-4'>
            <h2 className="tracking-widest text-sm title-font font-normal text-indigo-500">
              Live View
            </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex flex-col relative shadow-md rounded-lg shadow-gray-300">
          <Image
            alt="Project 1"
            className="inset-0 w-full h-full object-cover object-center"
            src={project4} />
            <div className='py-6 px-5 rounded'>
            <h1 className="title-font text-xl font-semibold text-gray-900 mb-1">
            PPDB SMK Telesandi Bekasi
            </h1>
            <p className="leading-relaxed mb-1 font-normal text-sm">
            Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className='grid sm:flex gap-4'>
            <h2 className="tracking-widest text-sm title-font font-normal text-indigo-500">
              Live View
            </h2>
            </div>
          </div>
        </div>
      </div>


      
      

    </div>
  </div>
</section>

  )
}

export default Projects
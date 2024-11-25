import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='contact' className="md:container mx-auto lg:flex-grow md:w-3/4 px-5 md:px-0 flex flex-col md:items-start md:text-left items-center text-center">
    <h3 className="mb-2 mt-10 text-2xl font-bold text-primary leading-relaxed">
        Contacts
      </h3>
      <h2 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900">
        Get in touch
      </h2>
      <p className="mb-2 leading-relaxed">
      rizfanher@gmail.com
      </p>
      <div className='flex gap-4 text-4xl text-primary'>
      <FaLinkedin />
      <FaGithub />
      <FaInstagram />
      </div>
      <p className="text-black text-md my-9">
        Copyright &copy; {new Date().getFullYear()}. Developed & Designed by Owais Abdullah
      </p>
    </footer>
  )
}

export default Footer
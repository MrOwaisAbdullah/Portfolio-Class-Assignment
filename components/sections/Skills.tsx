import Image from 'next/image'
import React from 'react'
import bootstrap from '../../public/bootstrap-logo.png'
import html from '../../public/html-logo.png'
import css from '../../public/css-logo.png'
import php from '../../public/php-logo.png'
import tailwind from '../../public/tailwindcss-logo.png'
import laravel from '../../public/laravel-logo.png'
const Skills = () => {
  return (
    <section id='skills' className="text-gray-600 body-font">
  <div className="md:container px-10 text-center justify-center content-center lg:px-48 py-24 mx-auto">
    <div className="flex flex-col text-center w-full">
    <h3 className="mb-4 -mt-5 text-3xl w-full font-bold text-primary leading-relaxed">
        Skills
      </h3>
      <h2 className="w-full sm:text-4xl text-3xl font-bold text-gray-900">
      What I am capable of?
      </h2>
    </div>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-6 mt-8 xl:px-28 2xl:px-52 lg:gap-0 text-center mx-auto">
      <Image src={html} alt="HTML Logo" className='justify-self-center w-16 h-16'>
      </Image>
      <Image src={css} alt="CSS Logo" className='justify-self-center w-16 h-16'>
      </Image>
      <Image src={bootstrap} alt="Bootstrap Logo" className='justify-self-center w-16 h-16'>
      </Image>
      <Image src={tailwind} alt="Tailwind Logo" className='justify-self-center w-24 h-16'>
      </Image>
      <Image src={php} alt="PHP Logo" className='justify-self-center w-24 h-16'>
      </Image>
      <Image src={laravel} alt="Laravel Logo" className='justify-self-center w-16 h-16'>
      </Image>
    </div>
  </div>
</section>
  )
}

export default Skills
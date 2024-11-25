import Image from 'next/image'
import React from 'react'
import code from '../../public/Code-typing.png'

const About = () => {
  return (
    <section id='about' className="bg-background text-gray-600 body-font">
  <div className="md:container px-10 mx-auto flex xl:px-28 md:py-24 md:flex-row flex-col items-center">
    <div className="md:w-2/4 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center"
        alt="code typing"
        src={code}
      />
    </div>
    <div className="lg:flex-grow md:w-3/4  lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h3 className="mb-2 mt-10 text-2xl font-bold text-primary leading-relaxed">
        About
      </h3>
      <h2 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900">
        About Me?
      </h2>
      <p className="mb-8 leading-relaxed">
      Lorem ipsum dolor sit amet consectetur. Iaculis diam augue a adipiscing non aliquet. Leo semper lacus fringilla consectetur cras ac ullamcorper ut. Risus nunc diam accumsan feugiat. Tristique diam consectetur aliquam vitae suspendisse vel leo. Nec quisque senectus laoreet id pulvinar id vulputate. Montes consectetur diam non aliquam nunc maecenas non. Molestie pretium amet id dictum vitae nam vel sit. Rhoncus massa velit ut amet massa morbi eget. 
      </p>
    </div>
  </div>
</section>
  )
}

export default About
'use client'
import Link from 'next/link'
import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
} from "@/components/ui/drawer"
import { CgCloseO, CgMenuRight } from 'react-icons/cg'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => setIsOpen((prev) => !prev);
  const closeDrawer = () => setIsOpen(false); 

  return (
    <header className="flex text-gray-600 body-font border-b-2 lg:content-center shadow-2xl shadow-accent border-gray-500 lg:px-28 h-24">
  <div className="lg:container lg:mx-auto flex flex-wrap p-5 w-full flex-row justify-between items-center">
    <Link href={"/"} className="flex title-font text-3xl font-bold items-center text-gray-900">
      Rizfan
    </Link>
    <nav className="md:ml-auto hidden lg:flex flex-wrap items-center text-base justify-center">
      <Link href={"#hero"} className="mr-9 text-[28px] active:text-gray-900 hover:text-gray-900">Home</Link>
      <Link href={"#about"} className="mr-9 text-[28px] active:text-gray-900 hover:text-gray-900">About</Link>
      <Link href={"#skills"} className="mr-9 text-[28px] active:text-gray-900 hover:text-gray-900">Skill</Link>
      <Link href={"#projects"} className="mr-9 text-[28px] active:text-gray-900 hover:text-gray-900">Project</Link>
      <Link href={"#contact"} className="mr-9 text-[28px] active:text-gray-900 hover:text-gray-900">Contact</Link>
    </nav>
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
          <button
            onClick={toggleDrawer}
            className="text-2xl lg:hidden"
          >
            <CgMenuRight />
          </button>
  <DrawerContent className='bg-secondary mx-auto max-w-[80%] text-left px-6 lg:max-w-[35%] md:max-w-[50%]'>
  <DrawerClose className='m-5 text-xl place-self-end' onClick={closeDrawer}>
      <CgCloseO />
      </DrawerClose>
      <DrawerTitle className='text-xl my-5 font-bold'>Main Menu</DrawerTitle>
      <nav className="flex flex-col gap-5 text-base">
      <Link href={"#hero"} className=" text-lg active:text-gray-900 hover:text-gray-900" onClick={closeDrawer}>Home</Link>
      <Link href={"#about"} className=" text-lg active:text-gray-900 hover:text-gray-900" onClick={closeDrawer}>About</Link>
      <Link href={"#skills"} className="text-lg active:text-gray-900 hover:text-gray-900" onClick={closeDrawer}>Skill</Link>
      <Link href={"#projects"} className="text-lg active:text-gray-900 hover:text-gray-900" onClick={closeDrawer}>Project</Link>
      <Link href={"#contact"} className=" text-lg active:text-gray-900 hover:text-gray-900" onClick={closeDrawer}>Contact</Link>
    </nav>
  </DrawerContent>
</Drawer>

  </div>
</header>
  )
}

export default Header
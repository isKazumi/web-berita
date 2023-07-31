'use client'
import { IoIosArrowForward } from 'react-icons/io'
import { GrClose } from 'react-icons/gr'
import Link from 'next/link'
import { useState } from 'react'
import DropdownMenu from './dropdown-menu'

const ToggleMenu = ({ hendlerClose }) => {
  const [active, setActive] = useState(false)

  const hendlerClick = () => {
    setActive(!active)
  }

  const menu = {
    pages: 'Pages',
    contactus: 'Contact-Us',
    aboutus: 'About-Us'
  }

  return (
    <div className="absolute top-0 left-0 h-screen shadow-lg z-10 ">
      <div className="w-96 bg-white h-screen ">
        <div className="flex items-center justify-between py-8 px-4">
          <div className="text-secondary text-2xl font-bold">
            <Link href="/">MEGA.news</Link>
          </div>
          <button
            type="button"
            className="bg-gray p-3 flex items-center justify-center  hover:bg-secondary hover:text-white rounded-lg"
          >
            <GrClose className="w-5 h-5 " onClick={hendlerClose} />
          </button>
        </div>
        <div className="px-4">
          <div className="flex items-center justify-between bg-gray px-1 rounded-lg">
            <button
              className="w-full text-start font-2xl p-2"
              type="button"
              onClick={hendlerClick}
            >
              Categorys
            </button>
            <div
              className={`transition duration-300 ease-in ${
                active ? 'rotate-90' : ''
              } `}
            >
              <IoIosArrowForward />
            </div>
          </div>
          <div className="transition duration-300 ease-in">
            {active && <DropdownMenu />}
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4">
          {Object.entries(menu).map(([key, value]) => (
            <Link href={'/'} key={key} className="p-2 rounded-lg w-full">
              {value}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ToggleMenu

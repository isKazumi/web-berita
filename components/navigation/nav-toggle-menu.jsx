'use client'
import { IoIosArrowForward } from 'react-icons/io'
import { GrClose } from 'react-icons/gr'
import Link from 'next/link'
import DropdownMenu from './dropdown-menu'
import { useState } from 'react'

const ToggleMenu = ({ action }) => {
  const [active, setActive] = useState(false)
  const menu = {
    pages: 'Pages',
    contactus: 'Contact-Us',
    aboutus: 'About-Us'
  }

  const hendlerClick = () => {
    setActive(!active)
  }

  return (
    <div className="h-screen shadow-lg w-72 bg-white">
      <div className="flex items-center justify-between py-5 px-4">
        <div className="text-secondary text-2xl font-bold">
          <Link href="/">MEGA.news</Link>
        </div>
        <button
          type="button"
          onClick={action}
          className="bg-gray flex items-center justify-center hover:bg-secondary text-white rounded-lg p-3"
        >
          <GrClose />
        </button>
      </div>
      <div className="px-4">
        <div className="flex items-center justify-between bg-gray rounded-lg pr-3">
          <button
            className="w-full text-start font-2xl p-2"
            type="button"
            onClick={hendlerClick}
          >
            Categorys
          </button>
          <div
            className={`transition duration-500 ease-in ${
              active ? 'rotate-90' : ''
            } `}
          >
            <IoIosArrowForward />
          </div>
        </div>
        <div className="transition duration-300 ease-in">
          <DropdownMenu active={active} />
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
  )
}

export default ToggleMenu

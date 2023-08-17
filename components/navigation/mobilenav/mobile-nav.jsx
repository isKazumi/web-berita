'use client'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import SearchItems from './SearchItems'
import { useState } from 'react'
import ToggleMenu from '../nav-toggle-menu'
import { GiHamburgerMenu } from 'react-icons/gi'

const MobileNav = () => {
  const [active, setActive] = useState(false)
  const hendlerClick = () => {
    setActive(!active)
  }

  return (
    <nav className="w-full bg-white flex justify-between gap-3 px-4 py-5 items-cente">
      <button
        type="button"
        className={`p-3 text-lg hover:bg-secondary hover:text-white rounded-lg bg-gray text-`}
        onClick={hendlerClick}
      >
        <GiHamburgerMenu />
      </button>
      <div className="w-full relative overflow-hidden">
        <SearchItems
          possition="left-0"
          icons={<BsThreeDotsVertical className="w-5 h-5" />}
        />
        <input
          type="search"
          className="w-full h-11 rounded-lg bg-gray px-10 "
          placeholder="Search Anything"
        />
        <SearchItems
          possition="right-0"
          icons={<FaSearch className="w-5 h-5" />}
        />
      </div>
      <div
        className={`${
          active ? 'left-0' : '-left-96'
        } fixed top-0 z-20 transition-all duration-500 ease-in-out`}
      >
        <ToggleMenu action={hendlerClick} />
      </div>
    </nav>
  )
}

export default MobileNav

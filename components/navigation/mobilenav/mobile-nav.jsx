'use client'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import SearchItems from './SearchItems'
import Toggle from '../toggle'

const MobileNav = () => {
  return (
    <nav className="w-full bg-white flex justify-between gap-3 px-4 py-5 items-cente">
      <Toggle />
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
    </nav>
  )
}

export default MobileNav

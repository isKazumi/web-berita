'use client'
import SearchItems from '../mobilenav/SearchItems'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'
import Link from 'next/link'

const DesktopNav = () => {
  const [isActive, setIsActive] = useState(false)

  const hendlerClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="w-full py-4">
      <div className="container mx-auto relative w-full flex items-center justify-between">
        <div className="flex items-center w-96 justify-between">
          <div className="text-2xl font-bold text-secondary">
            <Link href="/">MEGA.news</Link>
          </div>
          <div className="flex items-center flex-col gap-2 relative">
            <button className="flex gap-2 items-center" onClick={hendlerClick}>
              Categories
              <span>
                <IoIosArrowDown />
              </span>
            </button>
            Ulang
          </div>
        </div>
        <div className="w-96 relative top-0 left-0 overflow-hidden">
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
      </div>
    </div>
  )
}

export default DesktopNav

import { GiHamburgerMenu } from 'react-icons/gi'
import ToggleMenu from './nav-toggle-menu'
import { useState } from 'react'

const Toggle = () => {
  const [isActive, setIsActive] = useState(false)

  const hendlerClick = () => {
    if (!isActive) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={hendlerClick}
        className="rounded-lg bg-gray p-3 hover:bg-secondary hover:text-white flex justify-center items-center"
      >
        <GiHamburgerMenu className="w-5 h-5 " />
      </button>
      {isActive && <ToggleMenu />}
    </div>
  )
}

export default Toggle

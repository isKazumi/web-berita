'use client'
import { useState, useEffect } from 'react'
import MobileNav from './mobilenav/mobile-nav'
import DesktopNav from './desktopnav/desktop-nav'

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isFixedNavbar, setIsFiexedNavbar] = useState(false)

  useEffect(() => {
    const hendlerResize = () => {
      setWindowWidth(window.innerWidth)
    }

    const hendlerScroll = () => {
      if (window.scrollY > 0) {
        setIsFiexedNavbar(true)
      } else {
        setIsFiexedNavbar(false)
      }
    }
    window.addEventListener('scroll', hendlerScroll)
    window.addEventListener('resize', hendlerResize)
    return () => {
      window.removeEventListener('scroll', hendlerScroll)
      window.addEventListener('resize', hendlerResize)
    }
  }, [])

  return (
    <header
      className={`w-full bg-white  ${isFixedNavbar ? 'top-0 fixed' : ''}`}
    >
      {windowWidth <= 767 && <MobileNav />}
      {windowWidth > 767 && windowWidth <= 1024 && (
        <h1>Makan nasi iwak karing tablet</h1>
      )}
      {windowWidth > 1024 && <DesktopNav />}
    </header>
  )
}

export default Navbar

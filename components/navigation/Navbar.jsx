'use client'
import { useState, useEffect } from 'react'
import MobileNav from './mobilenav/mobile-nav'

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const hendlerResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('scroll', hendlerResize)

    return () => {
      window.addEventListener('scroll', hendlerResize)
    }
  }, [])

  return (
    <header>
      {windowWidth <= 767 && <MobileNav />}
      {windowWidth > 767 && windowWidth <= 1024 && (
        <h1>Makan nasi iwak karing tablet</h1>
      )}
      {windowWidth > 1024 && <h1>Ini mode destop</h1>}
    </header>
  )
}

export default Navbar

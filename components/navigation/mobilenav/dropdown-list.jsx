import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/button'

const DropdownList = () => {
  const [active, setActive] = useState(false)

  const navList = {
    business: 'business',
    entertainment: 'entertainment',
    health: 'health',
    science: 'science',
    sports: 'sports',
    technology: 'technology'
  }

  const hendlerClick = () => {
    setActive(!active)
  }
  return (
    <>
      <Button
        hendler={hendlerClick}
        className={`${
          active ? 'rounded-tr-xl rounded-tl-xl' : 'rounded-xl'
        } w-full bg-gray p-2 text-start transition-all ease-in-out duration-300`}
      >
        Category
      </Button>
      <div
        className={`${
          active ? 'max-h-80 bg-gray' : 'max-h-0 invisible'
        } transition-all ease-in-out duration-300 overflow-hidden rounded-br-xl rounded-bl-xl`}
      >
        {Object.entries(navList).map(([value, key]) => (
          <li
            key={key}
            className="capitalize p-2 list-none block hover:text-secondary"
          >
            <Link href={`category?q=${value}&page=1&pageSize=20`}>{value}</Link>
          </li>
        ))}
      </div>
    </>
  )
}

export default DropdownList

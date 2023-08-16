'use client'
import Link from 'next/link'

const DropdownMenu = ({ path, active }) => {
  const menu = {
    business: 'Busines',
    entertainment: 'Entertainment',
    health: 'Health',
    sports: 'Sports',
    technology: 'Technology'
  }

  return (
    <ul
      className={`${
        active ? 'max-h-96' : 'max-h-0 invisible'
      } transition-all duration-500 ease-in-out overflow-hidden bg-white md:shadow-lg absolute z-10 md:top-6 top-6 left-0 w-60 md:rounded-lg md:p-4 p-2`}
    >
      <li className="flex flex-col gap-2">
        {Object.entries(menu).map(([key, value]) => (
          <Link
            className={`py-2 hover:text-secondary ${
              path === key ? 'text-secondary' : ''
            }`}
            key={key}
            href={`/category?q=${key}&page=1&pageSize=20`}
          >
            {value}
          </Link>
        ))}
      </li>
    </ul>
  )
}

export default DropdownMenu

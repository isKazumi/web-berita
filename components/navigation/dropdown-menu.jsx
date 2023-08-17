'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
const DropdownMenu = ({ active }) => {
  const menu = {
    business: 'Busines',
    entertainment: 'Entertainment',
    health: 'Health',
    sports: 'Sports',
    technology: 'Technology'
  }

  const searchParams = useSearchParams()
  const q = searchParams.get('q')

  return (
    <ul
      className={`${
        active ? 'max-h-96' : 'max-h-0 invisible'
      } transition-all duration-500 ease-in-out overflow-hidden bg-white md:shadow-lg md:absolute z-10 md:top-6 top-0 left-0 w-60 md:rounded-lg md:p-4`}
    >
      <li className="flex flex-col gap-2 p-2">
        {Object.entries(menu).map(([key, value]) => (
          <Link
            className={`py-2 hover:text-secondary ${
              q === key ? 'text-secondary' : ''
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

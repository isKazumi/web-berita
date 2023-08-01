'use client'
import Link from 'next/link'

const DropdownMenu = ({ active }) => {
  const menu = {
    business: 'Busines',
    entertainment: 'Entertainment',
    health: 'Health',
    science: 'Science',
    sports: 'Sports',
    technology: 'Technology'
  }

  return (
    <div
      className={`transition duration-300 ease-in p-2 ${
        active
          ? 'bg-white shadow-lg absolute top-6 left-0 w-60 rounded-lg p-4 '
          : 'bg-gray'
      }`}
    >
      <div className="flex flex-col gap-2 ">
        {Object.entries(menu).map(([key, value]) => (
          <Link
            className="border-b  border-b-slate-500 py-2 hover:text-secondary"
            key={key}
            href={`/posts/${key}`}
          >
            {value}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DropdownMenu

'use client'
import Link from 'next/link'

const DropdownMenu = () => {
  const menu = {
    business: 'Busines',
    entertainment: 'Entertainment',
    health: 'Health',
    science: 'Science',
    sports: 'Sports',
    technology: 'Technology',
    general: 'General'
  }

  return (
    <div className="bg-gray transition duration-300 ease-in p-2">
      <div className="flex flex-col gap-2 ">
        {Object.entries(menu).map(([key, value]) => (
          <Link
            className="border-b border-b-slate-500 py-2"
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

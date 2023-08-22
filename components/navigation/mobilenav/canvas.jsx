import { AiOutlineClose } from 'react-icons/ai'
import Button from '@/components/button'
import Link from 'next/link'
import DropdownList from './dropdown-list'

const Canvas = ({ isActive, onClick }) => {
  return (
    <div
      className={`${
        isActive ? 'left-0' : '-left-96'
      } fixed top-0 z-20 transition-all duration-500 ease-in-out`}
    >
      <div className="h-screen w-80 shadow-lg bg-white text-lg p-4 ">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-secondary">
            <Link href="/">MEGA.news</Link>
          </div>
          <Button hendler={onClick} variant="default">
            <AiOutlineClose />
          </Button>
        </div>
        <DropdownList isActive={isActive} />
      </div>
    </div>
  )
}

export default Canvas

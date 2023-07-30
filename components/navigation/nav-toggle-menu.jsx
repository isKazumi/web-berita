'use client'
import { GrClose } from 'react-icons/gr'
const ToggleMenu = ({ hendlerClose }) => {
  return (
    <div className="absolute top-0 left-0 h-screen shadow-lg z-10 ">
      <div className="w-96 bg-white h-screen px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="text-secondary text-2xl font-bold">MEGA.news</div>
          <button
            type="button"
            className="bg-gray p-3 flex items-center justify-center rounded-lg"
          >
            <GrClose className="w-5 h-5" onClick={hendlerClose} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ToggleMenu

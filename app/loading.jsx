import { VscLoading } from 'react-icons/vsc'

const Loading = () => {
  return (
    <div className=" text-6xl w-full h-80 flex items-center justify-center text-secondary text-center">
      <VscLoading className="animate-spin" />
    </div>
  )
}

export default Loading

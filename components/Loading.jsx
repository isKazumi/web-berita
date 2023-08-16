import { VscLoading } from 'react-icons/vsc'

export const Loading = () => {
  return (
    <div className=" text-6xl w-full h-screen flex items-center justify-center align-middle text-secondary text-center">
      <VscLoading className="animate-spin" />
    </div>
  )
}

'use client'
import { useParams } from 'next/navigation'

const PostCategory = () => {
  const prams = useParams()
  console.log(prams)
  return (
    <div>
      <h1>{prams.ctg}</h1>
    </div>
  )
}

export default PostCategory

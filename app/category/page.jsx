'use client'
import PostCard from '@/components/card'
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { LoadingCard } from '@/components/Loading'

const CategoryPage = () => {
  const router = useRouter()
  const [datas, setDatas] = useState(null)
  const [pageOfSite, setPageOfSite] = useState(1)

  const seractParams = useSearchParams()
  const q = seractParams.get('q')
  const pageSize = seractParams.get('pageSize')

  const hendlerNext = () => {
    const nextPage = pageOfSite + 1
    router.push(`category?q=${q}&page=${nextPage}&pageSize=${pageSize}`)
    setPageOfSite(nextPage)
  }

  const hendlerPrev = () => {
    if (pageOfSite > 1) {
      const prevPage = pageOfSite - 1
      router.push(`category?q=${q}&page=${prevPage}&pageSize=${pageSize}`)
      setPageOfSite(prevPage)
    }
  }

  useEffect(() => {
    fetch(`api/category?q=${q}&page=${pageOfSite}&pageSize=${pageSize}`)
      .then(req => req.json())
      .then(data => setDatas(data))
      .catch(err => {
        throw new Error(err)
      })
  }, [pageOfSite, q, pageSize])

  if (datas === null) return <LoadingCard />

  const {
    data: { articles }
  } = datas

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="px-4 text-base">Category : {q}</div>
        <div>
          <button
            className="btn p-2 bg-red-200"
            type="button"
            onClick={hendlerNext}
          >
            next
          </button>
          <button
            className="btn p-2 bg-red-500"
            type="button"
            onClick={hendlerPrev}
          >
            Back
          </button>
        </div>
      </div>
      <PostCard post={articles} />
    </>
  )
}

export default CategoryPage

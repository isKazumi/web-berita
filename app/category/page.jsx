'use client'
import PostCard from '@/components/card'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'

const CategoryPage = () => {
  const [datas, setDatas] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [pageOfSite, setPageOfSite] = useState(1)

  const searchParams = useSearchParams()
  const q = searchParams.get('q')
  const page = searchParams.get('page')
  const pageSize = searchParams.get('pageSize')

  const quary = {
    q: `${q}`,
    page: `${pageOfSite}`,
    pageSize: `${pageSize}`
  }

  useEffect(() => {
    axios
      .get('api/category', {
        params: quary
      })
      .then(response => setDatas(response.data))
      .catch(err => console.log(err))

    if (!isLoading) {
      setIsLoading(false)
    }
  }, [page, isLoading, pageOfSite])

  if (datas === null) return

  const {
    data: { articles }
  } = datas

  return (
    <div>
      <div>Category : {q}</div>
      <div>{isLoading && <PostCard post={articles} />}</div>
      <div>
        <button type="button" onClick={() => setPageOfSite(pageOfSite + 1)}>
          next
        </button>
        <button type="button" onClick={() => setPageOfSite(pageOfSite - 1)}>
          Back
        </button>
      </div>
    </div>
  )
}

export default CategoryPage

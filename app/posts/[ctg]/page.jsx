import Link from 'next/link'
import PostCard from '@/components/card'

export const generateMetadata = async ({ params }) => {
  return {
    title: `MEGA.news - ${params.ctg}`
  }
}

const PostCategory = async ({ params: { ctg } }) => {
  const getCategory = async () => {
    try {
      const category = await fetch(
        `https://newsapi.org/v2/everything?q=${ctg}&page=2&pageSize=42`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': process.env.API_KEY
          },
          next: { revalidate: 40 }
        }
      )
      return category.json()
    } catch (err) {
      throw new Error('message : ', err)
    }
  }

  const { articles } = await getCategory()
  return (
    <div className="w-full px-4">
      <div>
        <span className="text-semibold">
          <Link href="/">HOME</Link> -
        </span>
        <span className="text-slate-500 uppercase"> {ctg}</span>
      </div>
      <div className="p-4 my-4 bg-gray rounded-lg w-full flex items-center gap-4">
        <Link href="/" className="text-secondary">
          New
        </Link>
        <Link href="/">Trendy</Link>
        <Link href="/">Populer</Link>
        <Link href="/">Top</Link>
      </div>
      <div className="text-2xl border-l-2 px-2 border-l-secondary">
        Category : {ctg}
      </div>
      <PostCard post={articles} />
    </div>
  )
}

export default PostCategory

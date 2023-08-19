'use client'
import Image from 'next/image'
import formaterDate from '@/utils/formater-date'

const PostCard = ({ post }) => {
  const date = formaterDate(post)
  return (
    <>
      <div className="flex gap-4 w-full h-full items-center mt-5 justify-evenly flex-wrap">
        {post.map((el, idx) => (
          <div
            key={idx}
            className="w-96 h-96 flex flex-col gap-4 items-center justify-between rounded-lg shadow-lg p-4"
          >
            <div className="w-full h-full overflow-hidden rounded-lg">
              <Image
                src={
                  el.urlToImage ??
                  'https://www.gmt-sales.com/wp-content/uploads/2015/10/no-image-found.jpg'
                }
                objectFit="cover"
                alt="Mamam"
                loading="lazy"
                width={350}
                height={190}
                className="rounded-lg"
              />
            </div>
            <div className="font-bold text-ellipsis w-full h-10 whitespace-nowrap overflow-hidden leading-6">
              {el.title ?? 'Unknow'}
            </div>
            <div className="font-thin text-ellipsis w-full h-10 text-start whitespace-pre overflow-hidden  leading-6">
              {el.description ?? 'Unknow'}
            </div>
            <div className="bg-gray p-2 text-sm rounded-lg w-full">
              <div>{el.author ?? 'Unknow'}</div>
              <div>{date[idx] ?? 'Unknow'}</div>
              <div>{idx}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default PostCard

'use client'

const SearchItems = ({ icons, possition }) => {
  const styles = [
    'flex',
    'justify-center',
    'items-center',
    'absolute',
    'top-0',
    'w-10',
    'h-full'
  ]

  if (possition !== '') styles.push(possition)

  const joinArray = styles.join(' ')

  return <div className={joinArray}>{icons}</div>
}

export default SearchItems

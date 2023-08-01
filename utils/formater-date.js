const formaterDate = date => {
  const data = date.map(el => {
    const dt = new Date(el.publishedAt)
    return new Intl.DateTimeFormat(['jkt', 'id'], {
      dateStyle: 'full',
      timeZone: 'Asia/Jakarta'
    }).format(dt)
  })

  return data
}

export default formaterDate

const formaterDate = date => {
  const data = date.map(el => {
    const dt = new Date(el.publishedAt)
    return new Intl.DateTimeFormat(['ban', 'id']).format(dt)
  })

  console.log(data)

  return data
}

export default formaterDate

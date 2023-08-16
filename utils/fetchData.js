const category = async (category, currentPage = 1) => {
  const req = await fetch(
    `https://newsapi.org/v2/everything?q=${category}&pageSize=30&page=${currentPage}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.API_KEY
      },
      next: { revalidate: 40 }
    }
  )

  return req.json()
}

export { category }

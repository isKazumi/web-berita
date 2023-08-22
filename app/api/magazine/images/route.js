import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const req = await fetch(
      `https://newsapi.org/v2/everything?q=borneo&pageSize=10`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': process.env.API_KEY
        },
        next: { revalidate: 120 }
      }
    )
    const { articles } = await req.json()
    console.log(articles)

    return NextResponse.json({ message: 'OK', data }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'ERROR', err }, { status: 500 })
  }
}

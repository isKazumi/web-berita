import { NextResponse } from 'next/server'

export const GET = async req => {
  const { searchParams } = new URL(req.url)

  const q = searchParams.get('q')
  const page = searchParams.get('page')
  const limit = searchParams.get('limit')

  try {
    const req = await fetch(
      `https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=${limit}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': process.env.API_KEY
        },
        next: { revalidate: 120 }
      }
    )
    const data = await req.json()

    return NextResponse.json({ message: 'OK', data }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'ERROR', err }, { status: 500 })
  }
}

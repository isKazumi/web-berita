import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navigation/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MEGA.news',
  description: 'Portal berita terlengkap di indonesia'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="md:container mx-auto mt-4"> {children}</main>
      </body>
    </html>
  )
}

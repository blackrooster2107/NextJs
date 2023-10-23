import { Poppins } from 'next/font/google'
import './globals.css'
import NavBar from '../components/NavBar'
import Footer from '@/components/SiteFooter'

const poppins = Poppins({ subsets: ['latin'], weight: '700' })

export const metadata = {
  title: 'My Anime Website',
  description: 'Anime Info website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-a-dark`} >
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}

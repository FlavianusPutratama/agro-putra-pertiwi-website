import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata: Metadata = {
  title: 'PT Agro Putra Pertiwi - Spices and Furniture',
  description: 'Manufacture and trading company for Spices Commodities and Furniture Products from Indonesia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <div className="overflow-x-hidden"></div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
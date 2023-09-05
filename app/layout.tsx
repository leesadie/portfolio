import './globals.css'
import type { Metadata } from 'next'
import { font } from './fonts'
import Navbar from './components/navbar/Navbar'
import FooterNew from './components/navbar/FooterNew'

export const metadata: Metadata = {
  title: 'Sadie Lee',
  description: 'Sadie Lee Portfolio 2023',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <FooterNew />
      </body>
    </html>
  )
}

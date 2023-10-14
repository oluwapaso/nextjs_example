import Menu from '@/components/menu'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        <div className="page_container">
          <Menu />
          {children}
        </div>
      </body>
    </html>
  )
}

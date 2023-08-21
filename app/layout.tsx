import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Recursive } from 'next/font/google'

const recursive = Recursive({ style: ['normal'],weight:['400'],subsets:['latin'] })

export const metadata: Metadata = {
  title: 'AI & DS',
  description: 'Contact Page of Members',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

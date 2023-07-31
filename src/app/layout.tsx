import { Roboto_Flex as Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import Header from '../components/Header'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'] })

export const metadata = {
  title: 'Space Manager',
  description: 'Gerenciador de espaços online',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.className} flex h-screen flex-col bg-gray-600`}
      >
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}

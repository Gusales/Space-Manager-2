import { ReactNode } from 'react'

import { Metadata } from 'next'
import { Roboto_Flex as Roboto } from 'next/font/google'

import Header from '@/components/Header'
import { AuthProvider } from '@/contexts/AuthContext'

import './globals.css'

const roboto = Roboto({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Space Manager',
    template: '%s | Space Manager',
  },
  description: 'Gerenciador de espaços online',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <html lang="pt-br">
        <body
          className={`${roboto.className} flex h-screen flex-col bg-gray-600`}
        >
          <Header />
          <main className="flex-1">{children}</main>
        </body>
      </html>
    </AuthProvider>
  )
}

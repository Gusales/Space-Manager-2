import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Lista de Professores',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}

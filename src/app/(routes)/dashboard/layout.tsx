import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Dashboard',
  description:
    'Tela inicial contendo as principais informações para a administração do sistema',
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}

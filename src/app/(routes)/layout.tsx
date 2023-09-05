import { ReactNode } from 'react'

export default function RoutesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full items-center justify-center">{children}</div>
  )
}

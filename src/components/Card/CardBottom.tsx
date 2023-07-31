import { ReactNode } from 'react'

interface CardBottomProps {
  children: ReactNode
}

export default function CardBottom({ children }: CardBottomProps) {
  return (
    <div className="rounded-sm bg-red-500 font-semibold text-zinc-100 transition-all hover:bg-red-600">
      {children}
    </div>
  )
}

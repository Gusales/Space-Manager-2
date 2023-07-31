import { ReactNode } from 'react'

interface CardRootProps {
  children: ReactNode
}

export default function CardRoot({ children }: CardRootProps) {
  return (
    <section className="flex h-[360px] min-w-[220px] flex-col items-center justify-between rounded-2xl bg-zinc-300 px-7 pb-7 pt-5 shadow-sm">
      {children}
    </section>
  )
}

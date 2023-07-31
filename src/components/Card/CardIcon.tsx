import { ElementType } from 'react'

interface CardIconProps {
  icon: ElementType
}

export default function CardIcon({ icon: Icon }: CardIconProps) {
  return <Icon className="h-9 w-9 text-zinc-800 " />
}

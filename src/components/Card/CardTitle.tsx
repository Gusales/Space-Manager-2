interface CardTitleProps {
  title: string
  qntd: number
}

export default function CardTitle({ title, qntd }: CardTitleProps) {
  return (
    <div className="flex max-w-[100px] flex-col items-center justify-center gap-1 text-center leading-relaxed">
      <h3 className="text-xl font-semibold leading-relaxed text-zinc-800">
        {title}
      </h3>
      <span className="text-2xl font-bold leading-relaxed text-zinc-800">
        {qntd}
      </span>
    </div>
  )
}

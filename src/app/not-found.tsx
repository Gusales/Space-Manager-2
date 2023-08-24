import { Error404 } from '@/components/not-foundComponents/Error'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-56">
      <section className="flex max-w-xs flex-col gap-6">
        <h2 className="text-4xl leading-10 text-zinc-50">
          Ops, esta página não foi encontrada
        </h2>
        <p className="text-xl font-light leading-7 text-zinc-50">
          Parece que você se perdeu... Tente recarregar a página ou acessar a
          Página de Login.
        </p>
        <Link
          href="/"
          className="mt-8 max-w-fit rounded-sm bg-red-400 px-2 py-1 font-bold text-zinc-50 transition-colors hover:bg-red-500 hover:underline"
        >
          Ir Para a Página de Login
        </Link>
      </section>
      <section>
        <Error404 />
      </section>
    </div>
  )
}

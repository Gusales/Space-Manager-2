import Link from 'next/link'

import { Card } from '@/components/Card'

import { Users, Castle, Clock1, CalendarCheck, Users2 } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 md:gap-4">
      <div>
        <section className="flex flex-col items-center justify-center gap-2 py-3 md:flex-row md:flex-wrap md:gap-4">
          <Card.Root>
            <Card.Title title="Professores:" qntd={10} />
            <Card.Icon icon={Users} />
            <Card.Bottom>
              <Link
                href="/pages/admin/profs"
                className="block px-2 py-1 hover:underline"
              >
                Adicionar Professor
              </Link>
            </Card.Bottom>
          </Card.Root>

          <Card.Root>
            <Card.Title title="Espaços:" qntd={10} />
            <Card.Icon icon={Castle} />
            <Card.Bottom>
              <Link
                href="/pages/admin/profs"
                className="block px-2 py-1 hover:underline"
              >
                Adicionar Espaço
              </Link>
            </Card.Bottom>
          </Card.Root>

          <Card.Root>
            <Card.Title title="Horários:" qntd={10} />
            <Card.Icon icon={Clock1} />
            <Card.Bottom>
              <Link
                href="/pages/admin/profs"
                className="block px-2 py-1 hover:underline"
              >
                Adicionar Horário
              </Link>
            </Card.Bottom>
          </Card.Root>

          <Card.Root>
            <Card.Title title="Turmas:" qntd={10} />
            <Card.Icon icon={Users2} />
            <Card.Bottom>
              <Link
                href="/pages/admin/profs"
                className="block px-2 py-1 hover:underline"
              >
                Adicionar Turmas
              </Link>
            </Card.Bottom>
          </Card.Root>

          <Card.Root>
            <Card.Title title="Reservas Hoje:" qntd={10} />
            <Card.Icon icon={CalendarCheck} />
            <Card.Bottom>
              <Link
                href="/pages/admin/profs"
                className="block px-2 py-1 hover:underline"
              >
                Ver reservas
              </Link>
            </Card.Bottom>
          </Card.Root>
        </section>
      </div>
    </div>
  )
}

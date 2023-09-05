'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'

import { Users, Castle, Clock1, CalendarCheck, Users2 } from 'lucide-react'

import { Card } from '@/components/Card'
import api from '@/lib/api'

interface AdminInfo {
  users: number
}

export default function Dashboard() {
  const [adminInfo, setAdminInfo] = useState<AdminInfo>()

  async function getAdminInfo() {
    await api
      .get('/admin')
      .then((response) => response.data)
      .then((data) => setAdminInfo(data))
  }
  useEffect(() => {
    getAdminInfo()
  }, [])

  return (
    <div className="flex flex-col justify-start gap-2">
      <h2 className="text-2xl font-bold text-zinc-50 ">Dashboard Admin</h2>
      <section className="flex flex-col items-center justify-center gap-2 py-3 md:flex-row md:flex-wrap md:gap-4">
        <Card.Root>
          <Card.Title
            title="Usuários cadastrados:"
            qntd={adminInfo?.users ? adminInfo.users : 0}
          />
          <Card.Icon icon={Users} />
          <Card.Bottom>
            <Link
              href="/admin/profs"
              className="block px-2 py-1 hover:underline"
            >
              Adicionar usuário
            </Link>
          </Card.Bottom>
        </Card.Root>

        <Card.Root>
          <Card.Title title="Total de Espaços:" qntd={10} />
          <Card.Icon icon={Castle} />
          <Card.Bottom>
            <Link
              href="/admin/profs"
              className="block px-2 py-1 hover:underline"
            >
              Adicionar Espaço
            </Link>
          </Card.Bottom>
        </Card.Root>

        <Card.Root>
          <Card.Title title="Total de Horários:" qntd={10} />
          <Card.Icon icon={Clock1} />
          <Card.Bottom>
            <Link
              href="/admin/profs"
              className="block px-2 py-1 hover:underline"
            >
              Adicionar Horário
            </Link>
          </Card.Bottom>
        </Card.Root>

        <Card.Root>
          <Card.Title title="Total de Turmas:" qntd={10} />
          <Card.Icon icon={Users2} />
          <Card.Bottom>
            <Link
              href="/admin/profs"
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
              href="/admin/profs"
              className="block px-2 py-1 hover:underline"
            >
              Ver reservas
            </Link>
          </Card.Bottom>
        </Card.Root>
      </section>
    </div>
  )
}

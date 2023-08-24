import ProfsList from '@/components/ProfsList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lista de Professores',
}

export default function Profs() {
  return (
    <div className="flex h-full flex-1 items-center justify-center p-5">
      <div className="xs:w-[280px] w-[600px]">
        <ProfsList />
      </div>
    </div>
  )
}

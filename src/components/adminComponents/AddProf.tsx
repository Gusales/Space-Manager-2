import { UserPlus2 } from 'lucide-react'

import { Skeleton } from '../ui/skeleton'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import AddProfForm from './AddProfForm'

interface AddProfProps {
  isLoading?: boolean
}

export default function AddProf({ isLoading = false }: AddProfProps) {
  return (
    (isLoading && (
      <Skeleton className="h-[32px] w-[160px] rounded-full bg-green-500 px-2 py-1 text-sm font-semibold text-zinc-950 transition-all hover:bg-green-400" />
    )) || (
      <Dialog>
        <DialogTrigger asChild>
          <button className="flex items-center gap-1 rounded-full bg-green-500 px-2 py-1 text-sm font-semibold text-zinc-950 transition-all hover:bg-green-400">
            <UserPlus2 color="#000" /> Adicionar Usuário
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Usuário</DialogTitle>
          </DialogHeader>
          <AddProfForm />
        </DialogContent>
      </Dialog>
    )
  )
}

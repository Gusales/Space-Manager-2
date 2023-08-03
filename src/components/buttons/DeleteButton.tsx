'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import { ComponentProps } from 'react'
import { Trash2 } from 'lucide-react'
import { getFirstName } from '@/lib/formatName'

type DeleteButtonProps = ComponentProps<'button'> & {
  userId: string
  user: string
  isActive: boolean
}

export function DeleteButton({
  userId,
  user,
  isActive,
  ...props
}: DeleteButtonProps) {
  const desactiveMsg = `Deseja desativar ${getFirstName(
    user,
  )}? Após a desativação, o usuário terá seu acesso revogado e não poderá realizar reservas. Esse processo pode ser revertido.`

  const deleteMsg = `Deseja excluir definitivamente ${getFirstName(
    user,
  )}? Com a exclusão, o usuário perderá seu acesso ao sistema e suas reservas serão excluidas. Esse processo não pode ser revertido.`

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button {...props}>
          <Trash2 size={20} className="transition-colors hover:text-red-500" />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {(isActive && `Desativar ${getFirstName(user)}`) ||
              `Deletar ${getFirstName(user)}`}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {(isActive && `${desactiveMsg}`) || `${deleteMsg}`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500 font-bold hover:bg-red-600">
            {(isActive && 'Desativar') || 'Deletar'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

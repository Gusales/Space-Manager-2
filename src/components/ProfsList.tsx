'use client'
import { useState, useEffect } from 'react'

import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
} from '@/components/ui/command'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import api from '@/lib/api'
import { UserType } from '@/types/UserType'
import { getFirstName } from '@/lib/formatName'

import { Skeleton } from './ui/skeleton'
import AddProf from './adminComponents/AddProf'
import { PenLine } from 'lucide-react'
import { DeleteButton } from './buttons/DeleteButton'
import { UpdateUserDialog } from './adminComponents/UpdateUserDialog'

export default function ProfsList() {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState<UserType[] | []>([])

  useEffect(() => {
    api
      .get('/users')
      .then((response) => response.data)
      .then((data) => {
        setIsLoading(false)
        setUsers(data)
      })
  }, [])

  return (
    <div className="flex flex-col items-end gap-2">
      <AddProf isLoading={isLoading} />
      <Command>
        <CommandInput placeholder="Pesquise por um professor" />
        <CommandList>
          <CommandGroup className="max-h-[750px]" heading="Professores">
            {(isLoading && (
              <div className="grid gap-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            )) ||
              users.map((user) => {
                return (
                  <CommandItem
                    key={user.id}
                    className="flex items-center gap-2"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="flex w-full items-center justify-between">
                          {user.name}
                          <PenLine
                            size={20}
                            className="transition-colors hover:text-green-500"
                          />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>
                            Editar perfil de {getFirstName(user.name)}
                          </DialogTitle>
                          <DialogDescription>
                            Faça alterações no perfil desse usuário aqui
                          </DialogDescription>
                        </DialogHeader>
                        <UpdateUserDialog user={user} />
                      </DialogContent>
                    </Dialog>

                    <DeleteButton
                      userId={user.id}
                      isActive={user.isActive}
                      user={user.name}
                    />
                  </CommandItem>
                )
              })}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}

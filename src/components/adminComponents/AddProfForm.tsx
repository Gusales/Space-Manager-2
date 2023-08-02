'use client'

import { ComponentProps, useState } from 'react'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { randomPassoword } from '@/lib/randomPassword'

type AddProfFormProps = ComponentProps<'form'>

export default function AddProfForm({ ...props }: AddProfFormProps) {
  const [randomPass, setRandomPass] = useState('')
  return (
    <form {...props} className="relative flex h-full w-full flex-col gap-2">
      <Input name="name" placeholder="Nome" type="text" />
      <Input name="email" placeholder="Email" type="email" />
      <div>
        <Input
          name="password"
          placeholder="Senha"
          type="password"
          value={randomPass}
          onChange={(e) => setRandomPass(e.target.value)}
        />
        <button
          type="button"
          className="px-1 text-sm text-zinc-600 hover:underline"
          onClick={() => setRandomPass(randomPassoword())}
        >
          Gerar senha automática
        </button>
      </div>
      <Select name="actype">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione o tipo de usuário" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="admin">{'Administrador(a)'}</SelectItem>
            <SelectItem value="prof">{'Professor(a)'}</SelectItem>
            <SelectItem value="coord">{'Coordenador(a)'}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex w-full items-center justify-end">
        <button className="max-w-fit rounded-full bg-green-500 px-2.5 py-1 text-sm font-semibold text-zinc-950 transition-all hover:bg-green-400">
          Salvar
        </button>
      </div>
    </form>
  )
}

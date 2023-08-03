import { UserType } from '@/types/UserType'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@radix-ui/react-select'
import { Input } from '../ui/input'

type UpdateUserDialogProps = {
  user: UserType
}

export function UpdateUserDialog({ user }: UpdateUserDialogProps) {
  return (
    <form className="relative flex h-full w-full flex-col gap-2">
      <Input name="name" placeholder="Nome" type="text" value={user.name} />
      <Input name="email" placeholder="Email" type="email" value={user.email} />
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

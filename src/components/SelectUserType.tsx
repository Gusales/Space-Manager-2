import { ComponentProps } from 'react'

import { UserActype } from '@/types/UserType'

type SelectUserTypeProps = ComponentProps<'select'>

export function SelectUserType({ ...props }: SelectUserTypeProps) {
  return (
    <select
      {...props}
      className="flex h-10 w-full cursor-pointer appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <option value={UserActype.ADMIN}>{'Administrador(a)'}</option>
      <option value={UserActype.PROF}>{'Professor(a)'}</option>
      <option value={UserActype.COORD}>{'Coordenador(a)'}</option>
    </select>
  )
}

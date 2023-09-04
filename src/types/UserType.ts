/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction } from 'react'
import { z } from 'zod'

export enum UserActype {
  ADMIN = 'ADMIN',
  COORD = 'COORD',
  PROF = 'PROF',
}

export type UserType = {
  actype: UserActype
  email: string
  id: string
  isActive: boolean
  name: string
}

export const createUserSchema = z.object({
  email: z.string().email().nonempty('Formato de email inválido'),
  name: z.string(),
  password: z
    .string()
    .min(6, 'A senha do usuário deve ter, no mínimo, 6 caracteres')
    .nonempty('Campo de senha obrigatório'),
  actype: z.enum(['ADMIN', 'COORD', 'PROF'], {
    required_error: 'Escolha o tipo desse usuário!',
  }),
})

export type CreateUserData = z.infer<typeof createUserSchema>

export type UserContextType = {
  users: UserType[]
  setUsers: Dispatch<SetStateAction<UserType[] | []>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

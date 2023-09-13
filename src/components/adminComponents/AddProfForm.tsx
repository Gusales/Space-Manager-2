'use client'

import { useState } from 'react'
import { Input } from '../ui/input'

import { generateRandomPassoword } from '@/lib/randomPassword'

import { Controller, useForm } from 'react-hook-form'

import {
  createUserSchema,
  CreateUserData,
  UserActype,
  UserType,
} from '@/types/UserType'

import { errorSchema } from '@/types/ErrorsTypes'

import { zodResolver } from '@hookform/resolvers/zod'

import { Label } from '../ui/label'
import api from '@/lib/api'
import { useUser } from '@/hooks/useUser'
import { AxiosError } from 'axios'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '../ui/select'
export default function AddProfForm() {
  const [err, setErr] = useState('')
  const { users, setUsers } = useUser()

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
  })

  async function createNewUser(data: CreateUserData) {
    console.log(data)
    await api
      .post('/users', {
        ...data,
        password: generateRandomPassoword(),
      })
      .then((response) => response.data)
      .then((data: UserType) => {
        const newState = users
        newState.push(data)

        return setUsers(newState)
      })
      .catch((error: AxiosError) => {
        if (error.code === '409') {
          const errorBody = errorSchema.parse(error.response)
          setErr(errorBody.data.mensage)
        }
      })
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(createNewUser)}
      className="relative flex h-full w-full flex-col gap-2"
    >
      {/* CASO HAJA UM ERRO NO SISTEMA */}
      {err && <span className="text-base font-bold text-red-600">{err}</span>}

      {/* Campo de Nome do usuário */}
      <div>
        <Label htmlFor="email">Nome:</Label>
        <Input
          {...register('name')}
          placeholder="Ex.: João da Silva..."
          id="name"
          type="text"
        />
      </div>

      {errors.name && (
        <span className="text-base font-bold text-red-600">
          {errors.name.message}
        </span>
      )}

      {/* Campo de Email */}

      <div>
        <Label htmlFor="email">Enderço de Email</Label>

        <Input
          {...register('email')}
          placeholder="examplo@exemplo.com"
          id="email"
          type="email"
        />
      </div>
      {errors.email && (
        <span className="text-base font-bold text-red-600">
          {errors.email.message}
        </span>
      )}

      {/* Campo de Actype */}

      <div>
        <Label htmlFor="actype">Tipo do usuário:</Label>

        <Controller
          control={control}
          name="actype"
          render={({ field }) => {
            return (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o tipo de usuário" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value={UserActype.ADMIN}>
                      {'Administrador(a)'}
                    </SelectItem>
                    <SelectItem value={UserActype.PROF}>
                      {'Professor(a)'}
                    </SelectItem>
                    <SelectItem value={UserActype.COORD}>
                      {'Coordenador(a)'}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )
          }}
        />
      </div>

      {errors.actype && (
        <span className="text-base font-bold text-red-600">
          {errors.actype.message}
        </span>
      )}

      <div className="flex w-full items-center justify-end">
        <button
          type="submit"
          className="max-w-fit rounded-full bg-green-500 px-2.5 py-1 text-sm font-semibold text-zinc-950 transition-all hover:bg-green-400"
        >
          Salvar
        </button>
      </div>
    </form>
  )
}

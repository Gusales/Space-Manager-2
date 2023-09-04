'use client'

import { useState } from 'react'
import { Input } from '../ui/input'

import { randomPassoword } from '@/lib/randomPassword'

import { useForm } from 'react-hook-form'

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

export default function AddProfForm() {
  const [randomPass, setRandomPass] = useState('')
  const [err, setErr] = useState('')
  const { users, setUsers } = useUser()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
  })

  async function createNewUser(data: CreateUserData) {
    await api
      .post('/users', data)
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

      {/* Campo de Senha */}
      <div>
        <Label htmlFor="password">Senha:</Label>
        <div>
          <Input
            {...register('password')}
            placeholder="123456"
            type="password"
            id="password"
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
      </div>
      {errors.password && (
        <span className="text-base font-bold text-red-600">
          {errors.password.message}
        </span>
      )}

      {/* Campo de Actype */}

      <div>
        <Label htmlFor="actype">Tipo do usuário:</Label>

        <select
          {...register('actype')}
          id="actype"
          className="flex h-10 w-full cursor-pointer appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value={UserActype.ADMIN}>{'Administrador(a)'}</option>
          <option value={UserActype.PROF}>{'Professor(a)'}</option>
          <option value={UserActype.COORD}>{'Coordenador(a)'}</option>
        </select>
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

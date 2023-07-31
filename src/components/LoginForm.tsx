'use client'

import { useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { useForm } from 'react-hook-form'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { api } from '@/lib/api'
import { AxiosError } from 'axios'
import { createCookie } from '@/lib/jsCookie'
import Input from './Input'

const loginUserSchema = z.object({
  email: z
    .string()
    .nonempty('O campo Email é obrigatório')
    .email('Formato de email inválido'),
  password: z.string().nonempty('O campo Senha é obrigatório'),
})

type LoginUserData = z.infer<typeof loginUserSchema>

type ResponseApi = {
  data: {
    mensage: string
  }
}

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserData>({
    resolver: zodResolver(loginUserSchema),
  })

  const router = useRouter()

  async function loginUser(data: LoginUserData) {
    setIsLoading(true)
    const loginInfo = JSON.stringify(data, null, 2)
    console.log(process.env.NEXT_PUBLIC_API_URL)

    await api
      .post('/login', loginInfo, {
        headers: {
          'Content-Type': 'Application/json',
        },
      })
      .then((response) => response.data)
      .then((data) => {
        const { token } = data
        const cookieExpiresInSeconds = 60 * 60 * 24 * 30 // 1 Mês

        createCookie('token', token, {
          expires: cookieExpiresInSeconds,
        })
        setIsLoading(false)

        // REDIRECIONAR USUÁRIO DE ACORDO COM O TIPO DELE!!!!!!!!
        // ADMIN
        router.push('/pages/dashboard')
        // PROFESSOR router.push('/calendar')
      })
      .catch((error: AxiosError) => {
        setIsLoading(false)
        const { data } = error.response as ResponseApi

        console.log(data.mensage)
      })
  }

  return (
    <form
      onSubmit={handleSubmit(loginUser)}
      className="flex w-[400px] flex-col items-center space-y-4 rounded-xl bg-zinc-100 px-8 py-10 max-md:w-[300px]"
    >
      <h1 className="text-2xl font-bold text-red-500">Login</h1>

      {/* INPUT DE EMAIL */}

      <Input
        labelText="Email: "
        title="email"
        type="email"
        {...register('email')}
      />

      {errors.email && (
        <span className="text-base font-bold text-red-600">
          {errors.email.message}
        </span>
      )}

      {/* INPUT DE SENHA */}

      <Input
        labelText="Senha: "
        title="password"
        type="password"
        {...register('password')}
      />

      {errors.password && (
        <span className="text-base font-bold text-red-600">
          {errors.password.message}
        </span>
      )}

      <Link
        href="#"
        className="w-full text-left text-sm text-gray-400 underline"
      >
        Esqueceu a senha?
      </Link>
      <button
        type="submit"
        disabled={isLoading}
        className="mt-4 flex h-12 w-3/4 items-center justify-center gap-2 rounded-sm bg-red-500 text-center font-bold text-zinc-200 hover:bg-red-400 disabled:cursor-wait disabled:bg-red-400"
      >
        {isLoading ? <PulseLoader color="#ffffff" /> : 'Entrar'}
      </button>
    </form>
  )
}

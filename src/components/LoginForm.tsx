'use client'

import { useContext, useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { useForm } from 'react-hook-form'

import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Eye, EyeOff } from 'lucide-react'

import Input from './Input'
import { AuthContext } from '@/contexts/AuthContext'

const loginUserSchema = z.object({
  email: z
    .string()
    .nonempty('O campo Email é obrigatório')
    .email('Formato de email inválido'),
  password: z.string().nonempty('O campo Senha é obrigatório'),
})

type LoginUserData = z.infer<typeof loginUserSchema>

export default function LoginForm() {
  const [err, setErr] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { signIn } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserData>({
    resolver: zodResolver(loginUserSchema),
  })

  async function loginUser(data: LoginUserData) {
    setIsLoading(true)
    setErr('')

    try {
      await signIn(data)
    } catch (error) {}
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

      <div className="relative w-full">
        <Input
          labelText="Senha: "
          title="password"
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
        />
        <button
          type="button"
          className="absolute right-0 top-0 -translate-x-2 translate-y-2"
          onClick={() => setShowPassword((state) => !state)}
        >
          {showPassword ? (
            <Eye size={24} className="text-gray-600" />
          ) : (
            <EyeOff size={24} className="text-gray-600" />
          )}
        </button>
      </div>

      {errors.password && (
        <span className="text-base font-bold text-red-600">
          {errors.password.message}
        </span>
      )}

      {err && <span className="text-base font-bold text-red-600">{err}</span>}

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

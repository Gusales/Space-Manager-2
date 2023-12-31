/* eslint-disable no-unused-vars */
'use client'

import { ReactNode, createContext, useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

// import { AxiosError } from 'axios'
import decode from 'jwt-decode'

import { createCookie, getCookie } from '@/lib/jsCookie'
import api from '@/lib/api'
import { UserActype } from '@/types/UserType'

interface LoginProps {
  email: string
  password: string
}

type UserType = {
  sub: string
  name: string
  email: string
  actype: UserActype
}

interface AuthContextProps {
  isAuth: boolean
  user: UserType | null
  signIn: (data: LoginProps) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserType | null>(null)
  const router = useRouter()
  const isAuth = false

  useEffect(() => {
    const token = getCookie('sm-token')

    if (token) {
      const userInfo: UserType = decode(token)
      setUser(userInfo)
    }
  }, [])

  async function signIn({ email, password }: LoginProps) {
    await api
      .post(
        '/login',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'Application/json',
          },
        },
      )
      .then((response) => response.data)
      .then((data) => {
        const { token } = data

        api.defaults.headers.Authorizations = `Bearer ${token}`

        const cookieExpiresInSeconds = 60 * 60 * 24 * 30 // 1 Mês
        const options = {
          expires: cookieExpiresInSeconds,
        }
        createCookie('sm-token', token, options)

        const userInfo: UserType = decode(token)
        setUser(userInfo)
        console.log(userInfo.actype)
        console.log(UserActype.ADMIN)

        if (userInfo.actype === UserActype.ADMIN) {
          router.push('/dashboard')
        } else {
          router.push('/calendar')
        }
      })
  }

  return (
    <AuthContext.Provider value={{ isAuth, signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}

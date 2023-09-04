'use client'

import { ReactNode, createContext, useEffect, useState } from 'react'

import { UserContextType, UserType } from '@/types/UserType'
import api from '@/lib/api'

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<UserType[] | []>([])
  const [isLoading, setIsLoading] = useState(true)

  const getUsers = async () => {
    await api
      .get('/users')
      .then((response) => response.data)
      .then((data) => {
        setUsers(data)
      })
  }

  useEffect(() => {
    getUsers()
    setIsLoading(false)
  }, [users])

  return (
    <UserContext.Provider value={{ users, setUsers, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  )
}

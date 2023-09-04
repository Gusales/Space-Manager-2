import { UserContext } from '@/contexts/UsersContext'
import { useContext } from 'react'

export function useUser() {
  return useContext(UserContext)
}

import * as Auth from '@/auth/auth-provider'
import { selectUser, setUser } from '@/auth/auth.slice'
import { AuthForm, User } from '@/types'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useAuth = () => {
  const dispatch: (...args: any[]) => Promise<User> = useDispatch()
  const user = useSelector(selectUser)

  const login = useCallback(
    async (form: AuthForm) => {
      const res = await Auth.login(form)
      if (res.code === 0) {
        dispatch(setUser(res.data))
      }
      return res
    },
    [dispatch]
  )
  const register = useCallback(
    (form: AuthForm) => {
      const res = Auth.register(form)
      return res
    },
    [dispatch]
  )
  const logout = useCallback(() => {
    Auth.logout()
    dispatch(setUser(null))
  }, [dispatch])
  return {
    user,
    login,
    register,
    logout
  }
}

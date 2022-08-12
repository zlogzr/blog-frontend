// 在真实环境中，如果使用firebase这种第三方auth服务的话，本文件不需要开发者开发
import { AuthForm, User } from '@/types'
import { post } from '@/utils/request'

import { setUser } from './auth.slice'

const DefaultStorageType = 'localStorage'
const localStorageKey = '__auth_provider_user__'

export const getAuthUser = () => window[DefaultStorageType].getItem(localStorageKey)

export const setAuthUser = ({ user }: { user: User }) => {
  window[DefaultStorageType].setItem(localStorageKey, user.toString())
  return user
}

export const login = async (data: AuthForm) => {
  const res: any = await post('/api/user/login', data)
  if (res.code === 0) {
    setAuthUser(res.data)
    setUser(res.data)
  }
  return res
}

export const register = async (data: AuthForm) => {
  const res: any = await post('/api/user/register', data)
  return res
}

export const logout = async () => {
  window[DefaultStorageType].removeItem(localStorageKey)
  // setAuthUser(null)
}

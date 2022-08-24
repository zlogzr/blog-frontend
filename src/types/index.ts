export interface User {
  id: string
  username: string
  realname: string
  role: number
  createtime: number
}

export interface AuthForm {
  username: string
  password: string
}

export interface BackResult {
  code?: number
  msg?: string
  data?: any
}

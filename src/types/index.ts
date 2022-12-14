export interface User {
  id?: string
  username?: string
  password?: string
  realname?: string
  role?: number
  createtime?: number
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

export interface IBlog {
  id: number
  title: string
  content: string
  author: string
  createtime: string
}

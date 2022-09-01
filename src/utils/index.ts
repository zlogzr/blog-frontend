import { BackResult } from '@/types'
import { message } from 'antd'

export const resetRoute = () => (window.location.href = window.location.origin)

export const isVoid = (value: unknown) => value === undefined || value === null || value === ''
// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object?: { [key: string]: unknown }) => {
  if (!object) {
    return {}
  }
  const result = { ...object }
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isVoid(value)) {
      delete result[key]
    }
  })
  return result
}

// 为false可取消成功或失败的提示
interface handleBackResultOptions {
  successTip?: boolean
  failTip?: boolean
}

export const handleBackResult = (res: BackResult, options?: handleBackResultOptions) => {
  if (res.code === -1) {
    if (options?.failTip !== false) {
      message.destroy()
      message.error(res.msg)
    }
    return false
  }
  if (res.code === 0) {
    if (options?.successTip !== false) {
      message.destroy()
      message.success(res.msg)
    }
    return true
  }
}

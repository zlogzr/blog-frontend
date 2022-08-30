import { cleanObject } from '@/utils'
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom'

/**
 * @description 返回页面url中，指定键的参数值
 */
export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams] = useSearchParams()
  return keys.reduce(
    (prev, key) => ({ ...prev, [key]: searchParams.get(key) || '' }),
    {} as { [key in K]: string }
  )
}

/**
 * @description 重载setSearchParam使其包含已有的search
 */
export const useSetUrlSearchParam = () => {
  const [searchParams, setSearchParam] = useSearchParams()
  return (params: { [key in string]: unknown }) => {
    const o = cleanObject({
      ...Object.fromEntries(searchParams),
      ...params
    }) as URLSearchParamsInit
    return setSearchParam(o)
  }
}

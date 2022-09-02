/*
 * @Author: zlogzr
 * @Date: 2022-09-02 17:08
 * @LastEditors: zlogzr
 * @LastEditTime: 2022-09-02 17:54
 * @FilePath: \blog-node-mysql-expressd:\Desktop\blog-frontend\src\pages\Manage\BlogManage\hook\useBlogSearchParams.ts
 * @Description:
 */
import { useState } from 'react'

interface IBlogParams {
  keyword?: string
}

export const useBlogSearchParams = () => {
  const [params, setParams] = useState<IBlogParams>({
    keyword: undefined
  })
  return [params, setParams] as const
}

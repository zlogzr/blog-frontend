/*
 * @Author: zlogzr
 * @Date: 2022-08-30 11:09
 * @LastEditors: zlogzr
 * @LastEditTime: 2022-09-02 17:55
 * @FilePath: \blog-node-mysql-expressd:\Desktop\blog-frontend\src\pages\Manage\BlogManage\hook\api.ts
 * @Description: 博客管理api
 */
import { QueryKey, useMutation, useQuery, useQueryClient } from 'react-query'

import { BackResult, IBlog } from '@/types'
import { cleanObject } from '@/utils'
import { get, post } from '@/utils/request'

// useQuery 第三个参数配置
const useConfig = (queryKey: QueryKey) => {
  const queryClient = useQueryClient()
  return {
    onSuccess: (res: BackResult) => {
      if (res.code === 0) queryClient.invalidateQueries(queryKey)
    }
  }
}

export const useBlogs = (params: { keyword?: string }) =>
  useQuery(['blogs', cleanObject(params)], () => get('/api/blog/list', cleanObject(params)))

export const useBlog = (id?: number) =>
  useQuery(['blog', { id }], () => get(`/api/blog/detail?id=${id}`), {
    enabled: Boolean(id)
  })

export const useEditBlog = () =>
  useMutation(
    (params: Partial<IBlog>) => post(`/api/blog/update?id=${params.id}`, params),
    useConfig('blogs')
  )

export const useAddBlog = () =>
  useMutation((params: Partial<IBlog>) => post('/api/blog/new', params), useConfig('blogs'))

export const useDelBlog = () =>
  useMutation((params: Partial<IBlog>) => post(`/api/blog/del?id=${params.id}`), useConfig('blogs'))

export const useBatDelBlog = () =>
  useMutation((params: { ids: number[] }) => post(`/api/blog/batDel`, params), useConfig('blogs'))

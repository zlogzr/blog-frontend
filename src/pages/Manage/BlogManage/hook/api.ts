import { IBlog } from '@/types'
import { cleanObject } from '@/utils'
import { del, get, post } from '@/utils/request'
import { useMutation, useQuery } from 'react-query'

export const useBlogs = (param?: Partial<IBlog>) =>
  useQuery(['blogs', cleanObject(param)], () => get('/api/blog/list', { data: param }))

export const useBlog = (id?: number) =>
  useQuery(['blog', { id }], () => get(`/api/blog/detail?id=${id}`), {
    enabled: Boolean(id)
  })

export const useEditBlog = () =>
  useMutation((params: Partial<IBlog>) => post(`/api/blog/update?id=${params.id}`, params))

export const useAddBlog = () =>
  useMutation((params: Partial<IBlog>) => post('/api/blog/new', params))

export const useDelBlog = () =>
  useMutation((params: Partial<IBlog>) => del(`/api/blog/del?id=${params.id}`))

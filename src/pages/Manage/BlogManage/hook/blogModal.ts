import { useSetUrlSearchParam, useUrlQueryParam } from '@/hooks/useUrlQueryParam'

import { useBlog } from './api'

export const useBlogModal = () => {
  const { blogCreate } = useUrlQueryParam(['blogCreate'])
  const { editingBlogId } = useUrlQueryParam(['editingBlogId'])
  const setUrlParams = useSetUrlSearchParam()

  const { data: editingBlog, isLoading } = useBlog(Number(editingBlogId))

  const startAdd = () => setUrlParams({ blogCreate: true })
  const startEdit = (id: number) => setUrlParams({ editingBlogId: id })
  const close = () => setUrlParams({ blogCreate: '', editingBlogId: '' })

  return {
    blogModalOpen: blogCreate === 'true' || Boolean(editingBlogId),
    startAdd,
    startEdit,
    close,
    editingBlog,
    isLoading
  }
}

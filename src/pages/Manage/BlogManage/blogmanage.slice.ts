import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'

interface State {
  selectBlogids: number[]
}

const initialState: State = {
  selectBlogids: []
}

export const blogManageSlice = createSlice({
  name: 'blogManage',
  initialState,
  reducers: {
    setSelectBlogIds(state, action) {
      state.selectBlogids = action.payload
    }
  }
})

const { setSelectBlogIds } = blogManageSlice.actions
const selectBlogIds = (state: RootState) => state.blogManage.selectBlogids

export const useBlogIds = () => {
  const blogIds = useSelector(selectBlogIds)
  const dispatch: (...args: any[]) => Promise<number[]> = useDispatch()
  const setBlogIds = (params: number[]) => dispatch(setSelectBlogIds(params))
  return [blogIds, setBlogIds] as const
}

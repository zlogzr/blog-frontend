import { authSlice } from '@/auth/auth.slice'
import { blogManageSlice } from '@/pages/Manage/BlogManage/blogmanage.slice'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = {
  auth: authSlice.reducer,
  blogManage: blogManageSlice.reducer
}

export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

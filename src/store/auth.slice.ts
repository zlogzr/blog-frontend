import { User } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '.'

interface State {
  user: User | null
}

const initialState: State = {
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    }
  }
})

export const { setUser } = authSlice.actions

export const selectUser = (state: RootState) => state.auth.user

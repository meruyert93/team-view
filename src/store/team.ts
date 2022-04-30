import { createSlice } from '@reduxjs/toolkit'
import { member } from '../data/types'

const initialState = {
  teamMembers: [] as member[]
}

interface actionType {
  type: string, 
  payload: member,
}

export const teamSlice = createSlice({
  name: 'team ',
  initialState,
  reducers: {
    addMember: (state, action: actionType) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const isMemberAlreadyAdded = state.teamMembers.find(member => member.id === action.payload.id)
      if (!isMemberAlreadyAdded) state.teamMembers.push(action.payload)
      else state
    },
    deleteMember: (state, action: actionType) => {
      state.teamMembers = state.teamMembers.filter(member => member.id !== action.payload.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMember, deleteMember } = teamSlice.actions

export default teamSlice.reducer

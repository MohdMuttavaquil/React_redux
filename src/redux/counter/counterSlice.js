import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  passingMarks: 40
}

 const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

    passingMarks: (state) => {
      return state.passingMarks
    }
  },
})

export const { increment, decrement, incrementByAmount, dispatch, passingMarks} = counterSlice.actions

export default counterSlice.reducer
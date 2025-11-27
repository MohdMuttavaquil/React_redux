import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import factReducer from './counter/catfact'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fact: factReducer
  },
})
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter-slice'
import DetailsDogReducer from './slices/details-dog-slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    detailsDog: DetailsDogReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
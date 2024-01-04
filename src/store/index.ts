// Store setup
import { configureStore } from '@reduxjs/toolkit'
import universitiesReducer from '@/slices/universitiesSlice'

const store = configureStore({
  reducer: {
    universities: universitiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store

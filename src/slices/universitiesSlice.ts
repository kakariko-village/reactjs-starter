import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import universityInstance from '@/api/university'
import { UniversityItem } from '@/interfaces'

interface UniversitiesState {
  universities: UniversityItem[]
  loading: boolean
  error: string | null
}

export const fetchUniversities = createAsyncThunk(
  'universities/fetchUniversities',
  async (countryName: string) => {
    const requestUrl = `${import.meta.env.VITE_APP_UNIVERSITY_API}search?country=${countryName}`
    const response = await universityInstance.get(requestUrl)
    return response
  },
)

const initialState: UniversitiesState = {
  universities: [],
  loading: false,
  error: null,
}

export const universitiesSlice = createSlice({
  name: 'universities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUniversities.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(fetchUniversities.fulfilled, (state, action) => {
      state.universities = action.payload.data
      state.loading = false
    })
    builder.addCase(fetchUniversities.rejected, (state, action) => {
      state.loading = false
      console.log(action)
      if (action.error.message) {
        state.error = action.error.message
      }
    })
  },
})

export default universitiesSlice.reducer

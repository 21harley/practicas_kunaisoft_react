import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const ruta = 'http://data.fixer.io/api/latest?access_key=40b2b208a4675116519f20d2bfb1bf98'

export const apiFixer = createAsyncThunk('conversor/listData', () => {
  return axios.get(ruta)
    .then(el => el.data)
    .catch(error => error)
})

const initialState = {
  listData: Object,
  MO: {},
  MA: {}
}

const ConversorSlice = createSlice({
  name: 'History',
  initialState,
  reducers: {
    setConversorMA: (state, action) => {
      state.MA = action.payload.MA
    },
    setConversorMO: (state, action) => {
      state.MO = action.payload.MO
    }
  },
  extraReducers: {
    [apiFixer.fulfilled.type]: (state, action) => {
      state.listData = action.payload
    }
  }
})
// export default  ConversorSlice
export default ConversorSlice.reducer

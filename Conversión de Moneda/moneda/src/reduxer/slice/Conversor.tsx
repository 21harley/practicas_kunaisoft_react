import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const ruta = 'http://data.fixer.io/api/latest?access_key=40b2b208a4675116519f20d2bfb1bf98'

export const apiFixer = createAsyncThunk('conversor/listData', () => {
  return axios.get(ruta)
    .then(el => el.data)
    .catch(error => error)
})

const initialState = {
  listData: Array,
  date: '',
  base: '',
  MO: '',
  NO: 0,
  MA: '',
  NA: 0
}

const ConversorSlice = createSlice({
  name: 'Conversor',
  initialState,
  reducers: {
    setConversorMA: (state, action) => {
      state.MA = action.payload.MA
    },
    setConversorMO: (state, action) => {
      state.MO = action.payload.MO
    },
    setConversorNA: (state, action) => {
      state.NA = action.payload.NA
    },
    setConversorNO: (state, action) => {
      state.NO = action.payload.NO
    }
  },
  extraReducers: {
    [apiFixer.fulfilled.type]: (state, action) => {
      state.listData = action.payload.rates
      state.base = action.payload.base
      state.date = action.payload.date
    }
  }
})
export const { setConversorMA, setConversorMO, setConversorNA, setConversorNO } = ConversorSlice.actions
export default ConversorSlice.reducer

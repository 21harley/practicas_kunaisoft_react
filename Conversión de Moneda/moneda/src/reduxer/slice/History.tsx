import { createSlice } from '@reduxjs/toolkit'
// import { Axios } from 'axios'
interface data{
  date: string,
  MA: string,
  NA: string,
  MO: string,
  NO: string
}

const initialState = {
  listCM: [] as data[]
}

const HistorySlice = createSlice({
  name: 'History',
  initialState,
  reducers: {
    addListCM: (state, action) => {
      const datos = action.payload?.datos
      if (datos) state.listCM.push(datos)
    }
  }
})

export const { addListCM } = HistorySlice.actions
export default HistorySlice.reducer

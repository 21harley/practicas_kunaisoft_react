import { createSlice } from '@reduxjs/toolkit'
// import { Axios } from 'axios'
interface CM{
    MO: Object,
    MA: Object
}

const initialState = {
  listCM: [] as CM[]
}

const HistorySlice = createSlice({
  name: 'History',
  initialState,
  reducers: {
    addListCM: (state, action) => {
      const { datosConve } = action.payload
      state.listCM.push(datosConve)
    }
  }
})
// export default {getLHistoryuser} loinSlice.actions
export default HistorySlice.reducer

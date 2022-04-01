import { createSlice } from '@reduxjs/toolkit'
// import { Axios } from 'axios'
const initialState = {
  MO: Object,
  MA: Object
}

const ConversorSlice = createSlice({
  name: 'History',
  initialState,
  reducers: {
    setConversor: (state, action) => {
      state.MA = action.payload.MA
      state.MO = action.payload.MO
    }
  }
})
// export default {getLConversoruser} loinSlice.actions
export default ConversorSlice.reducer

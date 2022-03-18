
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listaCompras: [],
}

export const comprasSlice=createSlice({
  name:'compras',
  initialState,
  reducers:{
    addLista:(state,action)=>{
      
    }
  }
});

export const {addLista} = comprasSlice.actions;

export default comprasSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listaCompras: [],
}

export const comprasSlice=createSlice({
  name:'compras',
  initialState,
  reducers:{
    addLista(state,action){
      let id = Math.floor(Math.random() * (40000000 - 30000000 + 1)) + 30000000;
      state.listaCompras=[
          ...state.listaCompras,
          {
            carrito: action.payload.carritoComp,
            totalComp: action.payload.total,
            id: id,
            date: new Date().toLocaleDateString(),
          },
        ];
    }
  }
});

export const {addLista} = comprasSlice.actions;

export default comprasSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  carritoComp: [],
  total: 0,
  iniciarCom: false,
  lista: [],
  mostrarLista: false,
  carga:false,
}

export const carritoSlice=createSlice({
  name:'carrito',
  initialState,
  reducers:{
    setCarritoList:(state,action)=>{
      state.lista=action.payload;
      state.carga=!state.carga;
    },
    addCC(state,action){
      let valida = true;
      state.carritoComp.map((el) => {
        if (el.id == state.lista[action.payload.p].id) {
          valida = false;
        }
      });

      if (valida) {
        let aux = { ...state.lista[action.payload.p] };
        aux.shopId = action.payload.cant;
        state.carritoComp=[...state.carritoComp, aux];
      }
    },
    addCant(state,action){
      state.carritoComp.map((el) => {
        if (el.id == state.lista[action.payload.p].id) {
          el.shopId = action.payload.cant;
        }
      });
      state = { ...state, carritoComp: [...state.carritoComp] };

    },
    del(state,action){
      let nuevo = state.carritoComp.filter((el) => {
        if (el.id != state.lista[action.payload.p].id) return el;
      });
      state.carritoComp=[...nuevo];
    },
    sumar(state,action){
      console.log(action.payload);
      let suma = 0;
      state.carritoComp.map((el) => {
        suma += el.dollar * el.shopId;
      });
      state.total = suma;
    },
    mLista(state,action){
      state.mostrarLista=(!state.mostrarLista);
    },
    comp(state,action){
      state.iniciarCom=true;
    },
    compYes(state,action){
      let carComp = [...state.carritoComp];
      let nuevaLista = [...state.lista];

      carComp.map((elm) => {
        nuevaLista = nuevaLista.map((el) => {
          if (el.id == elm.id) {
            let resp = el.shopId - Number(elm.shopId);
            el = { ...el, shopId: resp };
          }
          return el;
        });
      });

      state.carritoComp=[];
      state.total=0;
      state.iniciarCom=false;
      state.mostrarLista=false;
      state.lista=[...nuevaLista];
    }
  }
});

export const {setCarritoList,addCC,addCant,del,sumar,mLista,comp,compYes} = carritoSlice.actions;

export default carritoSlice.reducer;

export const AxiosAllItem=()=>(disptch)=>{
  axios
   .get('http://localhost:5000/products')
   .then((res)=>{
       console.log(res.data)
       disptch(setCarritoList(res.data));
   })
};

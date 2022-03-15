import React,{createContext, useEffect, useReducer } from 'react';
import carritoReducer, { carritoInitialState } from '../reducers/carritoReducer';
import listaCompReducer, { listaCompInitialState } from '../reducers/listaCompReducer';

export const carritoContext = createContext();

export default function CarritoContext({children}){

    const [listaCompra,setListaCompra]=useReducer(carritoReducer,carritoInitialState);
    const [listaTra,setListaTraCompra]=useReducer(listaCompReducer,listaCompInitialState);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>{
          setListaCompra({type:'init',listaCompra,data});

        })
    },[]);

    return <carritoContext.Provider value={{carrito:listaCompra,setListaCompra,listaTra:listaTra,setListaTraCompra}}>
        {children}
    </carritoContext.Provider>

}

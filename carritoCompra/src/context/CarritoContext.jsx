import React,{createContext, useEffect, useReducer, useState} from 'react';
import carritoReducer, { carritoInitialState } from '../reducers/carritoReducer';

export const carritoContext = createContext()

export default function CarritoContext({children}) {
    const [listaCompra,setListaCompra]=useReducer(carritoReducer,carritoInitialState);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>{
          setListaCompra({type:'init',listaCompra,data});

        })
    },[]);

return <carritoContext.Provider value={{carrito:listaCompra,setListaCompra}}>
        {children}
    </carritoContext.Provider>
}

import React,{createContext, useEffect, useReducer, useState} from 'react';
import listaCompReducer, { listaCompInitialState } from '../reducers/listaCompReducer';

export const listaCompContext = createContext()

export default function ListaCompContext({children}) {
    const [listaCompraC,setListaCompraC]=useReducer(listaCompReducer,listaCompInitialState);

return <ListaCompContext.Provider value={{listaCompC:listaCompraC,setListaCompraC}}>
        {children}
    </ListaCompContext.Provider>
}
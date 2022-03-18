import React,{createContext, useReducer } from 'react';
import listaCompReducer, { listaCompInitialState } from '../../reducers/Redux_classic/listaCompReducer';

export const listaCompContext = createContext();

export default function ListaCompContext({children}) {
    const [listaCompraC,setListaCompraC]=useReducer(listaCompReducer,listaCompInitialState);

    return <ListaCompContext.Provider value={{listaCompC:listaCompraC,setListaCompraC}}>
        {children}
    </ListaCompContext.Provider>
}
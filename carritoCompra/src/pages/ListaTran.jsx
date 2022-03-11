import { useContext, useEffect, useState } from 'react';
import { Link} from "react-router-dom";
import { carritoContext } from '../context/CarritoContext';

const listaCompra=()=>{
  const {listaTra,setListaTraCompra,carrito,setListaCompra}=useContext(carritoContext);
  console.log(listaTra,carrito);
    return(
        <>
        <div>Compras</div>
        <div>
          <ul>
            {
              (listaTra.length>0)?
              listaTra.carritoComp.map((el)=>{
                return <li key={el.id} className="h-96 w-full bg-slate-100 flex flex-col justify-center items-center mt-5">
                <div className='grid h-30 items-center justify-center'>
                  <img className='w-20 h-20' src={el.img} alt={el.name} />
                </div>
                <div className="grid h-30 p-5">
                  <h3 className='font-medium'>{el.name}</h3>
                  <p>${el.dollar}</p>
                </div>
                <div className="grid h-16 text-center">
                  <p>Total de productos:{el.shopId}</p>
                  <p>Costo:${el.shopId*el.dollar}</p>
                  <p className='text-emerald-700'>{(el.travel)?("Se hacen envios"):('')}</p>
                </div>
             </li>
              }):<><p>Sin compras</p></>
            }
          </ul>
          {(listaTra.length>0)?
                      <li>
                      Total:{listaTra.total}
                    </li>:<></>}
        </div> 
          <Link to='/home'>Casa</Link>
        </>
    )
}

export default listaCompra;

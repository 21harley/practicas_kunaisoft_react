import { Link} from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import {  useNavigate  } from "react-router-dom";
import { carritoContext } from '../context/CarritoContext';
import './../App.css';
const Checkout=()=>{
  let navigate = useNavigate();
  const {carrito,setListaCompra,listaTra,setListaTraCompra}=useContext(carritoContext);
  let {total,carritoComp}=carrito;

  const acetarCompra=()=>{
    setListaTraCompra({type:'add',carritoComp})
    setListaCompra({type:'comp-yes',carrito,total});
    navigate('/lista_de_compras');
  }
  
  return(
      <>
      <Link to='/home'>
      <button className='w-full justify-center h-10 p-5 flex items-center rounded-sm bg-black hover:bg-green-600 text-white'>
           Volver a Home
      </button>  
      </Link> 
      <div>
        {carritoComp.map((el)=>{
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
                <p>Total a pagar:${el.shopId*el.dollar}</p>
                <p className='text-emerald-700'>{(el.travel)?("Se hacen envios"):('')}</p>
              </div>
           </li>
        })}
      </div>
         {
           (total>0)?
           <div className='bg-black w-full flex flex-col justify-center items-center text-white p-2 mt-5'>
           Total de su compra:$ {total}
           <button onClick={()=>{acetarCompra()}} className='w-full justify-center h-10 p-5 flex items-center rounded-sm bg-black hover:bg-green-600 text-white'>
                Comprar
           </button> 
           </div>

           :<></>
         }
      </>
  )
}

export default Checkout;
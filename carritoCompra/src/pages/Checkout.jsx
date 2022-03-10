import { Link} from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import {  useNavigate  } from "react-router-dom";
import { carritoContext } from '../context/CarritoContext';

const Checkout=()=>{

  const {carrito,setListaCompra}=useContext(carritoContext);
  let {total,carritoComp}=carrito;
  console.log(carritoComp,'hola')

  return(
      <>
      <div>
        {carritoComp.map((el)=>{
  return <li key={el.id} className="h-96 bg-slate-100 grid mt-5">
                    <div className='grid h-30 items-center justify-center'>
                      <img className='w-20 h-20' src={el.img} alt={el.name} />
                    </div>
                    <div className="grid h-30 p-5">
                      <h3 className='font-medium'>{el.name}</h3>
                      <p>${el.dollar}</p>
                    </div>
                    <div className="grid h-16">
                      <p>Total de productos:{el.shopId}</p>
                      <p className='text-emerald-700'>{(el.travel)?("Se hacen envios"):('')}</p>
                    </div>
     </li>

        })}
      </div>
      <Link to='/lista_de_compras'>Comprar</Link> 
      </>
  )
}

export default Checkout;
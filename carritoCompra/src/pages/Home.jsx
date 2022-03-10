import { useContext, useEffect, useState } from 'react';
import {  useNavigate  } from "react-router-dom";
import { carritoContext } from '../context/CarritoContext';
import ShopCar from './../componet/ShopCar';
import cart from './../svg/cart.svg';

const Home=()=>{
    const {carrito,setListaCompra}=useContext(carritoContext);
    
    let {total,lista,carritoComp}=carrito;

    let navigate = useNavigate();
    const bajarCarrito=(p)=>{
       setListaCompra({type:'del',carrito,p});
       setListaCompra({type:'sumar',carrito});
    }
    const agregarCarrito=(p)=>{
        setListaCompra({type:'add',carrito,p});
        setListaCompra({type:'sumar',carrito});
    }
    const comprarLista=()=>{
       if(total>0){
          navigate('/comprar');
       }else{
           alert('No tiene productos en el carrito');
       }
    }

  return(
      <>
        <nav className='sticky top-0'>
            <ul className='flex justify-center items-center bg-black p-2'>
               <p className='mr-5 text-white'>Total:{total}</p>
               <button onClick={()=>{comprarLista()}} className={'text-white flex p-1 item-center w-30'+((carritoComp.length>0)?' rounded hover:bg-green-500':'')}>
                   Comprar
                <div className='flex'>
                    <img src={cart} alt="comprar relative left-10" />
                    {(carritoComp.length>0)?<div className='h-4 w-4 rounded-full bg-red-600 text-white relative right-1 text-xs text-center'>{carritoComp.length}</div>:<></>}
                </div> 
                </button>
            </ul>
        </nav>
      <ShopCar data={(lista!=[])?lista:[]} comprar={agregarCarrito} bajar={bajarCarrito}></ShopCar>
      </>
  )
}

export default Home;

/**
         <nav className='sticky top-0'>
            <ul className='flex justify-center items-center bg-black p-2'>
               <p className='mr-5 text-white'>Total:{total}</p>
               <button onClick={()=>{comprarLista()}} className={'text-white flex p-1 item-center w-30'+((listaCompra.length>0)?' rounded hover:bg-green-500':'')}>
                   Comprar
                <div className='flex'>
                    <img src={cart} alt="comprar relative left-10" />
                    {(listaCompra.length>0)?<div className='h-4 w-4 rounded-full bg-red-600 text-white relative right-1 text-xs text-center'>{listaCompra.length}</div>:<></>}
                </div> 
                </button>
            </ul>
        </nav>
      <ShopCar data={(lista!=[])?lista:[]} comprar={agregarCarrito} bajar={bajarCarrito}></ShopCar>
 */
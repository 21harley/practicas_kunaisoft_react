import { useContext, useEffect, useState } from 'react';
import {  useNavigate  } from "react-router-dom";
import { carritoContext } from '../context/CarritoContext';
import ShopCar from './../componet/ShopCar';
import cart from './../svg/cart.svg';
import hide from './../svg/hide.svg';
import show from './../svg/show.svg';

const Home=()=>{

    const {carrito,setListaCompra}=useContext(carritoContext);
    let {total,lista,carritoComp,mostrarLista}=carrito;

    let navigate = useNavigate();
    const bajarCarrito=(p)=>{
       setListaCompra({type:'del',carrito,p});
       setListaCompra({type:'sumar',carrito});
    }
    const agregarCarrito=(p,cant,type)=>{
        if(type=='add') setListaCompra({type:'add',carrito,p,cant});
        if(type=='agregar') setListaCompra({type:'add-cant',carrito,p,cant});
        setListaCompra({type:'sumar',carrito});
    }
    const comprarLista=()=>{
       if(total>0){
        setListaCompra({type:'comp',carrito});
          navigate('/comprar');
       }else{
           alert('No tiene productos en el carrito');
       }
    }

  return(
      <>
        <nav className='sticky top-0'>
            <ul className='flex justify-center items-center bg-black p-2'>
               <p className='mr-5 text-white'>Total:{total.toFixed(2)}</p>
               <button onClick={()=>{comprarLista()}} className={'text-white flex p-1 item-center w-30'+((carritoComp.length>0)?' rounded hover:bg-green-500':'')}>
                   Comprar
                <div className='flex'>
                    <img src={cart} alt="comprar relative left-10" />
                    {(carritoComp.length>0)?<div className='h-4 w-4 rounded-full bg-red-600 text-white relative right-1 text-xs text-center'>{carritoComp.length}</div>:<></>}
                </div> 
                </button>
                {(total>0)
                ?<button onClick={()=>{setListaCompra({type:'mostrarLista',carrito})}} className='text-white flex '>
                    Informacion Compra <img src={(mostrarLista)?show:hide} alt="img" />
                </button> 
                :<></>   
            }
            </ul>
        </nav>

    {
    ( mostrarLista==true&&total>0)?
    <div className='bg-white-100 grid grid-cols-2 justify-center text-center'>
    <ShopCar data={(lista!=[])?lista:[]} comprar={agregarCarrito} bajar={bajarCarrito}></ShopCar>
    <div className='sticky top-12 bg-slate-100 h-[150px] overflow-auto flex flex-col justify-start items-start p-4'>
        <h1>Lista de Compras</h1><br />
        <ul>
            {(carrito.carritoComp.length>0)?
             carrito.carritoComp.map((el,index)=>{
                 return <li key={el.id}>
                       <ul className='flex flex-col justify-start items-start'>
                           <li>Articulo {index+1}</li>
                           <li>Nombre:{el.name}</li>
                           <li>Cantidad:{el.shopId}</li>
                           <li>Valor valor unitario:${el.dollar}</li>
                       </ul>
                       <br />
                 </li>
             }):<></>}
             <br />
             <h3>
                 Total a pagar:${total}
             </h3>
        </ul>
    </div>
   </div>
   :
   <ShopCar data={(lista!=[])?lista:[]} comprar={agregarCarrito} bajar={bajarCarrito}></ShopCar>
    }
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
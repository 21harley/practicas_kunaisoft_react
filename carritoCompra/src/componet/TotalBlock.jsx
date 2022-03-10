import { useEffect, useState } from 'react';
import ShopCar from './ShopCar';
import cart from './../svg/cart.svg';

const TotalBlock=()=>{
    const [lista,setLista]=useState([]);
    const [listaCompra,setListaCompra]=useState([]);
    const [total,setTotal]=useState(0);
    const [modalAtive,setmodalAtive]=useState(false);
    
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          setLista(data);
        })
    },[]);

   const agregarCarrito=(pos)=>{
       let valida=true;
       listaCompra.map((el)=>{
           if(el.id==lista[pos].id){
               valida=false;
           }
       })
       if(valida){
           setListaCompra([...listaCompra,lista[pos]]);
           sumarTotal([...listaCompra,lista[pos]]);
       } 
   }

   const bajarCarrito=(pos)=>{
    let nuevo=listaCompra.filter((el)=>{
        if(el.id!=lista[pos].id) return el;
    })
    setListaCompra([...nuevo]);
    sumarTotal([...nuevo]); 
   }
   const sumarTotal=(lista)=>{
       let suma=0;
       lista.map((el)=>{
         suma+=el.dollar;
       })
       setTotal(suma);
   }   
  return(
      <>
        <nav>
            <ul className='flex justify-center items-center bg-black p-2'>
               <p className='mr-5 text-white'>Total:{total}</p>
               <button className='text-white hover:text-green-500'>Comprar</button>
               <div className='flex'>
               <img src={cart} alt="comprar relative left-10" />
               {(listaCompra.length>0)?<div className='h-4 w-4 rounded-full bg-red-600 text-white relative right-30 text-xs text-center'>{listaCompra.length}</div>:<></>}
                </div> 
            </ul>
        </nav>
      <ShopCar data={(lista!=[])?lista:[]} comprar={agregarCarrito} bajar={bajarCarrito}></ShopCar>
      </>
  )
}

export default TotalBlock;
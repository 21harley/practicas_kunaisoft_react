import {useContext} from 'react';
import {carritoContext} from '../context/CarritoContext';
import ShopCar from './ShopCar';

const ListaProductos=()=>{

  const {carrito, setListaCompra}=useContext(carritoContext);
  let {total, lista, mostrarLista} = carrito;
  total=total.toFixed(2);

  const bajarCarrito=(p)=>{
       setListaCompra({type:'del',carrito,p});
       setListaCompra({type:'sumar',carrito});
    }
    
    const agregarCarrito=(p,cant,type)=>{
        if(type=='add') setListaCompra({type:'add',carrito,p,cant});
        if(type=='agregar') setListaCompra({type:'add-cant',carrito,p,cant});
        setListaCompra({type:'sumar',carrito});
    }


  return(
      <>
    {
    ( mostrarLista==true&&total>0)?
    <div className='bg-white-100 grid grid-cols-2 justify-center text-center'>
    <ShopCar data={(lista!=[])?lista:[]} comprar={agregarCarrito} bajar={bajarCarrito}></ShopCar>
    <div className='sticky top-12 bg-slate-100 h-[250px] overflow-auto flex flex-col justify-start items-start p-4'>
        <h1 className='ml-10 font-medium'>Lista de Compras</h1><br />
        <ul>
            {(carrito.carritoComp.length>0)?
             carrito.carritoComp.map((el,index)=>{
                 return <li key={el.id}>
                       <ul className='flex flex-col justify-start items-start'>
                           <li>Articulo {index+1}</li>
                           <li className='flex'>Nombre: <p className='font-medium' >{el.name}</p></li>
                           <li>Cantidad:{el.shopId}</li>
                           <li className='flex'>Valor valor unitario: <p className='font-medium' >${(el.dollar).toFixed(2)}</p></li>
                       </ul>
                       <br />
                 </li>
             }):<></>}
             <br />
             <h3 className='flex font-medium'>
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

export default ListaProductos;
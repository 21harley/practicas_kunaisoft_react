import { useState } from 'react';

const ShoItem=({comprar:agregarCarrito,bajar:bajarCarrito,index:pos,elemento:el})=>{
  const [enCarrito,setEnCarrito]=useState(false);

  const entradaCarrito=(pos)=>{
    (!enCarrito)?agregarCarrito(pos):bajarCarrito(pos);
    setEnCarrito(!enCarrito);
  }

  return(
         <li key={el.id} className="h-96 bg-slate-100 grid mt-5">
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
                         <div className="grid h-30">
                         <button className={(!enCarrito)?'bg-black hover:bg-green-600 text-white':'bg-black hover:bg-red-800 text-white'} 
                             onClick={()=>{entradaCarrito(pos)}}>
                             {(!enCarrito)?"Agregar Carrito":"Bajar Carrito"}</button>
                         </div>
          </li>
  )
}

export default ShoItem;
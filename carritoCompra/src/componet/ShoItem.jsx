import { useState,useContext, useEffect } from 'react';
import { carritoContext } from '../context/CarritoContext';

const ShoItem=({comprar:agregarCarrito,bajar:bajarCarrito,index:pos,elemento:el})=>{

  const {carrito}=useContext(carritoContext);
  let {carritoComp}=carrito;

  const [enCarrito,setEnCarrito]=useState(false);
  const [totalItem,setTotalItem]=useState(1);

  useEffect(()=>{
    if(carritoComp.length>0){
      carritoComp.map((elm)=>{
        if(elm.id==el.id){
          setEnCarrito(!enCarrito);
          setTotalItem(elm.shopId);
        }
      })
    }
  },[])
  
  const entradaCarrito=(pos,cant)=>{
    (!enCarrito)?agregarCarrito(pos,cant,'add'):bajarCarrito(pos);
    setEnCarrito(!enCarrito);
  }

  return(
    <li key={el.id} className="h-[380px] w-[380px] bg-slate-100 grid mt-5">
      <div className='grid h-[100px] items-center justify-center'>
        <img className='w-20 h-20' src={el.img} alt={el.name} />
      </div>
      <div className="grid h-[100px] p-2">
        <h3 className='font-medium'>{el.name}</h3>
        <p>${el.dollar}</p>
      </div>
      <div className="flex flex-col items-center justify-center h-[100px]">
        <p>Total de productos:{el.shopId}</p>
        <div className='flex'>
          <p>Cantidad a Comprar:</p>
          <input type="number" name="total-item" 
              className='w-20' value={totalItem} 
              onChange={(e) => {
                if(Number(e.target.value)>el.shopId){
                  e.target.value=el.shopId;
                }else if(1>Number(e.target.value)){
                  e.target.value=1;
                }
                setTotalItem(Number(e.target.value));
                if(enCarrito){
                  agregarCarrito(pos,Number(e.target.value),'agregar');
                }
              }}
            />
        </div>
        <p className='text-emerald-700'>{(el.travel)?("Se hacen envios"):('')}</p>
      </div>
      <div className="grid h-[80px]">
        <button className={(!enCarrito)?'bg-black hover:bg-green-600 text-white h-full'
                                       :'bg-black hover:bg-red-800 text-white'} 
          onClick={()=>{entradaCarrito(pos,totalItem)}}>
          {(!enCarrito)?"Agregar Carrito":"Bajar Carrito"}
        </button>
      </div>
    </li>
  )
}

export default ShoItem;
import { Link} from "react-router-dom";
import { useContext, useEffect } from 'react';
import {  useNavigate  } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {addCC,compYes} from '../reducers/Redux_toolkit/slices/carrito';

import './../App.css';

const Checkout=()=>{

  let navigate = useNavigate();
  const {carritoComp,total} =useSelector(state=>state.carrito);
  let tt=total.toFixed(2);

  const dispatch=useDispatch();
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const acetarCompra=()=>{

    let random=Math.floor(Math.random()*(10-1+1))+1;
    let espera=setInterval(()=>{
      if(random%2==0){
        alert('Su compra fue exitosa');
        dispatch(addCC({type:'addCC',carritoComp,total}));
        dispatch(compYes({type:'compYes',carrito,total}))
        navigate('/lista_de_compras');
      }else{
        alert('Su compra no fue exitosa, vuelva a intentar');
      }
     clearInterval(espera);
    },100*random,random);
    
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
                <p className="text-center">${el.dollar}</p>
              </div>
              <div className="grid h-16 text-center">
                <p>Total de productos:{el.shopId}</p>
                <p>Total a pagar:${(el.shopId*el.dollar).toFixed(2)}</p>
                <p className='text-emerald-700'>{(el.travel)?("Se hacen envios"):('')}</p>
              </div>
           </li>
        })}
      </div>
         {
           (total>0)?<>
              <div className='bg-black w-full flex flex-col justify-center items-center text-white p-2 mt-5'>
                Total de su compra:$ {tt}
              </div>
              <button onClick={()=>{acetarCompra()}} 
                className='w-full justify-center h-10 p-5 flex items-center rounded-sm bg-black hover:bg-green-600 text-white'>
                Comprar
              </button></>
            :<></>
         }
      </>
  )
}

export default Checkout;
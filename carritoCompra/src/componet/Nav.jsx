import { useContext} from 'react';
import {  useNavigate  } from "react-router-dom";
import { carritoContext } from '../context/CarritoContext';
import cart from './../svg/cart.svg';
import hide from './../svg/hide.svg';
import show from './../svg/show.svg';

const Nav =()=>{

    const {carrito,setListaCompra,listaTra}=useContext(carritoContext);
    let {total,carritoComp,mostrarLista}=carrito;
    total=total.toFixed(2);
    let {lista}=listaTra;
    //console.log(lista)
    let navigate = useNavigate();

    const comprarLista=()=>{
        if(total>0){
         setListaCompra({type:'comp',carrito});
           navigate('/comprar');
        }else{
            alert('No tiene productos en el carrito');
        }
    }
    
    const verCompras=()=>{
        navigate('/lista_de_compras');
    }

    return(
      <nav className='sticky top-0'>
        <ul className='flex justify-center items-center bg-black p-2'>
           <p className='mr-5 text-white'>Total:{total}</p>
           <button onClick={()=>{comprarLista()}} 
               className={'text-white flex p-1 item-center w-30 '+((carritoComp.length>0)?' rounded hover:bg-green-500':'')}>
               Comprar
            <div className='flex'>
                <img src={cart} alt="comprar relative left-10" />
                {(carritoComp.length>0)
                ?<div className='h-4 w-4 rounded-full bg-red-600 text-white relative right-1 text-xs text-center'>{carritoComp.length}</div>
                :<></>}
            </div> 
            </button>
            {(total>0)
            ?<button onClick={()=>{setListaCompra({type:'mostrarLista',carrito})}} className='text-white flex'>
                Informacion Compra <img src={(mostrarLista)?show:hide} alt="img" />
            </button> 
            :<></> 
           }
           {
               (lista.length>0)?
                <button className='text-white ml-4 flex p-1 item-center w-30 rounded hover:bg-white hover:text-black' 
                onClick={()=>{verCompras()}}>Ver Facturas</button> 
                :<></>
           }
        </ul>
      </nav>
    )
}
export default Nav;
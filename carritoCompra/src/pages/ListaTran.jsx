import { useContext, useEffect } from 'react';
import { Link} from "react-router-dom";
import { carritoContext } from '../context/CarritoContext';
import Footer from '../componet/Footer';
import home from './../svg/home.svg';

const listaCompra=()=>{

  const {listaTra}=useContext(carritoContext);
  const {lista}=listaTra;

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return(
    <>
        <div className='text-center font-medium p-5 bg-black text-white'>Listas de Compras</div>
        <hr className='p-5' />
        <div>
          <ul>
            {
              (lista.length>0)?
              lista.map((el,index)=>{
                let {carrito,totalComp,id,date}=el;
                totalComp=totalComp.toFixed(2);
                return(
                   <li key={id.toString()}>
                       <h1 className='text-center'>Lista de compra {(index+1)} <br /> Fecha de compra:{date}</h1>
                       {
                        carrito.map((item,index1)=>{
                          return <div key={item.id} className=" w-full bg-slate-100 flex flex-col justify-center items-center mt-5">
                                   <h1 className='text-left'>Articulo {(index1+1)}</h1>
                                    <div className='grid h-30 items-center justify-center'>
                                     <img className='w-20 h-20 mt-4' src={item.img} alt={item.name} />
                                    </div>
                                    <div className="grid h-30 p-5">
                                      <p className='font-medium'>Nombre producto:{item.name}</p>
                                      <p className=''>Valor unitario:${item.dollar}</p>
                                      <p>Total de productos:{item.shopId}</p>
                                    {
                                     (item.shopId>1)?
                                      <p>Costo:${((item.shopId)*(item.dollar)).toFixed(2)}</p>
                                      :<></>
                                    }
                                      <p className='text-emerald-700'>{(item.travel)?("Se hacen envios"):('')}</p>
                                    </div>
                                  </div>
                         })
                       }
                       <h1 className='text-center p-1 font-medium' >Total de la compra:${(totalComp)}</h1>
                   </li>
                 )
              })
              :<><p className='text-center'>Sin compras</p></>
            }
          </ul>
        </div> 
          <Link to='/home'>
            <button className='bg-black flex justify-center items-center text-white p-2 w-[280px]  rounded-md m-auto hover:bg-gray-900'>
              volver Home <img src={home} alt="casa" />
            </button>
          </Link>
        <Footer/>
    </>
  )
}

export default listaCompra;


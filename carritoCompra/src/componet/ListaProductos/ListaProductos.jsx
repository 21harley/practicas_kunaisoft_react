import ShopCar from "./../ShopCar/ShopCar";
import { AxiosAllItem } from "../../reducers/Redux_toolkit/slices/carrito";
import {addCC,addCant,del,sumar} from '../../reducers/Redux_toolkit/slices/carrito';
//al declarar un peticion usar get o apiconsul
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";

const ListaProductos = () => {
  const dispatch=useDispatch();
  const {lista,total,mostrarLista,carritoComp,carga} =useSelector(state=>state.carrito);
  
  useEffect(()=>{
    if(!carga) dispatch(AxiosAllItem());
  },[]);

  //let carrito=[],total=0,mostrarLista=false;

  const bajarCarrito = (p) => {
    dispatch(del({ type: "del", carritoComp, p,lista }));
    dispatch(sumar({ type: "sumar",carritoComp}));
  };

  const agregarCarrito = (p, cant, type) => {
    if (type == "add") dispatch(addCC({ type: "addCC", p, cant}));
    if (type == "agregar") dispatch(addCant({ type: "addCant",  p, cant}));
    dispatch(sumar({ type: "sumar",carritoComp}));
  };

  return (
    <>
      {mostrarLista == true && total > 0 ? (
        <div className="bg-white-100 grid grid-cols-2 justify-center text-center">
          <ShopCar
            data={lista != [] ? lista : []}
            comprar={agregarCarrito}
            bajar={bajarCarrito}
          ></ShopCar>
          <div className="sticky top-12 bg-slate-100 h-[250px] overflow-auto flex flex-col justify-start items-start p-4">
            <h1 className="ml-10 font-medium">Lista de Compras</h1>
            <br />
            <ul>
              {carritoComp.length > 0 ? (
                carritoComp.map((el, index) => {
                  return (
                    <li key={el.id}>
                      <ul className="flex flex-col justify-start items-start">
                        <li>Articulo {index + 1}</li>
                        <li className="flex">
                          Nombre: <p className="font-medium">{el.name}</p>
                        </li>
                        <li>Cantidad:{el.shopId}</li>
                        <li className="flex">
                          Valor valor unitario:{" "}
                          <p className="font-medium">${el.dollar.toFixed(2)}</p>
                        </li>
                      </ul>
                      <br />
                    </li>
                  );
                })
              ) : (
                <></>
              )}
              <br />
              <h3 className="flex font-medium">Total a pagar:${total}</h3>
            </ul>
          </div>
        </div>
      ) : (
        <ShopCar
          data={lista != [] ? lista : []}
          comprar={agregarCarrito}
          bajar={bajarCarrito}
        ></ShopCar>
      )}
    </>
  );
};

export default ListaProductos;

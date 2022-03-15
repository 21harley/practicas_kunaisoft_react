import ShoItem from './ShoItem';

const ShopCar=({data,comprar:agregarCarrito,bajar:bajarCarrito})=>{
  return (
      <div className="flex justify-center text-center">
        <h1>
          React and Tailwind with Vitejs!
          <ul className='flex flex-col justify-center items-center gap-4'>
          {
            (data.length>0)?
            data.map((el,index)=>{
              return(
                (el.shopId>0)
                  ?<ShoItem key={el.name} elemento={el} comprar={agregarCarrito} bajar={bajarCarrito} index={index}></ShoItem>
                  : <li key={el.name} ></li>
              ) 
            })
            : <h3>Renovando stock venga mas tarde</h3>
          }
          </ul>
        </h1>
      </div> 
  )
}

export default ShopCar;

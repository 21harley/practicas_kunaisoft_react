import ShoItem from './ShoItem';

const ShopCar=({data,comprar:agregarCarrito,bajar:bajarCarrito})=>{
  return (
      <div className="flex justify-center text-center">
        <h1>
          React and Tailwind with Vitejs!
          <ul className=' justify-center items-center md:flex gap-4'>
          {
            data.map((el,index)=>{
              return <ShoItem key={el.name} elemento={el} comprar={agregarCarrito} bajar={bajarCarrito} index={index}></ShoItem>
            })
          }
          </ul>
        </h1>
      </div> 
  )
}

export default ShopCar;

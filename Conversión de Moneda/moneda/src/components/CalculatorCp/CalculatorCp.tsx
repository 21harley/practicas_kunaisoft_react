import flecha from './../../public/svg/flecha.svg'

function CalculatorCp () {
  return (
        <div className="bg-black2 w-full h-[500px] justify-center items-center border-0 flex flex-col font-press-start">
          <div className='h-[300px] flex flex-col justify-center items-center'>
            <div>
            <label htmlFor="From" className='text-white'>From</label>
            <div className='h-[50px] w-[280px] flex'>
              <input type="number" className='w-5/6 h-[40px] rounded-l-lg bg-black pl-2 text-white' />
              <select name="" id="" className='w-1/6 h-[40px] rounded-r-lg bg-black hover:bg-black'>
              </select>
            </div>
            </div>
            <button className='h-[40px] mt-3 mb-3 rounded-full bg-yellow1 w-10 flex justify-center items-center' >
              <img src={flecha} alt="flecha" />
            </button>
            <div>
            <label htmlFor="To" className='text-white'>To</label>
            <div className='h-[50px] w-[280px] flex'>
              <input type="number" className='w-5/6 h-[40px] border-transparen rounded-l-lg bg-black pl-2 text-white'/>
              <select name="" id="" className='w-1/6 h-[40px] border-transparent rounded-r-lg bg-black'>
              </select>
            </div>
            </div>
          </div>
            <button className='w-[280px] p-2 text-white bg-yellow1 hover:bg-yellow rounded'>Enter an amount</button>
        </div>
  )
}

export default CalculatorCp

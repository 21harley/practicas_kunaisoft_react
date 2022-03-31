import flecha from './../../public/svg/flecha.svg'

function CalculatorCp () {
  return (
        <div className="bg-black2 w-full h-[500px] justify-center items-center border-0 flex flex-col">
          <div className='h-[300px] flex flex-col justify-center items-center'>
            <div className='h-[60px] w-[280px] flex'>
              <input type="text" className='w-5/6' />
              <select name="" id="" className='w-1/6'>
              </select>
            </div>
            <button className='h-[40px] mt-10 mb-10 rounded-full bg-yellow1 w-10 flex justify-center items-center' >
              <img src={flecha} alt="flecha" />
            </button>
            <div className='h-[60px] w-[280px] flex'>
              <input type="text" className='w-5/6'/>
              <select name="" id="" className='w-1/6'>
              </select>
            </div>
          </div>
            <button>Enter an amount</button>
        </div>
  )
}

export default CalculatorCp

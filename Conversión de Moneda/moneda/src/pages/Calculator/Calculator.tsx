import Navbar from '../../components/Navbar/Navbar'
import CalculatorCp from '../../components/CalculatorCp/CalculatorCp'

function Calculator () {
  return (
        <div className='h-screen bg-black2 w-full'>
         <Navbar></Navbar>
         <CalculatorCp></CalculatorCp>
        </div>
  )
}

export default Calculator

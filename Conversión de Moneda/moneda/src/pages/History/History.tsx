import Navbar from '../../components/Navbar/Navbar'
import { useAppSelector } from '../../reduxer'
import Login from '../Login/Login'
import { sliceCoin } from '../../utils/function/index'

const History = () => {
  const login = useAppSelector(state => {
    return state.Login
  })
  const history = useAppSelector(state => {
    return state.History
  })
  console.log(history)
  return (
        <>
        {
          (login.login_sucess)
            ? (
            <div className='h-screen bg-black2 w-full'>
              <Navbar></Navbar>
              <div className='font-press-start '>
                <h1 className='text-center text-4xl'>History</h1>
                <ul className='flex flex-col mt-10 justify-center items-center'>
                   {
                       (history.listCM)
                         ? history.listCM.map((el, index) => {
                           const aux = sliceCoin(el.MA, 'item-2')
                           const aux1 = sliceCoin(el.MO, 'item-2')
                           return <li key={index} className='w-[280px] text-sm mt-4'>
                                <p className='text-center'>Date:{el?.date}</p>
                                <p>Input Currency {(aux[1])} <br></br>change of the day {(aux[0])}</p>
                                <p>Entered number {el.NA}</p>
                                <p>Output Currency {(aux1[1])} <br></br> change of the day {(aux1[0])}</p>
                                <p>Generated number {el.NO}</p>
                            </li>
                         })
                         : <></>
                   }
                </ul>
              </div>
           </div>
              )
            : <Login/>
        }
        </>
  )
}

export default History

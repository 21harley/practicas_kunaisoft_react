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
            <div className='h-screen bg-black2 w-full text-white'>
              <Navbar validation={true} ></Navbar>
              <div className='font-press-start flex flex-col justify-center items-center '>
                <h1 className='text-center text-4xl'>History</h1>
                <ul className=' h-[300px] w-[300px] overflow-y-auto mt-10'>
                   {
                       (history.listCM)
                         ? history.listCM.map((el, index) => {
                           const aux = sliceCoin(el.MA, 'item-2')
                           const aux1 = sliceCoin(el.MO, 'item-2')
                           return <li key={index} className='w-[280px] h-[180px] text-sm'>
                                <p className='text-center'>Date:{el?.date}</p>
                                <p className='mt-2'>Input Currency {(aux[1])}<br></br>change of the day {(aux[0])}</p>
                                <p>Entered number <strong>{el.NA}</strong></p>
                                <p className='mt-2'>Output Currency {(aux1[1])}<br></br> change of the day {(aux1[0])}</p>
                                <p>Generated number <strong>{el.NO}</strong></p>
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

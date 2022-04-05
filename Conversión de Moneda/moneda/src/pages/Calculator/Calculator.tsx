import Navbar from '../../components/Navbar/Navbar'
import CalculatorCp from '../../components/CalculatorCp/CalculatorCp'
import { apiFixer } from '../../reduxer/slice/Conversor'
import { useDispatch } from 'react-redux'
import { useAppSelector } from './../../reduxer/index'
import Login from '../Login/Login'
import { useEffect } from 'react'

function Calculator () {
  const login = useAppSelector(state => {
    return state.Login
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(apiFixer())
  }, [dispatch])

  return (
    <>
    {
      (login.login_sucess)
        ? (
        <div className='h-screen bg-black2 w-full'>
          <Navbar></Navbar>
          <CalculatorCp></CalculatorCp>
       </div>
          )
        : <Login/>
    }
    </>
  )
}

export default Calculator

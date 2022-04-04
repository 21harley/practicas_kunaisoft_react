import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../reduxer/slice/Login'
import { loginUser } from './../../services/firebase/functionFire'
import confirmInputs from './../../utils/function/index'
import Logo from './../../public/svg/Logo.svg'
import './../../public/css/animated.css'

function Login () {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const event = (e: React.FormEvent<HTMLFormElement> | React.BaseSyntheticEvent<Event>) => {
    e.preventDefault()

    const { email, password } = e.target

    const confir = confirmInputs([
      { typeI: 'email', value: email.value },
      { typeI: 'password', value: password.value }
    ])

    if (confir.type) {
      loginUser({ type: 'EmailAndPassword', email: email.value, pass: password.value })
        .then((result) => {
          dispatch(login({ user: result?.user.uid }))
          navigate('/calculator')
        })
        .catch((error) => {
          console.log(error)
        })
      console.log(email.value, password.value)
    } else {
      alert('Data entry error ' + confir.desc)
    }

    e.target.reset()
  }

  return (
    <div className="bg-black2 w-full h-screen flex justify-center items-center font-press-start capitalize">
        <div className='h-[400px]'>
            <div className='flex flex-col items-center'>
                <img src={Logo} alt="logo" className='mover mb-2'/>
                <h1 className='font-press-start text-white font-normal text-2xl'>Login</h1>
            </div>
            <form action="" className='h-[225px] flex flex-col justify-evenly' onSubmit={(e) => { event(e) }}>
                <div className='flex flex-col'>
                  <label htmlFor="email" className='text-white '>email</label>
                <input className='text-white text-center h-[30px] rounded-sm bg-black placeholder:text-white' type="email" name='email' required/>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="password" className='text-white '>password</label>
                  <input className='text-white text-center h-[30px] rounded-sm bg-black  placeholder:text-white' type="password" name='password' required/>
                </div>
                <button className='h-[30px] w-[225px] rounded-sm bg-yellow2 text-white cursor-pointer hover:bg-yellow1 duration-100' >Login</button>
            </form>
            <div className='mt-2 flex gap-2 justify-center'>
                <p className='text-yellow1'>Forgot password?</p><Link className='text-white hover:underline' to="/register">Register now</Link>
            </div>
        </div>
    </div>
  )
}

export default Login

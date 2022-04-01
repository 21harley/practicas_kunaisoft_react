import React from 'react'
import { Link } from 'react-router-dom'
import confirmInputs from './../../utils/function/index'
import Logo from './../../public/svg/Logo.svg'
import './../../public/css/animated.css'

function Login () {
  const event = (e: React.FormEvent<HTMLFormElement> | React.BaseSyntheticEvent<Event>) => {
    e.preventDefault()
    const { username, password } = e.target

    if (confirmInputs(
      [{ typeI: 'username', value: username.value },
        { typeI: 'password', value: password.value }])
    ) {
      console.log(username.value, password.value)
    }

    e.target.reset()
  }

  return (
    <div className="bg-black2 w-full h-screen flex justify-center items-center">
        <div className='h-[400px]'>
            <div className='flex flex-col items-center'>
                <img src={Logo} alt="logo" className='mover mb-2'/>
                <h1 className='font-press-start text-white font-normal text-2xl'>Login</h1>
            </div>
            <form action="" className='h-[225px] flex flex-col justify-evenly' onSubmit={(e) => { event(e) }}>
                <input className='text-white text-center h-[30px] rounded-sm bg-black placeholder:text-white' type="text" name='username' placeholder='username' required/>
                <input className='text-white text-center h-[30px] rounded-sm bg-black  placeholder:text-white' type="password" name='password' placeholder='password' required/>
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

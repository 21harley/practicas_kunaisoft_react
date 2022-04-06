import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { creteUserFire } from './../../services/firebase/functionFire'
import { confirmInputs } from './../../utils/function/index'
import Logo from './../../public/svg/Logo.svg'
import './../../public/css/animated.css'
import Respose from '../../components/Response/ResponseInterface'

type message={
  state:boolean,
  type:string,
  mess:string
}
function Register () {
  const initMessage:message = { state: false, type: '', mess: '' }
  const [message, setMessage] = useState(initMessage)

  const event = (e: React.FormEvent<HTMLFormElement> | React.BaseSyntheticEvent<Event>) => {
    e.preventDefault()
    const { username, email, password } = e.target
    const confir = confirmInputs([
      { typeI: 'username', value: username.value },
      { typeI: 'email', value: email.value },
      { typeI: 'password', value: password.value }
    ])
    if (confir.type) {
      creteUserFire({ type: 'EmailAndPassword', email: email.value, pass: password.value })
        .then((resul) => {
          setMessage({
            state: true,
            type: 'susses',
            mess: 'Registration completed siccessfully'
          })
          // console.log(resul?.user.uid)
        })
        .catch((error) => {
          console.log(error)
        })
      // console.log(username.value, email.value, password.value)
    } else {
      setMessage({
        state: true,
        type: 'error',
        mess: 'Data entry error ' + confir.desc
      })
    }
    e.target.reset()
  }

  return (
    <div className="bg-black2 w-full h-screen flex justify-center items-center font-press-start capitalize">
        <div className='h-[400px]'>
            <div className='flex flex-col items-center'>
                <img src={Logo} alt="logo" className='mover mb-1'/>
                <h1 className='font-press-start text-yellow2 font-normal text-4xl'>.CM</h1>
                <h1 className='font-press-start text-white font-normal text-2xl mt-5'>Register</h1>
            </div>
            <form action="" className='h-[225px] flex flex-col justify-evenly' onSubmit={(e) => { event(e) }}>
              <div className='flex flex-col'>
                <label htmlFor="username" className='text-white '>username</label>
                <input className='text-white text-center h-[30px] rounded-sm bg-black placeholder:text-white' type="text" name='username' required/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="email" className='text-white '>email</label>
                <input className='text-white text-center h-[30px] rounded-sm bg-black placeholder:text-white' type="email" name='email' required/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="password" className='text-white '>password</label>
                <input className='text-white text-center h-[30px] rounded-sm bg-black  placeholder:text-white' type="password" name='password' required/>
              </div>
                <button className='h-[30px] w-[225px] rounded-sm bg-yellow2 text-white cursor-pointer hover:bg-yellow1 duration-100 mt-5' >Register</button>
            </form>
            <div className='mt-2 flex gap-2 justify-center'>
                <p className='text-yellow1'>Already registered?</p><Link className='text-white hover:underline' to="/login">Log In</Link>
            </div>
        </div>
        {
          (message.state)
            ? <Respose type={message.type} message={message.mess} changeMess={setMessage}></Respose>
            : <></>
        }
    </div>
  )
}

export default Register

import { Link } from 'react-router-dom'
import Logo from './../../public/svg/Logo.svg'
import './../../public/css/animated.css'

function Login () {
  return (
    <div className="bg-black2 w-full h-screen flex justify-center items-center">
        <div className='h-[400px]'>
            <div className='flex flex-col items-center'>
                <img src={Logo} alt="logo" className='mover mb-2'/>
                <h1 className='font-press-start text-white font-normal text-2xl'>Login</h1>
            </div>
            <form action="" className='h-[225px] flex flex-col justify-evenly'>
                <input className='text-white text-center h-[30px] rounded-sm bg-black placeholder:text-white' type="text" name='username' placeholder='username' required/>
                <input className='text-white text-center h-[30px] rounded-sm bg-black  placeholder:text-white' type="password" name='password' placeholder='password' required/>
                <button className='h-[30px] w-[225px] rounded-sm bg-yellow2 text-white cursor-pointer hover:bg-yellow1 duration-100' >Login</button>
            </form>
            <div className='mt-2 flex gap-2 justify-center'>
                <p className='text-yellow1'>You are not registered?</p><Link className='text-white hover:underline' to="/register">Sign up</Link>
            </div>
        </div>
    </div>
  )
}

export default Login

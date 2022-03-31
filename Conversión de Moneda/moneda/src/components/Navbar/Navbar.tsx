import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import navLogo from './../../public/svg/navLogo.svg'
import menuLogo from './../../public/svg/menuLogo.svg'
import closetLogo from './../../public/svg/closetLogo.svg'

function Navbar () {
  const [activeM, setActiveM] = useState(false)
  const navigate = Navigate
  const routerApp = (ruta:string) => {
    navigate({ to: ruta })
  }
  return (
      <>
        <nav className='bg-black2 h-[50px]'>
            <ul className='flex justify-between h-full items-center'>
                <li className='ml-14'>
                    <img src={navLogo} alt="logo Navbar" />
                </li>
                <li className='mr-14 '>
                    <button onClick={() => { setActiveM(!activeM) }} className='w-10 flex items-center justify-center duration-100'>
                        <img src={(activeM) ? closetLogo : menuLogo} alt="menu" />
                    </button>
                </li>
            </ul>
        </nav>
        <div className='modal hidden'>
             <ul>
                 <li>
                     <button onClick={() => { routerApp('home') }}>Home </button>
                 </li>
                 <li>
                     <button onClick={() => { routerApp('home') }}>Calculator </button>
                 </li>
                 <li>
                     <button onClick={() => { routerApp('home') }}>Closet </button>
                 </li>
             </ul>
        </div>
    </>
  )
}

export default Navbar

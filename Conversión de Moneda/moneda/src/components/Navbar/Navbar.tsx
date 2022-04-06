import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setInitHistory } from '../../reduxer/slice/History'
import { setInitConversor } from '../../reduxer/slice/Conversor'
import { closetSession } from '../../services/firebase/functionFire'
import navLogo from './../../public/svg/navLogo.svg'
import menuLogo from './../../public/svg/menuLogo.svg'
import closetLogo from './../../public/svg/closetLogo.svg'

interface Props{
    validation:boolean
}

const Navbar:React.FC<Props> = ({ validation }) => {
  const [activeM, setActiveM] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const routerApp = (ruta:string) => {
    if (ruta === '/login') {
      closetSession()
      dispatch(setInitHistory())
      dispatch(setInitConversor())
    }
    navigate(ruta)
  }
  const modalClass = 'h-full overflow-y-auto overflow-x-hidden fixed top-[50px] right-0 left-0 z-50 w-full  h-modal flex justify-center bg-black2'
  const styleBotton = 'h-[40px] mt-3 mb-3  bg-yellow1 w-[280px] flex justify-center items-center hover:bg-yellow2 duration-100 rounded'
  return (
      <>
        <nav className=' h-[50px] font-press-start text-white'>
            <ul className={'flex justify-between h-full items-center bg-black2' }>
                <li className='ml-14'>
                    <img src={navLogo} alt="logo Navbar" />
                </li>
                <li className='mr-14 '>
                    <button onClick={() => {
                      if (validation) setActiveM(!activeM)
                    }} className='w-10 flex items-center justify-center duration-100'>
                        <img src={(activeM) ? closetLogo : menuLogo} alt="menu" />
                    </button>
                </li>
            </ul>
        </nav>
        <div className={(activeM) ? modalClass : 'hidden'} >
             <ul className='flex justify-center flex-col font-press-start text-white h-[300px] mt-[100px]'>
                 <li>
                     <button className={styleBotton} onClick={() => { routerApp('/history') }}>History </button>
                 </li>
                 <li>
                     <button className={styleBotton} onClick={() => { routerApp('/calculator') }}>Calculator </button>
                 </li>
                 <li>
                     <button className={styleBotton} onClick={() => { routerApp('/login') }}>Closet </button>
                 </li>
             </ul>
        </div>
    </>
  )
}

export default Navbar

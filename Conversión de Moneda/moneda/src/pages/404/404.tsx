import { Link } from 'react-router-dom'
import Logo404 from './../../public/svg/Logo404.svg'

function ErrorPage () {
  return (
    <div className="bg-black2 w-full h-screen flex justify-center items-center flex-col">
        <img src={Logo404} alt="logo404" className='relative left-4'/>
        <Link to='/home' className='mt-4 w-[200px] hover:bg-yellow1 bg-yellow2 rounded-sm text-center text-white p-2'>Back Home</Link>
    </div>
  )
}

export default ErrorPage

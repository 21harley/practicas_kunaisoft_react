import React from 'react'

interface Props{
    type:string,
    message:string,
    changeMess(change:message):void
}

type message={
  state:boolean,
  type:string,
  mess:string
}

const Respose:React.FC<Props> = ({ type, message, changeMess }) => {
  const modalClass = 'h-full overflow-y-auto overflow-x-hidden fixed top-[200px] right-0 left-0 z-50 w-full  flex justify-center bg-modal '
  const filterType = (type: string) => {
    switch (type) {
      case 'susses': return 'bg-lima'
      case 'error': return 'bg-red'
    }
  }
  const filterTypeCloset = (type: string) => {
    switch (type) {
      case 'susses': return 'text-blackLima'
      case 'error': return 'text-blackRed'
    }
  }
  return (
    <>
      <div className={modalClass}>
        <div className={' w-[300px] h-[100px] opacity-100 rounded-sm ' + filterType(type)}>
          <div className=' flex ml-auto h-10 w-10  items-center justify-center text-white rounded-sm'>
            <button onClick={() => { changeMess({ state: false, type: '', mess: '' }) }} className={filterTypeCloset(type)}>X</button>
          </div>
          <p className='text-center'>{message}</p>
        </div>
      </div>
    </>
  )
}

export default Respose

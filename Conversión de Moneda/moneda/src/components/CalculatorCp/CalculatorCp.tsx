import React, { useRef, useState, useEffect } from 'react'
import flecha from './../../public/svg/flecha.svg'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../reduxer'
import {
  setConversorMA,
  setConversorMO,
  setConversorNA,
  setConversorNO
} from '../../reduxer/slice/Conversor'
import { addListCM } from '../../reduxer/slice/History'
import { sliceCoin, investCurrency } from '../../utils/function/index'
import Respose from '../Response/ResponseInterface'

type message={
  state:boolean,
  type:string,
  mess:string
}
type Props={
  changeMenu(valor:boolean):void
}
const CalculatorCp:React.FC<Props> = ({ changeMenu }) => {
  const initMessage:message = { state: false, type: '', mess: '' }
  const [message, setMessage] = useState(initMessage)
  const dispatch = useDispatch()
  const form = useRef<HTMLFormElement>(null)
  const conversor = useAppSelector(state => state.Conversor)
  const { listData, MO, MA, NA, NO, date } = conversor
  const lista = []

  if (listData) {
    for (const [key, value] of Object.entries(listData)) {
      lista.push([value, key])
    }
  }

  const optionData = (e:React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.name) {
      case 'fromInput':
        dispatch(setConversorMA({ MA: e.target.value }))
        break
      case 'toInput':
        dispatch(setConversorMO({ MO: e.target.value }))
        break
    }
  }

  const event = (e: React.FormEvent<HTMLFormElement> | React.BaseSyntheticEvent<Event>) => {
    e.preventDefault()
    if (e.target.fromNumber.value !== '') {
      const valueFormI = form.current?.fromInput.value
      const valueFormT = form.current?.toInput.value
      if (valueFormI !== '' && valueFormT !== '') {
        const valuefrom = e.target.fromNumber.value
        // const valueTo = e.target.toNumber.value
        e.target.toNumber.value = 0
        const valueItemFrom = sliceCoin(valueFormI, 'item-2')
        const valueItemTo = sliceCoin(valueFormT, 'item-2')
        e.target.toNumber.value = ((Number(valuefrom) / Number(valueItemFrom[0])) * Number(valueItemTo[0])).toFixed(2)
        dispatch(setConversorNA({ NA: valuefrom }))
        dispatch(setConversorNO({ NO: e.target.toNumber.value }))
        dispatch(addListCM({ datos: { date: date, MA: MA, NA: valuefrom, MO: MO, NO: e.target.toNumber.value } }))
      } else {
        setMessage({
          state: true,
          type: 'error',
          mess: 'Enter the currency'
        })
        changeMenu(false)
      }
    } else {
      setMessage({
        state: true,
        type: 'error',
        mess: 'Enter the value and currency'
      })
      changeMenu(false)
    }
  }

  useEffect(() => {
    if (!message.type) changeMenu(true)
  }, [message.state])

  return (
        <form ref={form} onSubmit={(e) => {
          if (form.current?.toNumber.value) form.current.toNumber.value = 0
          event(e)
        }} className="bg-black2 w-full h-[500px] justify-center items-center border-0 flex flex-col font-press-start">
          <h1 className='text-white'>Change based on the euro on the date {date}</h1>
          <div className='h-[300px] flex flex-col justify-center items-center'>
            <div>
            <label htmlFor="From" className='text-white'>From</label>
            <div className='h-[50px] w-[280px] flex'>
              <input defaultValue={NA} name='fromNumber' type="number" className='w-5/6 h-[40px] rounded-l-lg bg-black pl-2 text-white' />
              <select defaultValue={MA} name="fromInput" id="fromInput" className='w-1/6 h-[40px] rounded-r-lg bg-black hover:bg-black' onChange={(e) => { optionData(e) }}>
                <option value=''></option>
                {
                  (lista)
                    ? lista.map((el, index) => {
                      return <option key={index} value={el[0] + '-' + el[1]}>{el[1]}</option>
                    })
                    : <></>
                }
              </select>
            </div>
            </div>
            <div onClick={() => investCurrency(form)} id='investArrow' className='h-[40px] mt-3 mb-3 rounded-full bg-yellow1 w-10 flex justify-center items-center cursor-pointer' >
              <img src={flecha} alt="flecha" />
            </div>
            <div>
            <label htmlFor="To" className='text-white'>To</label>
            <div className='h-[50px] w-[280px] flex'>
              <input defaultValue={NO} name='toNumber' type="number" className='w-5/6 h-[40px] border-transparen rounded-l-lg bg-black pl-2 text-white'/>
              <select defaultValue={MO} name="toInput" id="toInput" className='w-1/6 h-[40px] border-transparent rounded-r-lg bg-black' onChange={(e) => { optionData(e) }}>
              <option value=''></option>
                {
                  (lista)
                    ? lista.map((el, index) => {
                      return <option key={index} value={el[0] + '-' + el[1]}>{el[1]}</option>
                    })
                    : <></>
                }
              </select>
            </div>
            </div>
          </div>
            <button id='invest' className='w-[280px] p-2 text-white bg-yellow1 hover:bg-yellow2 rounded'>Enter an amount</button>
            {
            (message.state)
              ? <Respose type={message.type} message={message.mess} changeMess={setMessage}></Respose>
              : <></>
            }
        </form>
  )
}

export default CalculatorCp

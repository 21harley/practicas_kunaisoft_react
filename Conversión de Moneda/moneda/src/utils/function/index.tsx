import React from 'react'
type inputUser = {
    typeI:string,
    value:string
}

type res={
  type:boolean,
  desc:string
}

export function confirmInputs (record:inputUser[]):res {
  const rep = false
  if (record.length === 0) {
    return { type: rep, desc: 'length 0' }
  } else {
    for (let i = 0; i < record.length; i++) {
      switch (record[i].typeI) {
        case 'username':
          if (record[i].value.length === 0) return { type: rep, desc: 'username length 0' }
          break
        case 'password':
          if (record[i].value.length < 6) return { type: rep, desc: 'password > 6 character' }
          break
        case 'email':
          if (record[i].value.length === 0) return { type: rep, desc: 'email length 0' }
          // eslint-disable-next-line no-case-declarations
          const regOficial = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
          if (!regOficial.test(record[i].value)) return { type: rep, desc: 'email error' }
          break
      }
    }
  }
  return { type: !rep, desc: '' }
}

export function sliceCoin (m:string, type:string) {
  switch (type) {
    case 'item-1':
      if (m.length > 0) {
        return m.split('-')[1]
      } else {
        return ''
      }
    case 'item-2':
      return m.split('-')
    case 'item-3':
      if (m.length > 0) {
        return m.split('-')[0]
      } else {
        return ''
      }
  }
  return ''
}

export function investCurrency (form:React.RefObject<HTMLFormElement>) {
  const auxfromV = form.current?.fromNumber.value
  const auxToV = form.current?.toNumber.value
  const auxInputS = form.current?.fromInput.value
  const auxtoS = form.current?.toInput.value
  if (form.current?.fromNumber.value) form.current.fromNumber.value = Math.ceil(Number(auxToV))
  if (form.current?.toNumber.value) form.current.toNumber.value = Math.ceil(Number(auxfromV))
  if (form.current?.fromInput.value) form.current.fromInput.value = auxtoS
  if (form.current?.toInput.value) form.current.toInput.value = auxInputS
}

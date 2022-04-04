type inputUser = {
    typeI:String,
    value:String
}

type res={
  type:boolean,
  desc:string
}

const confirmInputs = (record:inputUser[]):res => {
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
          break
      }
    }
  }
  return { type: !rep, desc: '' }
}

export default confirmInputs

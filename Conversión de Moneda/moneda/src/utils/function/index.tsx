type inputUser = {
    typeI:String,
    value:String
}

const confirmInputs = (record:inputUser[]):boolean => {
  let rep = true
  if (record.length === 0) {
    rep = false
  } else {
    record.forEach((el) => {
      switch (el.typeI) {
        case 'username':
          if (el.value.length === 0) rep = false
          break
        case 'password':
          break
        case 'email':
          break
      }
    })
  }
  return rep
}

export default confirmInputs

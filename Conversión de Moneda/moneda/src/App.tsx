import appFire from './services/firebase/firebaseMoneda'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { loginState } from './reduxer/slice/Login'
import RoutesApp from './routes/RoutesApp'
import './App.css'

const auth = getAuth(appFire)

function App () {
  const dispatch = useDispatch()

  const validar = (datos:object|any) => {
    dispatch(loginState({ user: datos }))
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      validar(user.uid)
      // ...
    } else {
      // User is signed out
      // ...
      console.log('User is signed out')
    }
  })
  return (
      <RoutesApp/>
  )
}

export default App

import { Provider } from 'react-redux'
import Store from './reduxer/index'
import RoutesApp from './routes/RoutesApp'
import './App.css'

function App () {
  return (
    <Provider store={Store}>
      <RoutesApp/>
    </Provider>
  )
}

export default App

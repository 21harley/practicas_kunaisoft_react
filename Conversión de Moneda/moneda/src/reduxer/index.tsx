import { configureStore } from '@reduxjs/toolkit'
import Login from './slice/Login'
import History from './slice/History'
import Conversor from './slice/Conversor'

export default configureStore({
  reducer: {
    Login,
    History,
    Conversor
  }
})

import { createSlice } from '@reduxjs/toolkit'
// import { Axios } from 'axios'
const initialState = {
  user: '',
  login_sucess: false,
  login_error: false
}

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user
      state.login_sucess = true
    },
    loginState: (state, action) => {
      state.user = action.payload.user
      state.login_sucess = true
    },
    loginSucess: (state) => {
      state.login_sucess = !state.login_sucess
    },
    loginError: (state) => {
      state.login_error = !state.login_error
    },
    loginInit: (state) => {
      state.user = ''
      state.login_sucess = false
      state.login_error = false
    }
  }
})

export const { login, loginSucess, loginError, loginState, loginInit } = LoginSlice.actions

export default LoginSlice.reducer

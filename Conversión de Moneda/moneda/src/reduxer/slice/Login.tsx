import { createSlice } from '@reduxjs/toolkit'
// import { Axios } from 'axios'
const initialState = {
  name: '',
  email: '',
  key: '',
  login_sucess: false,
  login_error: false
}

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {

    },
    createUser: (state, action) => {

    },
    loginSucess: (state) => {
      state.login_sucess = !state.login_sucess
    },
    loginError: (state) => {
      state.login_error = !state.login_error
    }
  }
})

export const { login, createUser, loginSucess, loginError } = LoginSlice.actions

export default LoginSlice.reducer

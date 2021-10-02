import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loginState:localStorage.getItem('token'),
    userId:"",
    email:""
}

const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        login:(state,action) =>{
            localStorage.setItem("token",action.payload.token);
            state.loginState = localStorage.getItem('token');
            state.userId = action.payload.userId;
            state.email = action.payload.email
        },
        logout: (state, action) => {
            localStorage.removeItem("token");
            state.loginState = null;
            state.userId = null;
            state.email = null;
          },
        signup:(state,action) =>{
            localStorage.setItem("token",action.payload.token);
            state.loginState = localStorage.getItem('token');
            state.userId = action.payload.userId;
            state.email = action.payload.email
        }
    }
})

export const {login,logout,signup} = loginSlice.actions;

export default loginSlice;
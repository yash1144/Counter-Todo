import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticate: false,
        error: null,
    },

    reducers: {
        loginSucess: (state, action) => {
            state.user = action.payload, // id : 1
                state.isAuthenticate = true,
                state.error = null
        },

        loginFailure: (state, action) => {
            state.user = null,
                state.isAuthenticate = false,
                state.error = action.payload
        },

        signupSuccess: (state, action) => {
            state.user = action.payload,
                state.isAuthenticate = true,
                state.error = null
        },

        signupFailure: (state, action) => {
            state.user = null,
                state.isAuthenticate = false,
                state.error = action.payload
        },

        logout: (state) => {
            state.user = null,
                state.isAuthenticate = false,
                state.error = null
        }
    }
});

export const { loginSucess, loginFailure, signupSuccess, signupFailure, logout } = authSlice.actions
export default authSlice.reducer
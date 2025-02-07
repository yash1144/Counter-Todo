import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice/counterSlice";
import todoReducer from "../todoSlice/todoSlice";
import authReducer from "../authSlice/auth";

export default configureStore({
    reducer: {
        counter: counterReducer, 
        todos: todoReducer,
        auth: authReducer,
    }
});
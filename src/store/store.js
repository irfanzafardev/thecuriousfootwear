import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../services/auth/authSlice';
import postReducer from '../services/post/postSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer
  }
})

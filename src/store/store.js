import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../services/auth/authSlice';
import postReducer from '../services/post/postSlice';
import CommentReducer from '../services/comment/commentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    comment: CommentReducer,
  }
})

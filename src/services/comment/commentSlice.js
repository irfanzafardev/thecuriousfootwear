import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import commentService from './commentService'

const initialState = {
  comments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
}

// Create new post
export const createComment = createAsyncThunk(
  'comment/create',
  async (commentData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await commentService.createComment(commentData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Fetch all comment
export const getAllPost = createAsyncThunk(
  'post/getAll',
  async (_, thunkAPI) => {
    try {
      return await postService.getAllPost()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Fetch all post
export const getCurrentPost = createAsyncThunk(
  'post/getCurrent',
  async (postId, thunkAPI) => {
    try {
      return await postService.getCurrentPost(postId)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Like comment
export const likePost = createAsyncThunk(
  'post/like',
  async (postId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await postService.likePost(postId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createComment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.comments.push(action.payload)
      })
      .addCase(createComment.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getAllComment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllComment.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = action.payload
      })
      .addCase(getAllComment.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = postSlice.actions
export default postSlice.reducer
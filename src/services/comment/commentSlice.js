import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import commentService from './commentService'

const initialState = {
  comments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
}

// Create new comment
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

// Fetch all comment by postId
export const getAllCommentByPostId = createAsyncThunk(
  'comment/getAll',
  async (postId, thunkAPI) => {
    try {
      return await commentService.getAllCommentByPostId(postId)
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

// Fetch a comment
// export const getCommentById = createAsyncThunk(
//   'comment/getbyid',
//   async (commentId, thunkAPI) => {
//     try {
//       return await commentService.getCommentById(commentId)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// Like comment
// export const likeComment = createAsyncThunk(
//   'comment/like',
//   async (commentId, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await commentService.likeComment(commentId, token)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// Unlike comment
// export const unlikeComment = createAsyncThunk(
//   'comment/unlike',
//   async (commentId, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await commentService.unlikeComment(commentId, token)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

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
      .addCase(getAllCommentByPostId.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllCommentByPostId.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.comments = action.payload
      })
      .addCase(getAllCommentByPostId.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
    // .addCase(likeComment.fulfilled, (state, action) => {
    //   if (!state.comments.like.includes(action.payload)) {
    //     state.comments.like.push(action.payload);
    //     state.comments.dislike.splice(
    //       state.comments.dislike.findIndex(
    //         (userId) => userId === action.payload
    //       ),
    //       1
    //     );
    //   }
    // })
    // .addCase(unlikeComment.fulfilled, (state, action) => {
    //   if (!state.comments.dislike.includes(action.payload)) {
    //     state.comments.dislike.push(action.payload);
    //     state.comments.like.splice(
    //       state.comments.like.findIndex(
    //         (userId) => userId === action.payload
    //       ),
    //       1
    //     );
    //   }
    // })
  }
})

export const { reset } = commentSlice.actions
export default commentSlice.reducer
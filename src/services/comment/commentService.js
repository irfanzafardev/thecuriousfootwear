import axios from "axios"

const COMMENT_BASE_URL = "https://thecuriousfootwear-server.vercel.app/api/comment/"
// const ALL_COMMENT_BASE_URL = "https://thecuriousfootwear-server.vercel.app/api/comment/getCommentsByPostId/:id"

// Get all comment by postId
// const getAllPost = async () => {
//   const response = await axios.get()

//   return response.data
// }

// Create new post
const createComment = async (commentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(COMMENT_BASE_URL, commentData, config)

  return response.data
}

// Like comment
// const likeComment = async (postId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }

//   const response = await axios.put(+ postId, config)

//   return response.data
// }

// Unlike comment
// const dislikePost = async (postId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }

//   const response = await axios.put(+ postId, config)

//   return response.data
// }

const commentService = {
  createComment,
}

export default commentService
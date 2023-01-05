import axios from "axios"

const POST_BASE_URL = "https://thecuriousfootwear-server.vercel.app/api/post/"
const ALL_POST_BASE_URL = "https://thecuriousfootwear-server.vercel.app/api/post/all"
const LIKE_BASE_URL = "https://thecuriousfootwear-server.vercel.app/api/user/like/"
const DISLIKE_BASE_URL = "https://thecuriousfootwear-server.vercel.app/api/user/dislike/"

// Get all post
const getAllPost = async () => {
  const response = await axios.get(ALL_POST_BASE_URL)

  return response.data
}

// Get all post
const getCurrentPost = async (postId) => {
  const response = await axios.get(POST_BASE_URL + postId)

  return response.data
}

// Create new post
const createComment = async (commentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(POST_BASE_URL, commentData, config)

  return response.data
}

// Like post
const likePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(LIKE_BASE_URL + postId, config)

  return response.data
}

// Disike post
const dislikePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(DISLIKE_BASE_URL + postId, config)

  return response.data
}

const commentService = {
  createComment,
}

export default commentService
import axios from "axios"

const POST_BASE_URL = "https://thecuriousfootwear-server.vercel.app/api/post/"
const LIKE_BASE_URL = "https://thecuriousfootwear-server.vercel.app/api/user/like/"
const DISLIKE_BASE_URL = "https://thecuriousfootwear-server.vercel.app/api/user/dislike/"

// Create new post
const createPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(POST_BASE_URL, postData, config)

  return response.data
}

// Like post
const likePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(LIKE_BASE_URL, postId, config)

  return response.data
}

// Disike post
const dislikePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(DISLIKE_BASE_URL, postId, config)

  return response.data
}

const postService = {
  createPost,
  likePost,
  dislikePost
}

export default postService
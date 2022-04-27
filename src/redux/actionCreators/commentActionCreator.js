import { API_TOKEN } from "../../tokens";
import { ADD_COMMENT, DELETE_COMMENT } from "../types/postsTypes";

export const addComment = (newComment) => ({
  type: ADD_COMMENT,
  payload: newComment,
})

export const addCommentQuery = (_id, comment) => async (dispatch) => {
  await fetch(`https://api.react-learning.ru/posts/comments/${_id}`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment)
  })
  console.log({ comment })
  const response = await fetch(`https://api.react-learning.ru/posts/${_id}`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    }
  })
  const postFromApi = await response.json()
  dispatch(addComment(postFromApi))
}

export const deleteComment = (_id) => ({
  type: DELETE_COMMENT,
  payload: _id,
})

export const deleteCommentQuery = (_id) => async (dispatch) => {
  const response = await fetch(`https://api.react-learning.ru/posts/comments/${_id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    }
  })
  if (response.status === 200) {
    dispatch(deleteComment(_id))
  }
}

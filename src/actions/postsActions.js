export const GET_POSTS = 'GET POSTS'
export const GET_POSTS_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POST_FAILURE'

export const getPost = () => ({ type: GET_POSTS })
export const getPostSuccess = post => ({
  type: GET_POSTS_SUCCESS,
  payload: post,
})
export const getPostFailure = () => ({ type: GET_POSTS_FAILURE })

export function fetchPosts(id) {
  return async dispatch => {
    dispatch(getPost())

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      )
      const data = await response.json()

      dispatch(getPostSuccess(data))
    } catch (error) {
      dispatch(getPostFailure())
    }
  }
}

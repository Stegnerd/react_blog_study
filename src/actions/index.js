import jsonPlaceholder from "../apis/jsonPlaceholder";

/*
  normal rules for actions
  1. creators must return action objects
  2. must have type property
  3. can optionally have payload


  thunk (async)
  1. a. can return action object 
  1. b. can return function (like below) (async)
*/

export const fetchPost = () => async dispatch => {
  // redux thunk allows us to return functions
  const response = await jsonPlaceholder.get("/posts");

  // we use redux thunk to manually dispatch after we have gotten our data back
  // that way there is no race condition
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

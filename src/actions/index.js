import _ from "lodash";
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

//id of the user we want to fetch
// this gets called each time the app starts up, redux creates the action creaters once on start up
// the inner part gets memoized
// side effect, can only get the user one time and only one time
// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// };

// // _ means private
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

// redux thunk lets us return a function in action creator
// looks like this function () {
//   return function (){}
// }
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // wait until the inner function resolves before we dispatch the outter one
  await dispatch(fetchPost());

  // // goes through all posts in state and pulls unique user id
  // const userIds = _.uniq(_.map(getState().posts, "userId"));

  // // we don't need to away this one, doesn't matter
  // userIds.forEach(id => dispatch(fetchUser(id)));

  // OR DO THE FOLLOWING BELOW

  // chains argument result of this and passes it as first argument into map, then result of map is passed into the next argument
  // looks like this uniq(map(getState().posts, "userId")).foreach(id => dispatch(fetchUser(id))).value
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

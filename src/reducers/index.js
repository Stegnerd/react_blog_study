import { combineReducers } from "redux";

import postsReducer from "./postsReducer";

// rules of reducers
// 1. Must return any value besides 'undefined'
// 2. Produces 'state;, or data to be used inside of your app using
//    only previous state an daction (reducers are pure)
// 3. must not return reach 'out of itself' to decide what value to return
// 4. must not mutate its input state argument

// when you need to do operations on the state object //#endregion
/**
 * remove an element
 * bad state.pop()
 * good state.filter(element => element !== "text")
 *
 * adding an element
 * bad stat.push("hi")
 * good [...state, "hi"]
 *
 * replacing an element
 * bad state[0] = "hi"
 * good state.map(el => el === "text" ? 'bye' : el)
 *
 * updating a property
 * bad state.name = 'new name'
 * good {...state, name: 'new name'}
 *
 * adding a property to an object
 * bad state.age = 30
 * good {...state, age:30}
 *
 * removing a property
 * bad delete state.name
 * good {...state, age: undefined} or _.omit(state, 'age')
 */

export default combineReducers({
  posts: postsReducer
});

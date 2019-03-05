// since handling list default state will be an array, reducers get run the first time on loadup
// with undefined in them, need to specify something
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};

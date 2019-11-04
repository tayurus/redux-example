const initialState = { number: 0 };

export const counterReducer = (state = initialState, action) => {
  console.log("reducer here");
  if (action.type === "increment") {
    return { number: state.number + 1 };
  } else if (action.type === "decrement") {
    return { number: state.number - 1 };
  } else {
    return state;
  }
};

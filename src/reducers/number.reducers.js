const initialState = {number: 17};



export const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {number: state.number + 1, shit: 'shit'};

    case 'DECREMENT':
      return {number: state.number - 1};

    case 'RETURN_INITIAL':
      return initialState;
    default:
      return state;
  }
}

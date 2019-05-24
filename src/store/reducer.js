const initialState = {
  value: ""
};

const reducer = (state = initialState, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value
    };
  }
  return state;
};

export default reducer;

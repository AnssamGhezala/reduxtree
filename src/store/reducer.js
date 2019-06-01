const initialState = {
  inputValue: ""
};

const reducer = (state = initialState, action) => {
  if (action.type === "USER_INPUT") {
    return {
      inputValue: action.inputValue
    };
  }
  return state;
};

export default reducer;

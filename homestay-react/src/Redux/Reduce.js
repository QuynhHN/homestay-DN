const initialState = {
  code: null,
};
const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONFIRM_EMAIL":
      return { ...state, code: action.payload };
    default:
      return state;
  }
};
export default apiReducer;

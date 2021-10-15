export const composeReducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN":
      return true;
    case "CLOSE":
      return false;
    default:
      return state;
  }
};

export const readMailReducer = (state = {}, action) => {
  switch (action.type) {
    case "OPENMAIL":
      return action.payload;
    case "CLOSEMAIL":
      return {};
    default:
      return state;
  }
};

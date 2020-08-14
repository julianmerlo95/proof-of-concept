const userLoggedData = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGGED":
      return (state = action.data);

    default:
      return state;
  }
};

export default userLoggedData;

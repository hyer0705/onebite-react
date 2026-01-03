export const ACTION_TYPES = {
  INIT: "INIT",
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INIT:
      return action.data;
    case ACTION_TYPES.CREATE:
      return [action.transaction, ...state];
    case ACTION_TYPES.UPDATE:
      return state.map((transaction) =>
        transaction.id === action.transaction.id ? action.transaction : transaction
      );
    case ACTION_TYPES.DELETE:
      return state.filter((transaction) => transaction.id !== action.id);
    default:
      return state;
  }
};

export default reducer;

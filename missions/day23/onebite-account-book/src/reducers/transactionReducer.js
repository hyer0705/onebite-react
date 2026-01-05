export const ACTION_TYPES = {
  INIT: "INIT",
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

const reducer = (state, action) => {
  let nextTransactions;

  switch (action.type) {
    case ACTION_TYPES.INIT:
      return action.data;
    case ACTION_TYPES.CREATE: {
      nextTransactions = [action.transaction, ...state];
      break;
    }
    case ACTION_TYPES.UPDATE: {
      nextTransactions = state.map((transaction) => (transaction.id === action.transaction.id ? action.transaction : transaction));
      break;
    }
    case ACTION_TYPES.DELETE: {
      nextTransactions = state.filter((transaction) => transaction.id !== action.id);
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("transactions", JSON.stringify(nextTransactions));
  return nextTransactions;
};

export default reducer;

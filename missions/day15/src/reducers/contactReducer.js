export function contactReducer(state, action) {
  switch (action.type) {
    case "CREATE_CONTACT":
      return [action.data, ...state];
    case "DELETE_CONTACT":
      return state.filter((contact) => contact.id !== action.id);
    default:
      return state;
  }
}

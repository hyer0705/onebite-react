import { CONTACT_ACTIONS } from "./types";

export function contactReducer(state, action) {
  switch (action.type) {
    case CONTACT_ACTIONS.CREATE:
      return [action.data, ...state];
    case CONTACT_ACTIONS.DELETE:
      return state.filter((contact) => contact.id !== action.id);
    default:
      return state;
  }
}

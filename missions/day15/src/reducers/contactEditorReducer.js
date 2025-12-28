import { EDITOR_ACTIONS } from "./types";

export function contactEditorReducer(state, action) {
  switch (action.type) {
    case EDITOR_ACTIONS.CHANGE_NAME:
      return { ...state, name: action.data };
    case EDITOR_ACTIONS.CHANGE_EMAIL:
      return { ...state, email: action.data };
    case EDITOR_ACTIONS.RESET:
      return { name: "", email: "" };
    default:
      return state;
  }
}

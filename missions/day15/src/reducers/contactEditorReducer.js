export function contactEditorReducer(state, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.data };
    case "CHANGE_EMAIL":
      return { ...state, email: action.data };
    case "RESET":
      return { name: "", email: "" };
    default:
      return state;
  }
}

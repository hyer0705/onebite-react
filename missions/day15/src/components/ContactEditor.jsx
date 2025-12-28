import { useReducer } from "react";
import "./ContactEditor.css";

export default function ContactEditor({ onCreate }) {
  const [contact, dispatch] = useReducer(
    (state, action) => {
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
    },
    { name: "", email: "" }
  );

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          value={contact.name}
          onChange={(e) => dispatch({ type: "CHANGE_NAME", data: e.target.value })}
          className="name"
          placeholder="이름 ..."
        />
        <input
          value={contact.email}
          onChange={(e) => dispatch({ type: "CHANGE_EMAIL", data: e.target.value })}
          className="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button
        onClick={() => {
          onCreate(contact);
          dispatch({ type: "RESET" });
        }}
      >
        Add
      </button>
    </div>
  );
}

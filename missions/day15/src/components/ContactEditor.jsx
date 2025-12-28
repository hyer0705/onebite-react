import { useReducer } from "react";
import "./ContactEditor.css";
import { contactEditorReducer } from "../reducers/contactEditorReducer";
import { EDITOR_ACTIONS } from "../reducers/types";

export default function ContactEditor({ onCreate }) {
  const [contact, dispatch] = useReducer(contactEditorReducer, {
    name: "",
    email: "",
  });

  const onChangeInput = (e) => {
    const actionType =
      e.target.name === "name"
        ? EDITOR_ACTIONS.CHANGE_NAME
        : EDITOR_ACTIONS.CHANGE_EMAIL;

    dispatch({
      type: actionType,
      data: e.target.value,
    });
  };

  const onClickAddButton = () => {
    onCreate(contact);
    dispatch({ type: EDITOR_ACTIONS.RESET });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input name="name" value={contact.name} onChange={onChangeInput} className="name" placeholder="이름 ..." />
        <input name="email" value={contact.email} onChange={onChangeInput} className="contact" placeholder="연락처(이메일) ..." />
      </div>
      <button onClick={onClickAddButton}>Add</button>
    </div>
  );
}

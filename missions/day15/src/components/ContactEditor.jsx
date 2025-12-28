import { useReducer } from "react";
import "./ContactEditor.css";
import { contactEditorReducer } from "../reducers/contactEditorReducer";

export default function ContactEditor({ onCreate }) {
  const [contact, dispatch] = useReducer(contactEditorReducer, {
    name: "",
    email: "",
  });

  const onChangeInput = (e) => {
    dispatch({
      type: `CHANGE_${e.target.name.toUpperCase()}`,
      data: e.target.value,
    });
  };

  const onClickAddButton = () => {
    onCreate(contact);
    dispatch({ type: "RESET" });
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

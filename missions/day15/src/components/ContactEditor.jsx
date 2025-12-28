import { useReducer, useRef, memo } from "react";
import "./ContactEditor.css";
import { contactEditorReducer } from "../reducers/contactEditorReducer";
import { EDITOR_ACTIONS } from "../reducers/types";

function ContactEditor({ onCreate }) {
  const [contact, dispatch] = useReducer(contactEditorReducer, {
    name: "",
    email: "",
  });

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const onChangeInput = (e) => {
    const actionType = e.target.name === "name" ? EDITOR_ACTIONS.CHANGE_NAME : EDITOR_ACTIONS.CHANGE_EMAIL;

    dispatch({
      type: actionType,
      data: e.target.value,
    });
  };

  const onKeyDownEmailInput = (e) => {
    if (e.key === "Enter") {
      onClickAddButton();
    }
  };

  const onClickAddButton = () => {
    if (contact.name === "") {
      nameInputRef.current.focus();
      return;
    }
    if (contact.email === "") {
      emailInputRef.current.focus();
      return;
    }

    onCreate(contact);
    dispatch({ type: EDITOR_ACTIONS.RESET });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          autoComplete="off"
          ref={nameInputRef}
          name="name"
          value={contact.name}
          onChange={onChangeInput}
          className="name"
          placeholder="이름 ..."
        />
        <input
          autoComplete="off"
          ref={emailInputRef}
          name="email"
          value={contact.email}
          onChange={onChangeInput}
          onKeyDown={onKeyDownEmailInput}
          className="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onClickAddButton}>Add</button>
    </div>
  );
}

export default memo(ContactEditor);

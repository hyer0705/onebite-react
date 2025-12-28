import { memo, useContext } from "react";
import "./ContactItem.css";
import { ContactDispatchContext } from "../App";

function ContactItem({ id, name, email }) {
  const { onRemoveContact } = useContext(ContactDispatchContext);
  const onClickRemoveButton = () => onRemoveContact(id);

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button onClick={onClickRemoveButton}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);

import { memo } from "react";
import "./ContactItem.css";

export default memo(function ContactItem({ id, name, email, onDelete }) {
  const onClickRemoveButton = () => onDelete(id);
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button onClick={onClickRemoveButton}>🗑️ Remove</button>
    </div>
  );
});

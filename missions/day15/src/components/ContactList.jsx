import { memo } from "react";
import "./ContactList.css";
import ContactItem from "./ContactItem";

export default memo(function ContactList({ contacts, onDelete }) {
  console.log("ContactList Rendered");

  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </div>
  );
});

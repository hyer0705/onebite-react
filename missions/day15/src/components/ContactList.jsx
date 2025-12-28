import { memo, useContext } from "react";
import "./ContactList.css";
import ContactItem from "./ContactItem";
import { ContactStateContext } from "../App";

function ContactList() {
  const contacts = useContext(ContactStateContext);

  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}

export default memo(ContactList);

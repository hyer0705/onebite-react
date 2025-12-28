import { useReducer, useRef } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { contactReducer } from "./reducers/contactReducer";
import { mockContacts } from "./data/contactData";

function App() {
  const contactId = useRef(3);
  const [contacts, dispatch] = useReducer(contactReducer, mockContacts);

  const onCreate = (data) => {
    const newContact = {
      ...data,
      id: contactId.current++,
    };

    dispatch({ type: "CREATE_CONTACT", data: newContact });
  };

  const onDelete = (id) => {
    dispatch({ type: "DELETE_CONTACT", id });
  };

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contacts={contacts} onDelete={onDelete} />
      </section>
    </div>
  );
}

export default App;

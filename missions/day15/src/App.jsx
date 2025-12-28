import { useReducer, useRef } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

const mockContacts = [
  {
    id: 1,
    name: "한입스튜디오",
    email: "onebite.fe@gmail.com",
  },
  {
    id: 2,
    name: "Lucy",
    email: "lucy.dev@gmail.com",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_CONTACT":
      return [action.data, ...state];
    case "DELETE_CONTACT":
      return state.filter((contact) => contact.id !== action.id);
    default:
      return state;
  }
}

function App() {
  const contactId = useRef(3);
  const [contacts, dispatch] = useReducer(reducer, mockContacts);

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

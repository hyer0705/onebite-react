import { useReducer } from "react";
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

function reducer() {}

function App() {
  const [contacts, dispatch] = useReducer(reducer, mockContacts);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor />
      </section>
      <section>
        <ContactList contacts={contacts} />
      </section>
    </div>
  );
}

export default App;

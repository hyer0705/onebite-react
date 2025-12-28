import { useReducer, useRef, useCallback, createContext, useMemo } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { contactReducer } from "./reducers/contactReducer";
import { CONTACT_ACTIONS } from "./reducers/types";
import { mockContacts } from "./data/contactData";

export const ContactStateContext = createContext(mockContacts);
export const ContactDispatchContext = createContext(null);

function App() {
  const contactId = useRef(3);
  const [contacts, dispatch] = useReducer(contactReducer, mockContacts);

  const onCreateContact = useCallback((data) => {
    const newContact = {
      ...data,
      id: contactId.current++,
    };

    dispatch({ type: CONTACT_ACTIONS.CREATE, data: newContact });
  }, []);

  const onRemoveContact = useCallback((id) => {
    dispatch({ type: CONTACT_ACTIONS.DELETE, id });
  }, []);

  const memoizedContactDispatch = useMemo(() => {
    return {
      onCreateContact,
      onRemoveContact,
    };
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactStateContext.Provider value={contacts}>
        <ContactDispatchContext.Provider value={memoizedContactDispatch}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;

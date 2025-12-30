import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import NewTransaction from "./pages/NewTransaction";
import EditTransaction from "./pages/EditTransaction";
import { createContext, useCallback, useMemo, useReducer, useRef } from "react";
import { mockData } from "./data/transactionMockData";

const TransactionStateContext = createContext();
const TransactionDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      break;
    case "CREATE":
      return [action.transaction, ...state];
    case "UPDATE":
      return state.map((transaction) => (transaction.id == action.transaction.id ? action.transaction : transaction));
    case "DELETE":
      return state.filter((transaction) => transaction.id != action.id);
  }

  return state;
};

function App() {
  const [transactions, setTransactions] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreateTransaction = useCallback((name, amount, type, category, date) => {
    setTransactions({
      type: "CREATE",
      transaction: {
        id: idRef.current++,
        name,
        amount,
        type,
        category,
        date,
      },
    });
  }, []);

  const onUpdateTransaction = useCallback((id, name, amount, type, category, date) => {
    setTransactions({
      type: "UPDATE",
      transaction: {
        id,
        name,
        amount,
        type,
        category,
        date,
      },
    });
  }, []);

  const onDeleteTransaction = useCallback((id) => {
    setTransactions({
      type: "DELETE",
      id,
    });
  }, []);

  const memoizedTransactionDispatch = useMemo(
    () => ({
      onCreateTransaction,
      onUpdateTransaction,
      onDeleteTransaction,
    }),
    []
  );

  return (
    <>
      <TransactionStateContext.Provider value={transactions}>
        <TransactionDispatchContext.Provider value={memoizedTransactionDispatch}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-transaction" element={<NewTransaction />} />
            <Route path="/edit-transaction/:id" element={<EditTransaction />} />
          </Routes>
        </TransactionDispatchContext.Provider>
      </TransactionStateContext.Provider>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import NewTransaction from "./pages/NewTransaction";
import EditTransaction from "./pages/EditTransaction";
import { TransactionProvider } from "./context/TransactionProvider";

function App() {
  return (
    <TransactionProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-transaction" element={<NewTransaction />} />
        <Route path="/edit-transaction/:id" element={<EditTransaction />} />
      </Routes>
    </TransactionProvider>
  );
}

export default App;

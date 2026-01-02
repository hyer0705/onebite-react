import TransactionEditor from "../components/TransactionEditor";
import { useTransactionDispatch } from "../context/TransactionContext";
import "./NewTransaction.css";

const NewTransaction = () => {
  const { onCreateTransaction } = useTransactionDispatch();

  return (
    <div className="new_transaction">
      <header>
        <h1>새로운 기록</h1>
      </header>
      <TransactionEditor onCreate={onCreateTransaction} />
    </div>
  );
};

export default NewTransaction;

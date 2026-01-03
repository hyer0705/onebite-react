import "./Home.css";
import { useTransactionState } from "../context/TransactionContext";
import TransactionItem from "../components/TransactionItem";
import { useNavigate } from "react-router";

const Home = () => {
  const nav = useNavigate();

  const transactions = useTransactionState();
  const getSorted = () => {
    return transactions.toSorted((a, b) => b.date - a.date);
  };

  const sortedTransactions = getSorted();

  const onCreateButtonClick = () => {
    nav("/new-transaction");
  };

  return (
    <section className="home">
      <header>
        <h1>한입 가계부</h1>
        <button onClick={onCreateButtonClick}>+ 작성하기</button>
      </header>
      <div className="home_transactions">
        {sortedTransactions.map((transaction) => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </div>
    </section>
  );
};

export default Home;

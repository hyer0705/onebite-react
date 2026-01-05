import { useEffect, useReducer, useRef, useState } from "react";
import { ACTION_TYPES } from "../reducers/transactionReducer";
import reducer from "../reducers/transactionReducer";

const useTransactionInit = () => {
  const [transactions, dispatch] = useReducer(reducer, []);
  const [isLoading, setIsLoading] = useState(true);
  const idRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const storedTransactions = localStorage.getItem("transactions");
        let initialTransactions = [];

        if (storedTransactions) {
          const parsedTransactions = JSON.parse(storedTransactions);
          if (Array.isArray(parsedTransactions)) {
            initialTransactions = parsedTransactions;
          }
        }

        if (initialTransactions.length > 0) {
          dispatch({
            type: ACTION_TYPES.INIT,
            data: initialTransactions,
          });
        }

        let maxId = -1;
        initialTransactions.forEach((transaction) => {
          maxId = Math.max(Number(transaction.id), maxId);
        });
        idRef.current = maxId + 1;
      } catch (error) {
        console.error("Failed to load transactions from localStorage", error);
        idRef.current = 0;
      } finally {
        setIsLoading(false);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return { transactions, dispatch, idRef, isLoading };
};

export default useTransactionInit;

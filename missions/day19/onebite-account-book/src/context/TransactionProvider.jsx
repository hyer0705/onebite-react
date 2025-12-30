import { useCallback, useMemo, useReducer, useRef } from "react";
import { mockData } from "../data/transactionMockData";
import reducer, { ACTION_TYPES } from "../reducers/transactionReducer";
import { TransactionStateContext, TransactionDispatchContext } from "./TransactionContext";

export const TransactionProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(mockData.length);

  const onCreateTransaction = useCallback((name, amount, type, category, date) => {
    dispatch({
      type: ACTION_TYPES.CREATE,
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
    dispatch({
      type: ACTION_TYPES.UPDATE,
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
    dispatch({
      type: ACTION_TYPES.DELETE,
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
    <TransactionStateContext.Provider value={transactions}>
      <TransactionDispatchContext.Provider value={memoizedTransactionDispatch}>{children}</TransactionDispatchContext.Provider>
    </TransactionStateContext.Provider>
  );
};

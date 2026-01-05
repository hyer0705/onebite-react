import { useCallback, useMemo } from "react";
import { ACTION_TYPES } from "../reducers/transactionReducer";
import { TransactionStateContext, TransactionDispatchContext } from "./TransactionContext";
import useTransactionInit from "../hooks/useTransactionInit";

export const TransactionProvider = ({ children }) => {
  const { transactions, dispatch, idRef, isLoading } = useTransactionInit();

  const onCreateTransaction = useCallback(
    (name, amount, type, category, date) => {
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
    },
    [dispatch, idRef]
  );

  const onUpdateTransaction = useCallback(
    (id, name, amount, type, category, date) => {
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
    },
    [dispatch]
  );

  const onDeleteTransaction = useCallback(
    (id) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        id,
      });
    },
    [dispatch]
  );

  const memoizedTransactionDispatch = useMemo(
    () => ({
      onCreateTransaction,
      onUpdateTransaction,
      onDeleteTransaction,
    }),
    [onCreateTransaction, onUpdateTransaction, onDeleteTransaction]
  );

  if (isLoading) {
    return <div className="loading-screen">데이터 로딩 중...</div>;
  }

  return (
    <TransactionStateContext.Provider value={transactions}>
      <TransactionDispatchContext.Provider value={memoizedTransactionDispatch}>{children}</TransactionDispatchContext.Provider>
    </TransactionStateContext.Provider>
  );
};

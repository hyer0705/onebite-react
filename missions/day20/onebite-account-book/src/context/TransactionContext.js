import { createContext, useContext } from "react";

export const TransactionStateContext = createContext();
export const TransactionDispatchContext = createContext();

export const useTransactionState = () => useContext(TransactionStateContext);
export const useTransactionDispatch = () => useContext(TransactionDispatchContext);

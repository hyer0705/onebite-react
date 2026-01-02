import { TRANSACTION_TYPES } from "../constants/transaction";

export const mockData = [
  {
    id: 0,
    name: "마라탕 & 꿔바로우",
    amount: 59000,
    type: TRANSACTION_TYPES.EXPENSE,
    category: "🍚 식비",
    date: new Date().getTime() + 1,
  },
  {
    id: 1,
    name: "월세",
    amount: 500000,
    type: TRANSACTION_TYPES.EXPENSE,
    category: "🏠 생활",
    date: new Date().getTime() + 2,
  },
  {
    id: 2,
    name: "월급",
    amount: 3500000,
    type: TRANSACTION_TYPES.INCOME,
    category: "🏢 급여",
    date: new Date().getTime() + 3,
  },
];

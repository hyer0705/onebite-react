import "./TransactionItem.css";
import { TRANSACTION_TYPES } from "../constants/transaction";
import { useTransactionDispatch } from "../context/TransactionContext";

const TransactionItem = ({ id, name, amount, type, category, date }) => {
  const { onDeleteTransaction } = useTransactionDispatch();

  const onDeleteButtonClick = () => {
    if (window.confirm("정말로 삭제하시겠습니까? 삭제하면 되돌릴 수 없습니다.")) {
      onDeleteTransaction(id);
    }
  };

  return (
    <div className="transaction_item_wrapper">
      <span className="item_category">{category}</span>
      <span className="item_name">{name}</span>
      <span className={`item_amount item_amount_${type}`}>{type === TRANSACTION_TYPES.EXPENSE ? `- ${amount}원` : `+ ${amount}원`}</span>
      <span className="item_date">{new Date(date).toLocaleDateString()}</span>
      <div className="item_button_wrapper">
        <button>수정</button>
        <button onClick={onDeleteButtonClick}>삭제</button>
      </div>
    </div>
  );
};

export default TransactionItem;

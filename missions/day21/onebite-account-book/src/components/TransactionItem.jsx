import "./TransactionItem.css";
import { TRANSACTION_TYPES } from "../constants/transaction";

const TransactionItem = ({ id, name, amount, type, category, date }) => {
  return (
    <div className="transaction_item_wrapper">
      <span className="item_category">{category}</span>
      <span className="item_name">{name}</span>
      <span className={`item_amount item_amount_${type}`}>
        {type === TRANSACTION_TYPES.EXPENSE ? `- ${amount}원` : `+ ${amount}원`}
      </span>
      <span className="item_date">{new Date(date).toLocaleDateString()}</span>
      <div className="item_button_wrapper">
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TransactionItem;

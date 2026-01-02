import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import "./TransactionEditor.css";
import { CATEGORIES, getCategory } from "../constants/categories";
import { TRANSACTION_TYPES } from "../constants/transaction";
import { getFormattedDate } from "../utils/getFormattedDate";

const TransactionEditor = ({ type, initData, onSave }) => {
  const nav = useNavigate();
  const typeRef = useRef();
  const nameRef = useRef();
  const amountRef = useRef();
  const categoryRef = useRef();
  const inputDateRef = useRef();

  const [transactionInput, setTransactionInput] = useState(
    type === "EDIT"
      ? {
          ...initData,
          date: getFormattedDate(initData.date),
          category: getCategory(initData.category),
        }
      : {
          type: TRANSACTION_TYPES.EXPENSE,
          name: "",
          amount: "",
          category: "food",
          date: "",
        }
  );

  const onChange = (e) => {
    setTransactionInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSaveButtonClick = () => {
    const { id, type: transactionType, name, amount, category, date } = transactionInput;

    if (transactionType === "") {
      typeRef.current.focus();
      return;
    } else if (name === "") {
      nameRef.current.focus();
      return;
    } else if (amount === "" || amount == 0) {
      amountRef.current.focus();
      return;
    } else if (category === "") {
      categoryRef.current.focus();
      return;
    } else if (date === "") {
      inputDateRef.current.focus();
      return;
    }

    if (type === "NEW") {
      onSave(name, amount, transactionType, CATEGORIES.get(category), new Date(date).getTime());
    } else if (type === "EDIT") {
      onSave(id, name, amount, transactionType, CATEGORIES.get(category), new Date(date).getTime());
    }

    nav("/", { replace: true });
  };

  const onCancelButtonClick = () => {
    nav("/", { replace: true });
  };

  const onInputDateClick = () => {
    inputDateRef.current.showPicker();
  };

  return (
    <div className="transaction_editor">
      <section className="type_section input_wrapper">
        <label>분류</label>
        <select ref={typeRef} value={transactionInput.type} name="type" onChange={onChange}>
          <option value={TRANSACTION_TYPES.EXPENSE}>지출</option>
          <option value={TRANSACTION_TYPES.INCOME}>수입</option>
        </select>
      </section>
      <section className="name_section input_wrapper">
        <label>지출/수입 이름</label>
        <input
          ref={nameRef}
          value={transactionInput.name}
          name="name"
          onChange={onChange}
          type="text"
          placeholder="지출 & 수입 이름을 입력하세요..."
        />
      </section>
      <section className="amount_section input_wrapper">
        <label>지출/수입 금액</label>
        <input ref={amountRef} value={transactionInput.amount} name="amount" onChange={onChange} type="number" placeholder="금액을 입력하세요" />
      </section>
      <section className="category_section input_wrapper">
        <label>카테고리</label>
        <select ref={categoryRef} value={transactionInput.category} name="category" onChange={onChange}>
          {[...CATEGORIES].map(([key, value], i) => (
            <option key={`${i}_${key}`} value={key}>
              {value}
            </option>
          ))}
        </select>
      </section>
      <section className="date_section input_wrapper">
        <label>날짜</label>
        <input onClick={onInputDateClick} ref={inputDateRef} type="date" value={transactionInput.date} name="date" onChange={onChange} />
      </section>
      <section className="button_section">
        <button className="save_button" onClick={onSaveButtonClick}>
          저장
        </button>
        <button className="cancel_button" onClick={onCancelButtonClick}>
          취소
        </button>
      </section>
    </div>
  );
};

export default TransactionEditor;

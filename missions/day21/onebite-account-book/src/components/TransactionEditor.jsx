import "./TransactionEditor.css";

const categories = [
  {
    id: 1,
    name: "🍚 식비",
    value: "food",
  },
  {
    id: 2,
    name: "💧 구독",
    value: "subscribe",
  },
  {
    id: 3,
    name: "🏠 생활",
    value: "life",
  },
  {
    id: 4,
    name: "🏢 급여",
    value: "salary",
  },
  {
    id: 5,
    name: "💰 금융",
    value: "bank",
  },
];

const TransactionEditor = () => {
  return (
    <div className="transaction_editor">
      <section className="type_section input_wrapper">
        <label>분류</label>
        <select>
          <option value="expense">지출</option>
          <option value="income">수입</option>
        </select>
      </section>
      <section className="name_section input_wrapper">
        <label>지출/수입 이름</label>
        <input type="text" placeholder="지출 & 수입 이름을 입력하세요..." />
      </section>
      <section className="amount_section input_wrapper">
        <label>지출/수입 금액</label>
        <input type="number" placeholder="금액을 입력하세요" />
      </section>
      <section className="category_section input_wrapper">
        <label>카테고리</label>
        <select>
          {categories.map((category) => (
            <option key={category.id} value={category.value}>
              {category.name}
            </option>
          ))}
        </select>
      </section>
      <section className="date_section input_wrapper">
        <label>날짜</label>
        <input type="date" />
      </section>
      <section className="button_section">
        <button className="save_button">저장</button>
        <button className="cancel_button">취소</button>
      </section>
    </div>
  );
};

export default TransactionEditor;

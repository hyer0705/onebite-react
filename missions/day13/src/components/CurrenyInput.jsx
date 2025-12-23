const CurrencyInput = ({ label, money, onChangeInput }) => {
  return (
    <div>
      <label>{label}: </label>
      <input
        type="number"
        placeholder="0"
        value={money}
        onChange={(e) => {
          onChangeInput(label, e.target.value);
        }}
      />
    </div>
  );
};

export default CurrencyInput;

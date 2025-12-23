import { useState } from "react";
import "./App.css";
import CurrencyInput from "./components/CurrenyInput";
import { EXCHANGE_RATES } from "./data/exchange";

function App() {
  const [currency, setCurrency] = useState({
    krw: "",
    usd: "",
  });

  const onChangeInput = (label, value) => {
    setCurrency((prevCurrency) => {
      const newCurrency = { ...prevCurrency };

      if (label === "krw") {
        newCurrency.krw = value;
        newCurrency.usd = Number(value) / EXCHANGE_RATES;
      } else if (label === "usd") {
        newCurrency.usd = value;
        newCurrency.krw = Number(value) * EXCHANGE_RATES;
      }

      return newCurrency;
    });
  };

  return (
    <>
      <h1>환율 변환기 (KRW-USD)</h1>
      {Object.keys(currency).map((key) => (
        <CurrencyInput key={key} label={key} money={currency[key]} onChangeInput={onChangeInput} />
      ))}
    </>
  );
}

export default App;

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import "./EditTransaction.css";
import TransactionEditor from "../components/TransactionEditor";
import { useTransactionDispatch, useTransactionState } from "../context/TransactionContext";

const EditTransaction = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const transactions = useTransactionState();
  const { onUpdateTransaction } = useTransactionDispatch();

  const currentInitData = transactions.find((transaction) => String(transaction.id) === String(id));

  useEffect(() => {
    if (!currentInitData) {
      window.alert("존재하지 않는 거래내역 입니다.");
      nav("/", { replace: true });
    }
  }, [currentInitData, nav]);

  if (!currentInitData) {
    return <h1>데이터 로딩 중...</h1>;
  }

  return (
    <div className="edit_transaction">
      <header>
        <h1>기록 수정하기</h1>
      </header>
      <TransactionEditor type="EDIT" initData={currentInitData} onSave={onUpdateTransaction} />
    </div>
  );
};

export default EditTransaction;

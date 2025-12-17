import "./App.css";

function Welcome({ name, isMember }) {
  if (isMember) {
    return <h1>{name}님, 다시 오셨군요.</h1>;
  }

  return <h1>{name}님, 가입하시겠어요?</h1>;
}

function App() {
  return (
    <>
      <Welcome name="Lucy" isMember={false} />
    </>
  );
}

export default App;

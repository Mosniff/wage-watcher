import "./App.css";
import ProgressBar from "./components/ProgressBar";

const moneyEarnedToday = "45.30";
const moneyEarnedThisMonth = "1355.90";
const moneyEarnedThisYear = "12600.75";

function App() {
  return (
    <>
      <ProgressBar progressBarWidth={50} />
      <div>You've earned ${moneyEarnedToday} today!</div>
      <ProgressBar progressBarWidth={70} />
      <div>You've earned ${moneyEarnedThisMonth} this month!</div>
      <ProgressBar progressBarWidth={75} />
      <div>You've earned ${moneyEarnedThisYear} this year!</div>
    </>
  );
}

export default App;

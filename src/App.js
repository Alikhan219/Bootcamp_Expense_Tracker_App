import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="text_center">Expense Tracker</h1>

      <h3>
        Your Balance <br /> $260
      </h3>
      <div className="expense_container">
        <h3>
          Income <br /> $260
        </h3>
        <h3>
          Expense <br /> $260
        </h3>
      </div>
      <h3>History</h3>
      <hr />
      <h3>Add New Transaction</h3>
      <br />
      <form className="Transaction_form">
        <div className="form_control">
          <label for="text">Text</label>
          <br />
          <input type="text" placeholder="Enter text..."/>
        </div>
        <br />
        <div className="form_control">
          <label for="number">Amount
          <br />
          (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter amount..."/>
        </div>
        <br />
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default App;

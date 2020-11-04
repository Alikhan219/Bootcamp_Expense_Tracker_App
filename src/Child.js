import React, { useState } from "react";
import "./App.css";

function Child() {
  
  const [amount, setAmount] = useState({
    thing: '',
    amounts: '',
  });

  const inputEvent = (event) => {
    const { value, name } = event.target;
    setAmount((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const onSubmit = (event) => {
    
}
  return (
    <div className="container">
      <h1 className="text_center">Expense Tracker</h1>

      <h3>
        Your Balance <br />
        <span className="big-txt"> PKR 260.00</span>
      </h3>
      <div className="expense_container">
        <h3 className="IandE">
          Income <br /> <span className="income-h3">{amount.amounts}</span>
        </h3>
        <h3 className="IandE">
          Expense <br />
          <span className="expense-h3"> PKR 260.00</span>
        </h3>
      </div>
      <h3 className="border">History</h3>
      <div className="hist-div">
        <h4 className="hist-txt">{amount.thing}</h4>
        <h4 className="hist-amount"> {amount.amounts}</h4>
      </div>

      <h3 className="bottom">Add New Transaction</h3>
      <br />
      <form className="Transaction_form" onSubmit={onSubmit}>
        <div className="form_control">
          <label for="text">Text</label>

          <input
           name="thing"
            type="text"
            placeholder="Enter text..."
            onChange={inputEvent}
            value={amount.thing}
          />
        </div>
        <br />
        <div className="form_control">
          <label for="number">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input
            name="amounts"
            type="number"
            placeholder="Enter amount..."
            onChange={inputEvent}
            value={amount.amounts}
          />
        </div>
        <br />
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default Child;

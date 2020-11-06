import React, { useContext, useState } from "react";
import "./App.css";
import { TransactionContext } from "./TransContext";

function Child() {
  let {transactions, addTransaction} = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("")
  let [newAmount, setAmount] = useState("")
  
   const handleAddition=(event)=>{
      event.preventDefault();
      console.log(newDesc, newAmount)
      addTransaction({
        amount: newAmount,
        desc: newDesc
      })
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
          Income <br /> <span className="income-h3">PKR 360.00</span>
        </h3>
        <h3 className="IandE">
          Expense <br />
          <span className="expense-h3"> PKR 260.00</span>
        </h3>
      </div>
      <h3 className="border">History</h3>
      <ul className="hist-div">
        {transactions.map((transOb, indx) => {
          return (
            <li key={indx}>
              <span>{transOb.desc}</span>
              <span>{transOb.amount}</span>
            </li>
          );
        })}
      </ul>

      <h3 className="bottom">Add New Transaction</h3>
      <br />
      <form className="Transaction_form" onSubmit={handleAddition}>
        <div className="form_control">
          <label for="text">Text</label>

          <input name="thing" type="text" placeholder="Enter text..." onChange={(ev)=>setDesc(ev.target.value)} required/>
        </div>
        <br />
        <div className="form_control">
          <label for="number">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input name="amounts" type="number" placeholder="Enter amount..." onChange={(ev)=>setAmount(ev.target.value)} required/>
        </div>
        <br />
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default Child;

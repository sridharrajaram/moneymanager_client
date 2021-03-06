import React, { useState } from "react";
import "./ExpenseForm.css";
import axios from "axios";

const UrlLink = "https://sridharrajaram-moneymanager.herokuapp.com";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExpenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    if (title !== "" && amount !== "" && date !== "")
      props.onFormSubmit(newExpenseData);
    try {
      await axios.post(`${UrlLink}/expense/addExpense`, newExpenseData, {
        headers: {
          Authorization: window.localStorage.getItem("app_token"),
        },
      });
      setTitle("");
      setAmount("");
      setDate("");
    } catch (error) {
      console.log(error);
    }
  };

  const closeModalHandler = () => {
    props.onModalChange();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={handleTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="1" value={amount} onChange={handleAmount} />
        </div>
        <div className="new-expense__control">
          <label>Expense date</label>
          <input type="date" value={date} onChange={handleDate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={closeModalHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

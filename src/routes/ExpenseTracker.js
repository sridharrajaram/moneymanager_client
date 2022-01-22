import React, { useEffect, useState } from "react";
import Expenses from "../components/Expenses/Expenses";
import NewExpense from "../components/NewExpense/NewExpense";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const UrlLink = "https://sridharrajaram-moneymanager.herokuapp.com";

function ExpenseTracker() {
  const navigate = useNavigate();
  const [expense, setExpense] = useState([]);

  const fetch = async () => {
    try {
      let data = await axios.get(`${UrlLink}/expense`, {
        headers: {
          Authorization: window.localStorage.getItem("app_token"),
        },
      });
      setExpense(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const addExpenseHandler = (newExpense) => {
    setExpense((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <>
      <div dir="rtl">
        <button
          className="btn btn-primary"
          onClick={() => {
            window.localStorage.removeItem("app_token");
            navigate("/login");
          }}
        >
          logout
        </button>
      </div>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expense} />
      </div>
    </>
  );
}

export default ExpenseTracker;

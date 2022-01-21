import React, { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import axios from "axios";

const beUrl = "https://sridharrajaram-moneymanager.herokuapp.com";

function App() {
  
  const [expense, setExpense] = useState([]);

  useEffect(()=>{
    async function fetch(){
      let data = await axios.get(`${beUrl}/expense`);
      setExpense(data.data);
    }
    fetch();
  },[])

  const addExpenseHandler = (newExpense) => {
    setExpense((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../Card/Card";
import "./Expenses.css";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseChart from "../ExpenseChart/ExpenseChart";

const Expenses = (props) => {
  const [selected, setSelected] = useState("2022");

  const storeYearValue = (selectValue) => {
    setSelected(selectValue);
  };

  const filteredData = props.items.filter(
    (expense) =>{return new Date(expense.date).getFullYear().toString() === selected;}
  );

  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={storeYearValue} selected={selected} />
      <ExpenseChart expenses={filteredData} />
      <ExpenseList items={filteredData} />
    </Card>
  );
};

export default Expenses;

import React , { useState } from 'react';
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => { 

  const [modalState, setModalState] = useState(false);

  const saveNewExpenseItem = (newExpenseItem) => {
    const data = {
      ...newExpenseItem,
      id: Math.random().toString()
    }
    props.onAddExpense(data);
    setModalState(false);
  }

  const openModalHandler = () => {
    setModalState(true);
  }

return (
  <div className="new-expense">
    {!modalState &&
      <button type="button" onClick={openModalHandler}>Add New Expense</button>
    }
    {modalState && <ExpenseForm onFormSubmit={saveNewExpenseItem} onModalChange={()=>{setModalState(false)}}/>}
  </div>
);
}
export default NewExpense;
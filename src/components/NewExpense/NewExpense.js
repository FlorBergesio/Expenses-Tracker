import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ( props ) => {
  const [ formVisibility, setFormVisibility ] = useState( false );

  const saveExpenseDataHandler = ( enteredExpenseData ) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense( expenseData );
    setFormVisibility( false );
  };

  const showFormHandler = () => {
    setFormVisibility( true );
  };

  const hideFormHandler = () => {
    setFormVisibility( false );
  };

  return (
    <div className="new-expense">
      { formVisibility
        ? <ExpenseForm 
            onSaveExpenseData={ saveExpenseDataHandler } 
            onCancel={ hideFormHandler }
          />
        : <button onClick={ showFormHandler }>Add new expense</button>
      }
    </div>
  );
};

export default NewExpense;
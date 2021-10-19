import { useState } from 'react';

import './ExpensesContainer.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const ExpensesContainer = ( { expenses } ) => {
  const [ filteredYear, setFilteredYear ] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear( selectedYear );
    console.log( selectedYear );
  };

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if ( filteredExpenses.length > 0 ) {
    expensesContent = filteredExpenses.map( item => (
      <ExpenseItem
        key={ item.id }
        title={ item.title }
        amount={ item.amount }
        date={ item.date }
      />
    ))
  }

  return (
    <Card className="expenses">
      <ExpensesFilter 
        onChangeFilter={ filterChangeHandler } 
        selected={ filteredYear }
      />

      { expensesContent }
    </Card>
  );
};

export default ExpensesContainer;

import { useState } from 'react';

import './ExpensesContainer.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const ExpensesContainer = ( { expenses } ) => {
  const [ filteredYear, setFilteredYear ] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear( selectedYear );
    console.log( selectedYear );
  };

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter 
        onChangeFilter={ filterChangeHandler } 
        selected={ filteredYear }
      />
      <ExpensesChart expenses={ filteredExpenses } />
      <ExpensesList expenses={ filteredExpenses } />
    </Card>
  );
};

export default ExpensesContainer;

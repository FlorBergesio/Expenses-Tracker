import { useState } from 'react';

import './ExpensesContainer.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const ExpensesContainer = ( { expenses } ) => {
  const [ filteredYear, setFilteredYear ] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear( selectedYear );
    console.log( selectedYear );
  };

  return (
    <Card className="expenses">
      <ExpensesFilter 
        onChangeFilter={ filterChangeHandler } 
        selected={ filteredYear }
      />

      {
        expenses.map( item => (
          <ExpenseItem
            title={ item.title }
            amount={ item.amount }
            date={ item.date }
          />
        ))
      }
    </Card>
  );
};

export default ExpensesContainer;

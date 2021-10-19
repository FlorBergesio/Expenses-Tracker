import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ( { expenses } ) => {
  if ( expenses.length === 0 ) {
    return (
      <h2 className="expenses-list__fallback">No expenses found.</h2>
    );
  }

  return (
    <ul className="expenses-list">
      { 
        expenses.map( item => (
          <ExpenseItem
            key={ item.id }
            title={ item.title }
            amount={ item.amount }
            date={ item.date }
          />
        ))
      }
    </ul>
  );
};

export default ExpensesList;

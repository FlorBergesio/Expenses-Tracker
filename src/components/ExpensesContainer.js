import './ExpensesContainer.css';
import ExpenseItem from './ExpenseItem';

const ExpensesContainer = ( { expenses } ) => {
  return (
    <div className="expenses">
      {
        expenses.map( item => (
          <ExpenseItem
            title={ item.title }
            amount={ item.amount }
            date={ item.date }
          />
        ))
      }
    </div>
  );
};

export default ExpensesContainer;

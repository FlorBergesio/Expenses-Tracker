import './ExpensesContainer.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';

const ExpensesContainer = ( { expenses } ) => {
  return (
    <Card className="expenses">
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

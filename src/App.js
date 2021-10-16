import { useState } from "react";

import ExpensesContainer from "./components/Expenses/ExpensesContainer";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: "e1",
    title: "PC mouse",
    amount: 979.0,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Groceries",
    amount: 1842.7,
    date: new Date(2021, 5, 4),
  },
  {
    id: "e3",
    title: "Doctor's appointment",
    amount: 1500.0,
    date: new Date(2021, 10, 4),
  },
  {
    id: "e4",
    title: "Presents",
    amount: 2451.99,
    date: new Date(2021, 12, 1),
  },
];

const App = () => {
  const [ expenses, setExpenses ] = useState( initialExpenses );

  const addExpenseHandler = expense => {
    setExpenses( prevState => ( [ expense, ...prevState ] ) )
  };

  return (
    <div>
      <NewExpense onAddExpense={ addExpenseHandler } />
      <ExpensesContainer
        expenses={ expenses }
      />
    </div>
  );
};

export default App;

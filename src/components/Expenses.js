import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
export default function Expenses(props) {
  //   console.log(props.expenses[0].title);
  return (
    <div>
      <div className="expenses">
        <ExpenseItem expenseitem={props.expenses[0]} />
      </div>
      <div className="expenses">
        <ExpenseItem expenseitem={props.expenses[1]} />
      </div>
      <div className="expenses">
        <ExpenseItem expenseitem={props.expenses[2]} />
      </div>
      <div className="expenses">
        <ExpenseItem expenseitem={props.expenses[3]} />
      </div>
    </div>
  );
}

import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import "../Expenses/Expenses.css";
import "../Expenses/ExpenseItem.css";
const Expenses = (props) => {
  //   console.log(props.expenses[0].title);
  return (
    <Card className="expenses">
      {props.expenses.map((item) => (
        <Card>
          <ExpenseItem expenseitem={item} />
        </Card>
      ))}
    </Card>
    /* <div>
        <ExpenseItem expenseitem={props.expenses[0]} />
      </div>
      <div>
        <ExpenseItem expenseitem={props.expenses[1]} />
      </div>
      <div>
        <ExpenseItem expenseitem={props.expenses[2]} />
      </div>
      <div>
        <ExpenseItem expenseitem={props.expenses[3]} />
      </div> */
  );
};
export default Expenses;

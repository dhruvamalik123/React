import Card from "../UI/Card";
import "../Expenses/ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseitem.date} />
      <div className="expense-item__description">
        <h2>{props.expenseitem.title}</h2>
        <div className="expense-item__price">${props.expenseitem.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;

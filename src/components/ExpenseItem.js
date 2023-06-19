import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.expenseitem.date} />
      <div className="expense-item__description">
        <h2>{props.expenseitem.title}</h2>
        <div className="expense-item__price">${props.expenseitem.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;

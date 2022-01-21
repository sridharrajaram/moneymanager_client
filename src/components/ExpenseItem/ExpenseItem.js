import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';
import ExpenseDetail from '../ExpenseDetail/ExpenseDetail';
import Card from '../Card/Card';

function ExpenseItem (props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate {...props}/>
        <ExpenseDetail title={props.title} amount={props.amount}/>
      </Card>
    </li>
  
  );
}
export default ExpenseItem;
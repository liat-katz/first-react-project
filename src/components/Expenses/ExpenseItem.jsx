import './ExpenseItem.css';
import Card from '../UI/Card.jsx';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    //the above "props" arg is one object that holds all the properties that we pass in the App.jsx file

    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
    <div className="expense-item__description">
        <h2>{props.title}</h2> 
        {/* curly braces let us either do math expressions in them or use functions, or refer to variables created beforehand */}
        <div className="expense-item__price">${props.amount}</div>
        </div>
    </Card>
    )
}
// the className imports the css style element
export default ExpenseItem;
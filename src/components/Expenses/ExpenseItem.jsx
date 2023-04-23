import React, { useState } from 'react';
// useState is used to define values as state where changes to the values should be reflected in the component function being called again
import './ExpenseItem.css';
import Card from '../UI/Card.jsx';
import ExpenseDate from './ExpenseDate';


const ExpenseItem = (props) => {
    //the above "props" arg is one object that holds all the properties that we pass in the App.jsx file
    const [title, setTitle]=useState(props.title); //requires an initial value to be passed into the useState function
    //useState returns an array where the first value is the initial value and the second element is the updating function
    
    const clickHandler=() => {
        setTitle(prompt("What is the new expense?"));
        // the above function calls the below function once again with the new value
        console.log(title);
    }

    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
    <div className="expense-item__description">
        <h2>{title}</h2> 
        {/* curly braces let us either do math expressions in them or use functions, or refer to variables created beforehand */}
        <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Item</button>
        {/* no need for parentheses when calling this function, since we just point to the function as a value */}
    </Card>
    )
}
// the className imports the css style element
export default ExpenseItem;
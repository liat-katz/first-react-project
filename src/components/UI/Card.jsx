import './Card.css';

function Card(props) {
    // need to add a class to the card so that it can be styled
    const classes= 'card '+ props.className;
    return (<div className={classes}>{props.children}</div>)
};

export default Card ;
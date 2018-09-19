import React from 'react';
import classes from './Order.css';


export default class Order extends React.Component {

  render() {
    const ingredients = [];
    for (let ingredientName in this.props.ingredients) {
      ingredients.push({ name: ingredientName, amount: this.props.ingredients[ingredientName] })
    }
    const ingredientOutput = ingredients.map(ig => {
      return <span
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px'
        }}
        key={ig.name}>{ig.name} ({ig.amount})</span>;
    });
    return (
      <div className={classes.Order} >
        <p>Ingredients: {ingredientOutput}</p>
        <p>Price: <strong>GBP {Number.parseFloat(this.props.price.toFixed(2))}</strong></p>
      </div>
    );
  }

}
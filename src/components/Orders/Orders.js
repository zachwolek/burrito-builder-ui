import React from "react";
import "./Orders.css";

const Orders = ({ orders }) => {
  console.log("PROPS :", orders)
  const orderEls = orders.map(order => {
    //TypeError: orders.map is not a function
    //at Orders (Orders.js:6:1)
    return (
      <div className="order">
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map((ingredient) => {
            return <li>{ingredient}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <section>{orderEls.length ? orderEls : <p>No orders yet!</p>}</section>
  );
};

export default Orders;

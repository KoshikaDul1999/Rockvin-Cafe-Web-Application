import React, { useEffect, useState } from 'react';
import './POSDashboard.css';
import axios from 'axios';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul className="navigation-list">
        <li><a href="#">Breakfast</a></li>
        <li><a href="#">Lunch</a></li>
        <li><a href="#">Dinner</a></li>
        <li><a href="#">Beverages</a></li>
      </ul>
    </nav>
  );
};



const CartPage = () => {

  const [cartItems, setCartItems] = useState([]);
  



  const getSessionData = () => {

    const data = JSON.parse(sessionStorage.getItem('cart'));
    setCartItems(data);
    
  };



  const handleQuantityChange = (itemId, quantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const handleDelete = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  const updateprice = (id,value,price)=>{
    document.getElementById(id).innerHTML= `RS ${value*price}`;
  }

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.food_id !== itemId);
    setCartItems(updatedCartItems);
    sessionStorage.removeItem('cart');
    sessionStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  useEffect(() => {
    getSessionData();
  }, [])

  return (
    <div>
      <NavigationBar />
      <h1>Shopping Cart</h1>
      <table className="cart-items">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <>
              <tr className="cart-item">
                <td>
                  <img src={item.image} alt={item.food_name} className="cart-item-image" />
                </td>
                <td>{item.food_name}</td>
                <td>RS. {item.food_price}</td>
                <td>
                <input
  type="number"
  min="1"
  defaultValue={1}
  onChange={(e) => updateprice(item.food_id, e.target.value, item.food_price)}
  style={{ width: '50px' }}
/>

                </td>
                <td id={item.food_id}>RS.{item.food_price}</td>
                <td>
                  <button className="delete-button" onClick={()=>handleRemoveItem(item.food_id)}>
                    Delete
                  </button>
                </td>
              </tr>

              
            </>
          ))}
        </tbody>
      </table>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default CartPage;

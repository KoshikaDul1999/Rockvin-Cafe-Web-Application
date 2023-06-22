import React, { useEffect, useState } from 'react';
import './POSDashboard.css';
import axios from 'axios';


const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul className="navigation-list">
      <li><a href="../Dashboard/"><i className="fa-solid fa-home"></i></a></li>
        <li><a href="/productView">Breakfast</a></li>
        <li><a href="/lunchView">Lunch</a></li>
        <li><a href="/dinnerView">Dinner</a></li>
        <li><a href="beveragesView">Beverages</a></li>
      </ul>
    </nav>
  );
};



const CartPage = () => {

  const [cartItems, setCartItems] = useState([]);
  
  const imageSrc = `/images/foods/`;

  const [total, setTotal] = useState(0);




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

  const updateTotal = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.food_price;
    });
    setTotal(totalPrice);
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

  useEffect(() => {
    updateTotal();
  }, [cartItems]);
  

  return (
    <div>
      <NavigationBar /><br></br><br></br>
      <h1>Shopping Cart</h1><br></br>
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
                  <img src={`${imageSrc}${item.food_img}`} alt={item.food_name} className="cart-item-image" />
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
      <div className="total-amount">Total: RS. {total}</div>

      <a href="/payMethod"> <button className="checkout-button">Checkout</button></a>
    </div>
  );
};

export default CartPage;

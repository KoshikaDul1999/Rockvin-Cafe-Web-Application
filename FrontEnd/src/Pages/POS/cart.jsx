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
  const [newcartItems, setNewCartItems] = useState([]);
  const imageSrc = `/images/foods/`;
  const [total, setTotal] = useState(0);
  const newdata = [];

  const getSessionData = () => {
    const data = JSON.parse(sessionStorage.getItem('cart'));
    setCartItems(data);
    data.forEach((item, index) => {
      const newItemData = {
        itemId: item.food_id,
        food_name: item.food_name,
        food_price:item.price,
        quantity: item.quantity,
      };

      newdata.push(newItemData);
    },[]);
    setNewCartItems(newdata);
    sessionStorage.setItem('newcart', JSON.stringify(newdata));
    updateTotal();
  };

  const createNewSessionStorage = (value, itemId, qun) => {
    
      const updatedCartItems = newcartItems.filter((item) => item.itemId !== value.food_id);
      
      sessionStorage.removeItem('newcart');

      const newItemData = {
        itemId: value.food_id,
        food_name: value.food_name,
        food_price: value.price,
        quantity: qun,
      };
      newdata.push(newItemData);


      updatedCartItems.forEach((item, index) => {
        const newItemData = {
          itemId: item.itemId,
          food_name: item.food_name,
          food_price: item.food_price,
          quantity: item.quantity,
        };
        newdata.push(newItemData);
      });

    sessionStorage.setItem('newcart', JSON.stringify(newdata));
    setNewCartItems(newdata);
    console.log(JSON.parse(sessionStorage.getItem('newcart')));
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
    newcartItems.forEach((item) => {
      totalPrice += item.food_price * item.quantity; // Multiply price by quantity
    });
    setTotal(totalPrice);
  };

  const handleDelete = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  const updateprice = (id, value, price, item) => {
    createNewSessionStorage(item, id, value)
    document.getElementById(id).innerHTML = `RS ${value * price}`;
    updateTotal();
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.food_id !== itemId);
    setCartItems(updatedCartItems);
    sessionStorage.removeItem('cart');
    sessionStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };


  useEffect(() => {
    getSessionData();
  }, []);

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
            
            <tr className="cart-item" key={item.food_id}>
              <td>
                <img src={`${imageSrc}${item.food_img}`} alt={item.food_name} className="cart-item-image" />
              </td>
              <td>{item.food_name}</td>
              <td>RS. {item.food_price}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateprice(item.food_id, e.target.value, item.food_price, item)}
                  style={{ width: '50px' }}
                />
              </td>
              <td id={item.food_id}>RS.{item.food_price * item.quantity}</td>
              <td>
                <button className="delete-button" onClick={() => handleRemoveItem(item.food_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-amount">Total: RS. {total}</div>
      <a href="/payMethod"> <button className="checkout-button">Checkout</button></a>
    </div>
  );
};

export default CartPage;

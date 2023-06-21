import React, { useEffect, useState } from 'react';
import './POSDashboard.css';
import axios from 'axios';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul className="navigation-list">
        <li><a href="/productView">Breakfast</a></li>
        <li><a href="/lunchView">Lunch</a></li>
        <li><a href="/dinnerView">Dinner</a></li>
        <li><a href="beveragesView">Beverages</a></li>
        <li><a href="/viewcart" className='btn btn-primary'><i class="fa-solid fa-cart-shopping"></i></a></li>
      </ul>
    </nav>
  );
};

const Product = ({ product, addToCart }) => {
  const { food_name, food_price, food_img } = product;
  const imageSrc = `../../../images/foods/dinner/${food_img}`;
  const data = [];

  const handleAddToCart = () => {
    addToCart(product);
  };

  const setSessionData = (value) => {
    const temp = JSON.parse(sessionStorage.getItem('cart'));

    if (temp != null) {
      temp.forEach((d) => {
        data.push(d);
      });
    }

    data.push(value);
    sessionStorage.setItem('cart', JSON.stringify(data));
  };

  return (
    <div className="product">
      <img src={imageSrc} alt={food_name} className="product-image" style={{ width: '640px', height: '640px' }} />
      <h3 className="product-name">{food_name}</h3>
      <p className="product-price">Rs {food_price}</p>
      <button className="add-to-cart-button" onClick={() => setSessionData(product)}>Add to Cart</button>
    </div>
  );
};

const ProductView = () => {
  const [foods, setFoods] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('http://localhost:5000/foods');
        setFoods(response.data);
      } catch (error) {
        console.log('Error fetching foods:', error);
      }
    };

    fetchFoods();
  }, []);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  // Filter foods by food_cat_id === 1
  const filteredFoods = foods.filter((product) => product.food_cat_id === 3);

  return (
    <div>
      <div className="header">
        <NavigationBar />
      </div>
      <div className="product-list">{filteredFoods.map((product) => (
  <Product key={product.id} product={product} addToCart={addToCart} />
))}</div>
    </div>
  );
};

export default ProductView;

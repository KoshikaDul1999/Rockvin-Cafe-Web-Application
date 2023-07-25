import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul className="navigation-list">
        <li><a href="../Dashboard/"><i className="fa-solid fa-home"></i></a></li>
        <li className="active"><a href="/productView">Breakfast</a></li>
        <li><a href="/lunchView">Lunch</a></li>
        <li><a href="/dinnerView">Dinner</a></li>
        <li><a href="beveragesView">Beverages</a></li>
        <li><a href="/viewcart" className='btn btn-primary'><i className="fa-solid fa-cart-shopping"></i></a></li>
      </ul>
    </nav>
  );
};

const Product = ({ product, addToCart }) => {
  const { food_name, food_price, food_img } = product;
  const imageSrc = `/images/foods/${food_img}`;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={imageSrc} alt={food_name} style={{ width: '50px', height: '50px', borderRadius: '4px' }} />
      </div>
      <div className="product-details">
        <h3 className="product-name">{food_name}</h3>
        <p className="product-price">Rs {food_price.toFixed(2)}</p>
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
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
    const isItemInCart = cartItems.some((item) => item.id === product.id);

    if (isItemInCart) {
      alert('Item has been added to the cart already!');
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, product]);
      sessionStorage.setItem('cart', JSON.stringify([...cartItems, product])); // Store updated cartItems in sessionStorage
    }
  };

  const filteredFoods = foods.filter((product) => product.food_cat_id === 1);

  return (
    <div>
      <div className="header">
        <NavigationBar />
        <br />
      </div>
      <div className="product-list">
        {filteredFoods.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductView;

import React, { useEffect, useState } from 'react';
import "./CashPaymentReceipt.css";
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
        <li><a href="/viewcart" className='btn btn-primary'><i className="fa-solid fa-cart-shopping"></i></a></li>
      </ul>
    </nav>
  );
};

const CashPaymentReceipt = () => {
  const [cartItems, setCartItems] = useState([]);
  const [newcartItems, setNewCartItems] = useState([]);
  const [amountPaid, setAmountPaid] = useState(0);
  const [temp, setTemp] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const totalAmountString = sessionStorage.getItem('total');
  const totalAmount = parseFloat(totalAmountString);

  // Function to calculate the change
  const calculateChange = () => {
    return amountPaid - totalAmount;
  };

  // Function to handle amount paid input change
  const handleAmountPaidChange = (event) => {
    setAmountPaid(parseInt(event.target.value));
  };

  // Function to get session data and update state
  const getSessionData = () => {
    // Retrieve cart items from session storage
    const data = JSON.parse(sessionStorage.getItem('cart'));
    if (data) {
      setCartItems(data);
    }

    // Retrieve newcart items from session storage
    const newdata = JSON.parse(sessionStorage.getItem('newcart'));
    setNewCartItems(newdata);

    const mergedData = data.map((d) => {
      const newItem = {
        ...d,
        quantity: newdata.find((n) => n.itemId === d.food_id)?.quantity || d.quantity,
        food_price: newdata.find((n) => n.itemId === d.food_id)?.food_price || d.food_price
      };
      return newItem;
    });
    setTemp(mergedData);

    // Function to get the current date and time and update the state variable
    const getCurrentDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString();
      setCurrentDateTime(formattedDateTime);
    };
    getCurrentDateTime();
  };

  useEffect(() => {
    getSessionData();
  }, []);

  // Function to handle the print button click and send data to the backend
  const handlePrint = () => {
    const printableElement = document.querySelector(".printable");
    if (printableElement) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write("<html><head><title>Print Receipt</title>");
      printWindow.document.write("</head><body >");
      printWindow.document.write(printableElement.innerHTML);
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.print();
      printWindow.close();

      // Loop through each product and send its order details to the backend
      temp.forEach((item) => {
        const dataToSend = {
          user_id: "u1",
          food_id: item.food_id,
          food_name: item.food_name,
          price: item.food_price.toFixed(2),
          quantity: item.quantity,
          status: 1,
          order_from: "w",
          totalprice: amountPaid >= totalAmount ? calculateChange().toFixed(2) : "Insufficient amount",
        };

        console.log(dataToSend);

        // Make the HTTP POST request to the backend for each product
        axios.post("http://localhost:5000/orderdetails", dataToSend)
          .then((response) => {
            console.log("Data sent successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error sending data:", error);
            if (error.response) {
              console.error("Response data:", error.response.data);
              console.error("Response status:", error.response.status);
              console.error("Response headers:", error.response.headers);
            }
          });
      });
    }
  };

  return (
    <div className="receipt">
      <NavigationBar /><br /><br />
      <div className="printable">
        <div className="header">
          <h1>RECEIPT</h1>
        </div>
        <div className="store-info">
          <p className="store-name">RockVin Cafe</p>
          <p className="store-address">Midigama</p>
          <p className="date">Date : {currentDateTime}</p>
        </div>
        <hr className="divider" />
        <div className="product-details">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Unit Price</th>
                <th>Qty</th>
                <th>Price</th>
                
              </tr>
            </thead>
            <tbody>
              {temp.map((item, index) => (
                <tr key={index}>
                  <td className="product-name">{item.food_name}</td>
                  <td className="product-price">Rs. {item.food_price.toFixed(2)}</td>
                  <td className="product-quantity">{item.quantity || 1}</td>
                  <td className="product-quantity">{item.quantity*item.food_price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr className="divider" />
        <div className="totals">
          <center>
            <p className="total">
              <b>Total: RS {totalAmount.toFixed(2)}</b>
            </p>
          </center>
        </div>
        <hr className="divider" />
        <div className="payment">
          <label htmlFor="amount-input">Amount Paid: Rs.</label>
          <input
            type="number"
            id="amount-input"
            value={amountPaid}
            onChange={handleAmountPaidChange}
          />
          <hr className="divider" />
          <p className="change">
            <center>
              Change: Rs. {amountPaid >= totalAmount ? calculateChange().toFixed(2) : "Insufficient amount"}
            </center>
          </p>
        </div>
        <hr className="divider" />
        <div className="thank-you">
          <p>Thank you for ordering! 🍽️</p>
        </div>
      </div>
      <button onClick={handlePrint}>Print Receipt</button>
    </div>
  );
};

export default CashPaymentReceipt;

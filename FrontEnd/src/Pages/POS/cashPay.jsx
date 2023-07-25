import React, { useEffect, useState } from 'react';
import "./CashPaymentReceipt.css"; // Import the corresponding CSS file

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

function CashPaymentReceipt() {
  const [cartItems, setCartItems] = useState([]);
  const [newcartItems, setNewCartItems] = useState([]);
  const [amountPaid, setAmountPaid] = useState(0);
  const totalAmount = sessionStorage.getItem('total');
  const [temp, setTemp] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState('');

  // Function to calculate the change
  const calculateChange = () => {
    return amountPaid - totalAmount;
  };

  // Function to handle amount paid input change
  const handleAmountPaidChange = (event) => {
    setAmountPaid(parseInt(event.target.value));
  };

  const getSessionData = () => {
    const data = JSON.parse(sessionStorage.getItem('cart'));
    const newdata = JSON.parse(sessionStorage.getItem('newcart'));
    if (data) {
      setCartItems(data);
    }
    setNewCartItems(newdata);

    const temarr = [];
    data.forEach((d) => {
      newdata.forEach((n) => {
        if (d.food_id === n.itemId) {
          const newarr = {
            food_name: d.food_name,
            price: d.food_price,
            qun: n.quantity
          };
          temarr.push(newarr);
        }
      });
    });
    setTemp(temarr);


    // Function to get the current date and time and update the state variable
    const getCurrentDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString(); // Adjust the format as needed
      setCurrentDateTime(formattedDateTime);
    };
    getCurrentDateTime();

  };

  useEffect(() => {
    getSessionData();
  }, []);

  // Function to handle the print button click
  const handlePrint = () => {
    const printableElement = document.querySelector(".printable");
    if (printableElement) {
      const printWindow = window.open('', '_blank');
      printWindow.document.write('<html><head><title>Print Receipt</title>');
      printWindow.document.write('</head><body >');
      printWindow.document.write(printableElement.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
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
        <div className="item-details">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {temp.map((item, index) => (
                <tr key={index}>
                  <td className="product-name">{item.food_name}</td>
                  <td className="product-price">Rs. {item.price}</td>
                  <td className="product-quantity">{item.qun}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr className="divider" />
        <div className="totals">
          <center><p className="total">Total: RS {totalAmount}</p></center>
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
            Change: Rs. {amountPaid >= totalAmount ? calculateChange() : "Insufficient amount"}
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
}

export default CashPaymentReceipt;

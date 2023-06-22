import React from "react";
import "./CashPaymentReceipt.css"; // Import the corresponding CSS file

function CashPaymentReceipt() {
  return (
    <div className="receipt">
      <div className="header">
        <h1>RECEIPT</h1>
      </div>
      <div className="store-info">
        <p className="store-name">RockVin Cafe</p>
        <p className="store-address">Midigama</p>
        <p className="date">Date</p>
        <p className="time">Time</p>
      </div>
      <hr className="divider" />
      <div className="item-details">
        <div className="item">
          <p className="item-name">Item 1</p>
          <p className="price">Price</p>
          <p className="quantity">Qty</p>
        </div>
        <hr className="divider" />
        <div className="product">
          <p className="product-name">Product 1</p>
          <p className="product-price">Rs. 1000</p>
          <p className="product-quantity">2</p>
        </div>
        <div className="product">
          <p className="product-name">Product 2</p>
          <p className="product-price">Rs. 2300</p>
          <p className="product-quantity">1</p>
        </div>
      </div>
      <hr className="divider" />
      <div className="totals">
        <p className="total">Total: RS 4300</p>
      </div>
      <hr className="divider" />
      <div className="payment">
        <p className="amount-paid">Amount Paid: Rs.5000</p>
        <p className="change">Change: Rs.700</p>
      </div>
      <hr className="divider" />
      <div className="thank-you">
        <p>Thank you for shopping!</p>
      </div>
    </div>
  );
}

export default CashPaymentReceipt;

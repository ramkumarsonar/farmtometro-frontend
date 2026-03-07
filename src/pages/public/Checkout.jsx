import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./public.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="page">
        <h2>No product selected</h2>
        <button onClick={() => navigate("/shop")} className="btn-primary">
          Back to Shop
        </button>
      </div>
    );
  }

  // Extract numeric price
  const numericPrice = parseInt(product.price.replace(/[^\d]/g, ""));
  const totalPrice = numericPrice * quantity;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully 🎉");
    navigate("/");
  };

  return (
    <div className="checkout-wrapper">
      {/* LEFT SIDE */}
      <div className="checkout-form-section">
        <h2>Secure Checkout 🔒</h2>
        <p className="checkout-subtext">
          Fast delivery directly from farm to your doorstep
        </p>

        <form onSubmit={handleSubmit} className="modern-checkout-form">
          <div className="input-row">
            <input placeholder="Full Name" required />
            <input placeholder="Phone Number" required />
          </div>

          <input placeholder="Email Address" required />
          <textarea placeholder="Delivery Address" required />

          <label className="payment-label">Payment Method</label>
          <div className="payment-options">
            <label>
              <input type="radio" name="payment" defaultChecked />
              Cash on Delivery
            </label>
            <label>
              <input type="radio" name="payment" />
              UPI
            </label>
            <label>
              <input type="radio" name="payment" />
              Card
            </label>
          </div>

          <button type="submit" className="place-order-btn">
            Place Order ₹{totalPrice}
          </button>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="checkout-summary-section">
        <h3>Order Summary</h3>

        <div className="summary-product">
          <img src={product.image} alt={product.name} />
          <div>
            <h4>{product.name}</h4>
            <p>{product.price}</p>

            <div className="quantity-control">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                }
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)}>
                +
              </button>
            </div>
          </div>
        </div>

        <div className="price-breakdown">
          <div>
            <span>Subtotal:</span>
            <span>₹{numericPrice * quantity}</span>
          </div>
          <div>
            <span>Delivery:</span>
            <span>₹40</span>
          </div>
          <div className="grand-total">
            <span>Total:</span>
            <span>₹{totalPrice + 40}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
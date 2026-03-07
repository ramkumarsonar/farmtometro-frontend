import "./public.css";

const SubscriptionPlans = () => {
  return (
    <div className="page">
      <h1>Subscription Plans 📦</h1>

      <div className="grid grid-3">
        <div className="card">
          <h3>Weekly Veg Box</h3>
          <p>₹799 / week</p>
        </div>

        <div className="card">
          <h3>Monthly Organic Pack</h3>
          <p>₹2999 / month</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
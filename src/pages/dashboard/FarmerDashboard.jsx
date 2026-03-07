import "./dashboard.css";

const FarmerDashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h3>Farmer Panel</h3>
        <ul>
          <li>Add Product</li>
          <li>My Products</li>
          <li>Orders</li>
          <li>Earnings</li>
        </ul>
      </aside>

      <div className="dashboard-content">
        <header className="dashboard-header">
          <h2>Farmer Overview 🌱</h2>
        </header>

        <div className="cards">
          <div className="card">
            <h3>Total Products</h3>
            <p>8</p>
          </div>

          <div className="card">
            <h3>Orders Received</h3>
            <p>24</p>
          </div>

          <div className="card">
            <h3>Total Earnings</h3>
            <p>₹18,500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
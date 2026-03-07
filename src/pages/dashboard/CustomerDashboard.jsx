import "./dashboard.css";

const CustomerDashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h3>Customer Panel</h3>
        <ul>
          <li>My Orders</li>
          <li>Wishlist</li>
          <li>Subscriptions</li>
          <li>Profile</li>
        </ul>
      </aside>

      <div className="dashboard-content">
        <header className="dashboard-header">
          <h2>Welcome Back 👋</h2>
        </header>

        <div className="cards">
          <div className="card">
            <h3>Total Orders</h3>
            <p>12</p>
          </div>

          <div className="card">
            <h3>Active Subscriptions</h3>
            <p>2</p>
          </div>

          <div className="card">
            <h3>Pending Deliveries</h3>
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
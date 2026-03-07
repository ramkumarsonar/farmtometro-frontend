import "./dashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h3>Admin Panel</h3>
        <ul>
          <li>Manage Farmers</li>
          <li>Manage Customers</li>
          <li>Manage Products</li>
          <li>Reports</li>
        </ul>
      </aside>

      <div className="dashboard-content">
        <header className="dashboard-header">
          <h2>Admin Overview 📊</h2>
        </header>

        <div className="cards">
          <div className="card">
            <h3>Total Farmers</h3>
            <p>45</p>
          </div>

          <div className="card">
            <h3>Total Customers</h3>
            <p>320</p>
          </div>

          <div className="card">
            <h3>Total Revenue</h3>
            <p>₹2,45,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
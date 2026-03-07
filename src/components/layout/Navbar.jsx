import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import "./layout.css";

const Navbar = () => {
  const {user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
    ☰
  </div>

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🌱 FarmFresh</Link>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/farmer-stories">Farmer Stories</Link></li>
        <li><Link to="/how-we-verify">How We Verify</Link></li>
        {/* <li><Link to="/subscription-plans">Subscription Plans</Link></li> */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* <li><Link to="/blog">Blog</Link></li> */}

        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}

        {user?.role === "customer" && (
          <li><Link to="/customer/dashboard">Dashboard</Link></li>
        )}

        {user?.role === "farmer" && (
          <li><Link to="/farmer/dashboard">Dashboard</Link></li>
        )}

        {user?.role === "admin" && (
          <li><Link to="/admin/dashboard">Admin</Link></li>
        )}

        {user && (
            <li onClick={logout} style={{ cursor: 'pointer', color: 'white', fontWeight: 'bold', hover: { color: '#a72222' }}}>
                Logout
            </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
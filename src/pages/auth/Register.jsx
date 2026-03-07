import { useState } from "react";
import { api } from "../../services/api";
import "./auth.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await api("auth/register", "POST", form);

    if (data.message) {
      alert("Registered Successfully 🎉");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Create Account 🌱</h2>
        <p className="auth-subtitle">
          Join FarmFresh and connect directly with farmers
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              required
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              required
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </div>

          <div className="role-selection">
            <label>Select Role</label>
            <div className="role-options">
              <button
                type="button"
                className={form.role === "customer" ? "active" : ""}
                onClick={() =>
                  setForm({ ...form, role: "customer" })
                }
              >
                🛒 Customer
              </button>

              <button
                type="button"
                className={form.role === "farmer" ? "active" : ""}
                onClick={() =>
                  setForm({ ...form, role: "farmer" })
                }
              >
                🌾 Farmer
              </button>
            </div>
          </div>

          <button type="submit" className="auth-button">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
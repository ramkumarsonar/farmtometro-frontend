import { Routes, Route } from "react-router-dom";

import Home from "../pages/public/Home.jsx";
import Shop from "../pages/public/Shop.jsx";
import FarmerStories from "../pages/public/FarmerStories.jsx";
import HowWeVerify from "../pages/public/HowWeVerify.jsx";
import SubscriptionPlans from "../pages/public/SubscriptionPlans.jsx";
import About from "../pages/public/About.jsx";
import Contact from "../pages/public/Contact.jsx";
import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import Blog from "../pages/public/Blog.jsx";
import Checkout from "../pages/public/Checkout.jsx";

import CustomerDashboard from "../pages/dashboard/CustomerDashboard.jsx";
import FarmerDashboard from "../pages/dashboard/FarmerDashboard.jsx";
import AdminDashboard from "../pages/dashboard/AdminDashboard.jsx";

import ProtectedRoute from "./ProtectedRoute.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/farmer-stories" element={<FarmerStories />} />
      <Route path="/how-we-verify" element={<HowWeVerify />} />
      <Route path="/subscription-plans" element={<SubscriptionPlans />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/checkout" element={<Checkout />} />

      <Route
        path="/customer/dashboard"
        element={
          <ProtectedRoute role="customer">
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/farmer/dashboard"
        element={
          <ProtectedRoute role="farmer">
            <FarmerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
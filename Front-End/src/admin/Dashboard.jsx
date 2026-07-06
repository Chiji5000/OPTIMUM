import React from "react";
import { Link } from "react-router-dom";
import { 
  FaShoppingBag, 
  FaUsers, 
  FaChartLine, 
  FaBox, 
  FaCog, 
  FaSignOutAlt,
  FaDollarSign,
  FaShoppingCart
} from "react-icons/fa";
import "./AdminDashboard.css";

function Dashboard() {
  const stats = [
    { 
      label: "Total Products", 
      value: "1,234", 
      icon: <FaBox />, 
      color: "#4f9bff",
      change: "+12% from last month"
    },
    { 
      label: "Total Orders", 
      value: "856", 
      icon: <FaShoppingCart />, 
      color: "#26de81",
      change: "+8% from last month"
    },
    { 
      label: "Total Customers", 
      value: "2,456", 
      icon: <FaUsers />, 
      color: "#f7b731",
      change: "+15% from last month"
    },
    { 
      label: "Revenue", 
      value: "$45,678", 
      icon: <FaDollarSign />, 
      color: "#ff6b6b",
      change: "+20% from last month"
    },
  ];

  const recentOrders = [
    { id: "#ORD-001", customer: "John Doe", amount: "$120", status: "Completed" },
    { id: "#ORD-002", customer: "Jane Smith", amount: "$85", status: "Processing" },
    { id: "#ORD-003", customer: "Bob Wilson", amount: "$240", status: "Shipped" },
    { id: "#ORD-004", customer: "Alice Brown", amount: "$65", status: "Pending" },
  ];

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <span className="admin-logo-small">OPTIMUM</span>
        </div>
        
        <nav className="sidebar-nav">
          <Link to="/admin/dashboard" className="sidebar-link active">
            <FaChartLine className="sidebar-icon" />
            <span>Dashboard</span>
          </Link>
          <Link to="/admin/products" className="sidebar-link">
            <FaBox className="sidebar-icon" />
            <span>Products</span>
          </Link>
          <Link to="/admin/orders" className="sidebar-link">
            <FaShoppingCart className="sidebar-icon" />
            <span>Orders</span>
          </Link>
          <Link to="/admin/customers" className="sidebar-link">
            <FaUsers className="sidebar-icon" />
            <span>Customers</span>
          </Link>
          <Link to="/admin/settings" className="sidebar-link">
            <FaCog className="sidebar-icon" />
            <span>Settings</span>
          </Link>
          <Link to="/" className="sidebar-link logout">
            <FaSignOutAlt className="sidebar-icon" />
            <span>Logout</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <h1>Dashboard Overview</h1>
          <p>Welcome back, Admin! Here's your store performance.</p>
        </header>

        {/* Stats Grid */}
        <section className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ borderTop: `3px solid ${stat.color}` }}>
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-info">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-change">{stat.change}</div>
              </div>
            </div>
          ))}
        </section>

        {/* Recent Orders */}
        <section className="admin-section">
          <div className="section-header">
            <h2>Recent Orders</h2>
            <Link to="/admin/orders" className="view-all-link">View All</Link>
          </div>
          
          <div className="orders-table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={`status-badge ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
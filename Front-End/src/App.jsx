import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./nav/Nav.jsx";
import Home from "./Home page/Home.jsx";
import About from "./about/About.jsx";
import SignIn from "./account/SignIn.jsx";
import SignUp from "./account/SignUp.jsx";
import ForgotPassword from "./account/ForgotPassword.jsx";
import Admin from "./admin/admin.jsx";
import Shop from "./shop/Shop.jsx";
import Item from "./shop/item/item.jsx";
import Cart from "./shop/item/cart/cart.jsx";
import CheckoutDetails from "./shop/item/cart/details/Details.jsx";
import Footer from "./footer/Footer.jsx";
import Preloader from "./preloader/preloader.jsx";

// Route-based preloader wrapper
const RouteChangeTracker = () => {
  const [routeLoading, setRouteLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setRouteLoading(true);
    const timer = setTimeout(() => {
      setRouteLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return <Preloader isLoading={routeLoading} />;
};

function App() {
  return (
    <>
      <RouteChangeTracker />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<SignIn />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/item/:id" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<CheckoutDetails />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

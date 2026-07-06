import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.jsx";
import Home from "./Home page/Home.jsx";
import About from "./about/About.jsx";
import SignIn from "./account/SignIn.jsx";
import SignUp from "./account/SignUp.jsx";
import ForgotPassword from "./account/ForgotPassword.jsx";
import Shop from "./shop/Shop.jsx";
import Item from "./shop/item/item.jsx";
import Cart from "./shop/item/cart/cart.jsx";
import Footer from "./footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/item/:id" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

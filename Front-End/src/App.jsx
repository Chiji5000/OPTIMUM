import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.jsx";
import Home from "./Home page/Home.jsx";
import About from "./about/About.jsx";
import Footer from "./footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

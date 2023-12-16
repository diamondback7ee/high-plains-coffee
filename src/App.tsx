import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Menu";
import About from "./pages/About";

import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ShoppingCart from "./components/ShoppingCart";

import "./App.css";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        {/* <div className="background"></div> */}

        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <ShoppingCart />
      </ShoppingCartProvider>
    </>
  );
}

export default App;

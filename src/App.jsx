import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import BookSection from "./assets/components/BookSection";
import Recommended from "./assets/components/Recommended";
import Cozy from "./assets/components/Cozy";
import BookSlider from "./assets/components/BookSlider";
import BookGrid from "./assets/components/BookGrid";
import Categories from "./assets/components/Categories";
import Footer from "./assets/components/Footer";
import ScrollToTop from "./assets/components/ScrollToTop";

// Pages
import LiteraryTrip from "./assets/components/pages/LiteraryTrip";
import BeachBooks from "./assets/components/pages/BeachBooks";
import NonFictionPage from "./assets/components/pages/NonFictionPage";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import BooksPage from "./assets/components/BooksPage";   
import CartPage from "./assets/components/CartPage";
import LoginPage from "./assets/components/LoginPage";
import CategoryPage from "./assets/components/pages/CategoryPage"; 

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (book) => setCart((prev) => [...prev, book]);
  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  return (
    <Router>
      <ScrollToTop />
      <Navbar onSearch={setSearchTerm} cartCount={cart.length} />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <BookSection />
              <Recommended />
              <Cozy />
              <BookSlider addToCart={addToCart} />
              <BookGrid addToCart={addToCart} searchTerm={searchTerm} />
              <Categories />
            </>
          }
        />

        {/* Books page (main shop) */}
        <Route
          path="/books"
          element={<BooksPage searchTerm={searchTerm} addToCart={addToCart} />}
        />

        {/* ✅ Category details page */}
        <Route path="/category/:name" element={<CategoryPage />} />

        {/* Cart & Login */}
        <Route
          path="/cart"
          element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="/login" element={<LoginPage />} />

        {/* Other pages */}
        <Route path="/literary-trip" element={<LiteraryTrip />} />
        <Route path="/beach-books" element={<BeachBooks />} />
        <Route path="/nonfiction" element={<NonFictionPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

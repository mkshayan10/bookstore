import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onSearch, cartCount }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
    navigate("/books"); 
  };

  return (
    <header className="nav">
      <div className="nav-left">
        <img src="public/logo.png.png" alt="logo" className="nav-logo" />
        <h1 className="nav-brand">TheBookStore</h1>
      </div>

      <ul className="nav-links">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/books")}>Books</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </ul>

      <div className="nav-right">
        <form onSubmit={handleSearch} className="nav-search">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-btn">
            <img src="public/imgi_10_nav-search.svg" alt="search" />
          </button>
        </form>

        <button className="nav-cart" onClick={() => navigate("/cart")}>
          <img src="public/download.svg" alt="cart" className="cart-icon" />
          <span className="cart-count">{cartCount}</span>
        </button>

        {/* ✅ Modern Login Button */}
        <button className="nav-login" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;

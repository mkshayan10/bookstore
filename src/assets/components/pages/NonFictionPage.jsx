import React from "react";
import { useNavigate } from "react-router-dom";
import "./NonFictionPage.css";

const NonFictionPage = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="nonfiction-page">
      {/* Banner Section */}
      <div className="banner">
        <img
          src="/imgi_14_PRH_ComingSoonFall-1200x628-Nonfiction.jpg"
          alt="Nonfiction Banner"
          className="banner-img"
        />
        <div className="banner-text">
          <h2>The Most Anticipated Nonfiction of Fall 2025</h2>
          <p>
            Find a gripping history book or an inspiring memoir! Take a look at nonfiction hitting shelves this fall.
          </p>
        </div>
      </div>

      {/* First Book Example */}
      <div className="book-section">
        <div className="book-info">
          <h3><em>Strong Ground</em></h3>
          <p>
            by <strong>Brené Brown</strong>
          </p>
          <p>
            #1 <em>New York Times</em> bestselling author Brené Brown returns with an urgent call to 
            reimagine the essentials of courageous leadership...
          </p>
          <p className="price"><em>Hardcover $28.00</em></p>
          <button onClick={handleAddToCart} className="add-cart-btn">
            ADD TO CART
          </button>
        </div>
        <div className="book-cover">
          <img
            src="/imgi_18_9780593886113.jpeg"
            alt="Strong Ground"
            className="book-img"
          />
          
        </div>
        
      </div>

      <div className="book-section">
        <div className="book-info">
          <h3><em>Strong Ground</em></h3>
          <p>
            by <strong>Brené Brown</strong>
          </p>
          <p>
            #1 <em>New York Times</em> bestselling author Brené Brown returns with an urgent call to 
            reimagine the essentials of courageous leadership...
          </p>
          <p className="price"><em>Hardcover $28.00</em></p>
          <button onClick={handleAddToCart} className="add-cart-btn">
            ADD TO CART
          </button>
        </div>
        <div className="book-cover">
          <img
            src="/imgi_18_9780593886113.jpeg"
            alt="Strong Ground"
            className="book-img"
          />
          
        </div>
        
      </div>
      <div className="book-section">
        <div className="book-info">
          <h3><em>Strong Ground</em></h3>
          <p>
            by <strong>Brené Brown</strong>
          </p>
          <p>
            #1 <em>New York Times</em> bestselling author Brené Brown returns with an urgent call to 
            reimagine the essentials of courageous leadership...
          </p>
          <p className="price"><em>Hardcover $28.00</em></p>
          <button onClick={handleAddToCart} className="add-cart-btn">
            ADD TO CART
          </button>
        </div>
        <div className="book-cover">
          <img
            src="/imgi_18_9780593886113.jpeg"
            alt="Strong Ground"
            className="book-img"
          />
          
        </div>
        
      </div>
      <div className="book-section">
        <div className="book-info">
          <h3><em>Strong Ground</em></h3>
          <p>
            by <strong>Brené Brown</strong>
          </p>
          <p>
            #1 <em>New York Times</em> bestselling author Brené Brown returns with an urgent call to 
            reimagine the essentials of courageous leadership...
          </p>
          <p className="price"><em>Hardcover $28.00</em></p>
          <button onClick={handleAddToCart} className="add-cart-btn">
            ADD TO CART
          </button>
        </div>
        <div className="book-cover">
          <img
            src="/imgi_18_9780593886113.jpeg"
            alt="Strong Ground"
            className="book-img"
          />
          
        </div>
        
      </div>
      <div className="book-section">
        <div className="book-info">
          <h3><em>Strong Ground</em></h3>
          <p>
            by <strong>Brené Brown</strong>
          </p>
          <p>
            #1 <em>New York Times</em> bestselling author Brené Brown returns with an urgent call to 
            reimagine the essentials of courageous leadership...
          </p>
          <p className="price"><em>Hardcover $28.00</em></p>
          <button onClick={handleAddToCart} className="add-cart-btn">
            ADD TO CART
          </button>
        </div>
        <div className="book-cover">
          <img
            src="/imgi_18_9780593886113.jpeg"
            alt="Strong Ground"
            className="book-img"
          />
          
        </div>
        
      </div>
      <div className="book-section">
        <div className="book-info">
          <h3><em>Strong Ground</em></h3>
          <p>
            by <strong>Brené Brown</strong>
          </p>
          <p>
            #1 <em>New York Times</em> bestselling author Brené Brown returns with an urgent call to 
            reimagine the essentials of courageous leadership...
          </p>
          <p className="price"><em>Hardcover $28.00</em></p>
          <button onClick={handleAddToCart} className="add-cart-btn">
            ADD TO CART
          </button>
        </div>
        <div className="book-cover">
          <img
            src="/imgi_18_9780593886113.jpeg"
            alt="Strong Ground"
            className="book-img"
          />
          
        </div>
        
      </div>
      
      
      

      
    </div>
    
  );
};

export default NonFictionPage;

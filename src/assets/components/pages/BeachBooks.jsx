import React from "react";
import "./BeachBooks.css";
import { useNavigate } from "react-router-dom";

const BeachBooks = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cart");
  };
  return (
    <div className="beachbooks-section">
      {/* Background banner */}
      <div className="beachbooks-banner"></div>

      {/* Card content */}
      <div className="beachbooks-card">
        <img
          src="/imgi_13_Kids-Corner-Badge.webp" // replace with your Kids' Corner logo image
          alt="Kids Corner"
          className="kids-logo"
        />

        <p className="category">The ReadDown</p>
        <h2>5 Boredom-Busting Activity Books for Kids</h2>
        <small>by Dena McMurdie</small>

        <p>
          It’s always a good idea to have a few boredom-busting activity books on hand. 
          I use them to keep my kids quiet in church and waiting rooms, or occupied on 
          rainy days and vacations with lots of downtime. They’re the perfect screen-free 
          alternative to video games, and they make fantastic gifts for birthdays and 
          holidays. You really can’t go wrong with a good activity book.
        </p>

        <p>
          From picture puzzles to science experiments, these activity books will keep your 
          kids busy for hours on end.
        </p>

        <p className="source">
          This list originally appeared on <a href="#">ReadBrightly.com</a>.
        </p>
      </div>
      <h3 className="book-title">
        <em>How To Draw For Kids</em>
      </h3>
      <p className="author">
        by <strong> Alli Koch</strong>
      </p>

      <div className="book-details">
        {/* Book Cover */}
        <img
          src="/imgi_14_9781963183290.jpg"
          alt="The Thursday Murder Club"
          className="book-image"
        />

        {/* Book Description */}
        <div className="book-info">
          <p>
            Kids who are trying to develop their artistic skills will love the step-by-step instructions in this easy-to-use book. From beach balls and seashells to ice cream cones and sunflowers, kids can spend countless hours learning to draw over 40 different summer-themed pictures.
          </p>

          <p className="price">
            <em>Paperback $18.00</em>
          </p>

          <button onClick={handleAddToCart} className="add-cart-btn">
            ADD TO CART
          </button>
        </div>
      </div>
      <h3 className="book-title">
        <em>Would You Rather</em>
      </h3>
      <p className="author">
        by <strong> Zeitgeist</strong>
      </p>

      <div className="book-details">
        {/* Book Cover */}
        <img
          src="/imgi_18_9780593886113.jpeg"
          alt="The Thursday Murder Club"
          className="book-image"
        />

        {/* Book Description */}
        <div className="book-info">
          <p>
           This super-silly edition of the Would You Rather series for kids is so fun, even for adults! Divided into categories like “Amazing Animals,” “Silly Every Day,” and “My World,” the book gives over 200 questions with two options for the readers to choose from. Sure to produce plenty of laughs, it’s the perfect way to entertain bored kids on a road trip.
          </p>

          <p className="price">
            <em>Paperback $18.00</em>
          </p>

          <button onClick={handleAddToCart} className="add-cart-btn">
            ADD TO CART
          </button>
        </div>
      </div>
      <h3 className="book-title">
        <em>Titanic</em>
      </h3>
      <p className="author">
        by <strong>Bill Doyle</strong>
      </p>

      <div className="book-details">
        {/* Book Cover */}
        <img
          src="/imgi_20_9780525644217.jpg"
          alt="The Thursday Murder Club"
          className="book-image"
        />

        {/* Book Description */}
        <div className="book-info">
          <p>
            Can you survive the sinking of the Titanic? This highly interactive book offers young readers the opportunity to choose their own path and doodle their way through the historic event to see if they can escape the sinking ship.
          </p>

          <p className="price">
            <em>Paperback $18.00</em>
          </p>

          <button onClick={handleAddToCart} className="add-cart-btn">
            ADD TO CART
          </button>
        </div>
      </div>
      <h3 className="book-title">
        <em>Colour With Stickers</em>
      </h3>
      <p className="author">
        by <strong>Jonny Marx</strong>
      </p>

      <div className="book-details">
        {/* Book Cover */}
        <img
          src="/imgi_22_9781664340190.jpeg"
          alt="The Thursday Murder Club"
          className="book-image"
        />

        {/* Book Description */}
        <div className="book-info">
          <p>
            Like paint-by-numbers, but with stickers! Create a series of jungle pictures by matching the numbered stickers provided to the numbers on each picture. Bonus: each page includes fun facts about the jungle so young nature lovers can learn all about the animals and plants that live there.
          </p>

          <p className="price">
            <em>Paperback $18.00</em>
          </p>

          <button onClick={handleAddToCart} className="add-cart-btn">
            ADD TO CART
          </button>
        </div>
      </div>
      
      <h3 className="book-title">
        <em>Destroy This Book In The Name Of Science</em>
      </h3>
      <p className="author">
        by <strong>Mike Barfield</strong>
      </p>

      <div className="book-details">
        {/* Book Cover */}
        <img
          src="/imgi_25_9781524771942.jpeg"
          alt="The Thursday Murder Club"
          className="book-image"
        />

        {/* Book Description */}
        <div className="book-info">
          <p>
            Jam-packed with amazing facts and projects for kids to cut, color, and punch out, this activity book will keep curious minds occupied. It’s perfect for kids who love hands-on activities and learning new things.
          </p>

          <p className="price">
            <em>Paperback $18.00</em>
          </p>

          <button onClick={handleAddToCart} className="add-cart-btn">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeachBooks;

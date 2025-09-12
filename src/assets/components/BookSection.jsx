import React, { useState } from "react";
import "./BookSection.css";

const BookSection = () => {
  const [showReadMore, setShowReadMore] = useState(false);

  return (
    <div>
      {!showReadMore ? (
        <section className="book-section">
          <div className="book-text">
            <h2>Summer Reading Collection</h2>
            <p>
              Discover the best hand-picked books for your summer reading. From
              thrilling adventures to heartwarming stories, we’ve got it all.
            </p>
            <button className="book-btn" onClick={() => setShowReadMore(true)}>
              Read More
            </button>
          </div>
          <div className="book-banner">
            <img
              src="/imgi_14_Summer_Readers_Picks_HP_1200x628.jpg"
              alt="Book Banner"
            />
          </div>
        </section>
      ) : (
        <div className="readmore-container">
          <div className="readmore-banner"></div>
          <div className="readmore-card">
            <p className="readmore-subtitle">FEATURED BOOK</p>
            <h2 className="readmore-title">The Silent Summer</h2>
            <p className="readmore-author">by Jane Doe</p>
            <img
              src="/imgi_14_Summer_Readers_Picks_HP_1200x628.jpg"
              alt="Book Cover"
              className="readmore-img"
            />
            <p className="readmore-content">
              This book takes you on an unforgettable journey through the
              mysteries of a small coastal town. With suspense, drama, and a
              touch of romance, it’s the perfect summer read for book lovers.
            </p>
            <button className="book-btn back-btn" onClick={() => setShowReadMore(false)}>
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookSection;

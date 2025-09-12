
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Recommended.css";

const Recommended = () => {
  const navigate = useNavigate();

  const books = [
    {
      image: "/imgi_10_Thursday_Murder_Club_HP_1200x628.jpg",
      title: "Murder Club",
      description:
        "Hear from the booksellers behind these trailblazing bookstores.",
      link: "/literary-trip"
    },
    {
      image: "/imgi_11_Kids-Trending-Boredom-Busting-Read-Down_site_1200x628.jpg",
      title: "BEACH BOOKS FOR KIDS",
      description:
        "Dive into these picture books about the beach, ocean, sea life, and...",
      link: "/beach-books"
    },
  ];

  return (
    <div className="rec-container">
      <h1 className="rec-heading">Recommended Right Now</h1>
      <div className="rec-grid">
        {books.map((book, index) => (
          <div
            className="rec-card"
            key={index}
            onClick={() => navigate(book.link)} 
            style={{ cursor: "pointer" }}
          >
            <div className="rec-card-img">
              <img src={book.image} alt={book.title} />
            </div>
            <div className="rec-card-body">
              <h3 className="rec-card-title">{book.title}</h3>
              <p className="rec-card-desc">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookGrid.css";

const booksData = {
  "New Releases": [
      { id: 1, title: "Irresistible Urge", author: "Author A", price: 25, description: "A gripping new release.", image: "/imgi_34_9780593498798.jpg" },
      { id: 2, title: "Come & Get It", author: "Author B", price: 20, description: "Exciting story of love and adventure.", image: "/imgi_35_9780593820285.jpg" },
      { id: 3, title: "Tell Me Everything", author: "Author C", price: 22, description: "A thrilling mystery novel.", image: "/imgi_36_9780593798621.jpg" },
      { id: 4, title: "The Bright Sword", author: "Author D", price: 28, description: "Epic fantasy with knights and dragons.", image: "/imgi_37_9798217060672.jpg" },
      { id: 5, title: "Confidence Man", author: "Author E", price: 24, description: "A deep dive into political history.", image: "/imgi_48_triad-literary-fiction.png" },
      { id: 6, title: "Counting Miracles", author: "Author F", price: 18, description: "Heartwarming story of resilience.", image: "/imgi_38_9780593641538.jpg" },
      { id: 7, title: "Dog Will Change", author: "Author G", price: 26, description: "A journey of friendship and loyalty.", image: "/imgi_39_9780593491645.jpg" },
      { id: 8, title: "2024", author: "Author H", price: 30, description: "Speculative fiction about the future.", image: "/imgi_40_9781101985458.jpg" },
      { id: 9, title: "What Have You Done", author: "Author I", price: 21, description: "Dark psychological thriller.", image: "/imgi_41_9780525565703.jpg" },
      { id: 10, title: "Love Hypothesis", author: "Author J", price: 27, description: "Romantic comedy with heart.", image: "/imgi_29_9780593977057.jpg" },
      { id: 11, title: "Between the World", author: "Author K", price: 23, description: "Critical look at society and culture.", image: "/imgi_31_9780593312841.jpg" },
      { id: 12, title: "Heaven & Earth Store", author: "Author L", price: 29, description: "Magical realism at its best.", image: "/imgi_33_9780593439371.jpg" },
      { id: 13, title: "Open Season", author: "Author M", price: 19, description: "Hunting adventure in the wilderness.", image: "/imgi_42_9780812983814.jpg" },
      { id: 14, title: "It's a Love Story", author: "Author N", price: 20, description: "Romantic tale of two hearts.", image: "/imgi_53_triad-spanish-language-fiction.png" },
      { id: 15, title: "It's a Love Story", author: "Author O", price: 22, description: "Different edition of the same book.", image: "/imgi_48_triad-literary-fiction.png" },
    ],
    "Coming Soon": [
      { id: 16, title: "Future Book 1", image: "/imgi_49_triad-history.png", price: "$20" },
      { id: 17, title: "Future Book 2", image: "/imgi_52_triad-biography-memoir.png", price: "$22" },
      { id: 18, title: "Tell Me Everything", image: "/imgi_64_9780593977057.jpg", price: "$18" },
      { id: 19, title: "The Bright Sword", image: "/imgi_65_9780593489987.jpg", price: "$21" },
      { id: 20, title: "Confidence Man", image: "/imgi_66_9780593312841.jpg", price: "$23" },
      { id: 21, title: "Counting Miracles", image: "/imgi_66_9781984881748.jpg", price: "$19" },
      { id: 22, title: "Dog Will Change", image: "/imgi_67_9780593819456.jpg", price: "$20" },
      { id: 23, title: "2024", image: "/imgi_68_9780593439371.jpg", price: "$24" },
      { id: 24, title: "What Have You Done", image: "/imgi_38_9780593641538.jpg", price: "$17" },
      { id: 25, title: "Love Hypothesis", image: "/imgi_42_9780812983814.jpg", price: "$21" },
      { id: 26, title: "Between the World", image: "/imgi_30_9780593489987.jpg", price: "$22" },
      { id: 27, title: "Heaven & Earth Store", image: "/imgi_68_9780593498798.jpg", price: "$20" },
      { id: 28, title: "Open Season", image: "/imgi_72_9780593328224.jpg", price: "$19" },
      { id: 29, title: "It's a Love Story", image: "/imgi_69_9780593726341.jpg", price: "$18" },
      { id: 30, title: "It's a Love Story", image: "/imgi_70_9780593820285.jpg", price: "$18" },
      { id: 31, title: "It's a Love Story", image: "/imgi_40_9781101985458.jpg", price: "$18" },
    ],
    "Best Sellers": [
      { id: 32, title: "Bestseller 1", image: "blic/imgi_70_978059383pu2448.jpg", price: "$20" },
      { id: 33, title: "Bestseller 2", image: "/imgi_71_9780593798621.jpg", price: "$21" },
      { id: 34, title: "Tell Me Everything", image: "/imgi_71_9780593873373.jpg", price: "$18" },
      { id: 35, title: "The Bright Sword", image: "/imgi_72_9780593328224.jpg", price: "$23" },
      { id: 36, title: "Confidence Man", image: "/imgi_72_9798217060672.jpg", price: "$25" },
      { id: 37, title: "Counting Miracles", image: "/imgi_73_9780593641538.jpg", price: "$19" },
      { id: 38, title: "Dog Will Change", image: "/imgi_74_9780593491645.jpg", price: "$20" },
      { id: 39, title: "2024", image: "/imgi_51_triad-teen-young-adult.png", price: "$22" },
      { id: 40, title: "What Have You Done", image: "/imgi_65_9780593489987.jpg", price: "$17" },
      { id: 41, title: "Love Hypothesis", image: "/imgi_41_9780525565703.jpg", price: "$19" },
      { id: 42, title: "Between the World", image: "/imgi_40_9781101985458.jpg", price: "$20" },
      { id: 43, title: "Heaven & Earth Store", image: "/imgi_34_9780593498798.jpg", price: "$22" },
      { id: 44, title: "Open Season", image: "/imgi_21_9780735223608.jpg", price: "$21" },
      { id: 45, title: "It's a Love Story", image: "/imgi_29_9780593977057.jpg", price: "$18" },
      { id: 46, title: "It's a Love Story", image: "/imgi_77_9780812983814.jpg", price: "$18" },
      { id: 47, title: "It's a Love Story", image: "/imgi_33_9780593439371.jpg", price: "$18" },
    ],
    "Award Winners": [
      { id: 48, title: "Award Winner 1", image: "/imgi_77_9780812983814.jpg", price: "$24" },
      { id: 49, title: "Award Winner 2", image: "/imgi_76_9780525565703.jpg", price: "$22" },
      { id: 50, title: "Tell Me Everything", image: "/imgi_75_9781101985458.jpg", price: "$20" },
      { id: 51, title: "The Bright Sword", image: "/imgi_74_9780593491645.jpg", price: "$21" },
      { id: 52, title: "Confidence Man", image: "/imgi_73_9780593641538.jpg", price: "$23" },
      { id: 53, title: "Counting Miracles", image: "/imgi_72_9798217060672.jpg", price: "$19" },
      { id: 54, title: "Dog Will Change", image: "/imgi_49_triad-history.png", price: "$20" },
      { id: 55, title: "2024", image: "/imgi_53_triad-spanish-language-fiction.png", price: "$22" },
      { id: 56, title: "What Have You Done", image: "/imgi_48_triad-literary-fiction.png", price: "$17" },
      { id: 57, title: "Love Hypothesis", image: "/imgi_70_9780593832448.jpg", price: "$20" },
      { id: 58, title: "Between the World", image: "/imgi_65_9780593489987.jpg", price: "$21" },
      { id: 59, title: "Heaven & Earth Store", image: "/imgi_16_Kids-Beach-Books-Read-Down_site_1200x628.jpg", price: "$19" },
      { id: 60, title: "Open Season", image: "/imgi_31_9780593312841.jpg", price: "$18" },
      { id: 61, title: "It's a Love Story", image: "/imgi_35_9780593820285.jpg", price: "$18" },
      { id: 62, title: "It's a Love Story", image: "/imgi_27_9780593818558.jpg", price: "$18" },
      { id: 63, title: "It's a Love Story", image: "/imgi_42_9780812983814.jpg", price: "$18" },
    ],
};

const tabs = ["New Releases", "Coming Soon", "Best Sellers", "Award Winners"];

function BookGrid({ addToCart = () => {}, searchTerm = "" }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();

  // list for current tab, filtered by searchTerm
  const list = (booksData[activeTab] || []).filter((b) =>
    b.title.toLowerCase().includes((searchTerm || "").toLowerCase())
  );

  const handleAddToCart = (book) => {
    // call the func passed from App.jsx
    addToCart(book);
    // close modal
    setSelectedBook(null);
    // go to cart page
    navigate("/cart");
  };

  return (
    <div className="books-container">
      <h1 className="books-heading">Shop Your Next Book</h1>

      <div className="books-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`books-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="books-grid">
        {list.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} />
            <div className="card-footer">
              <div className="title">{book.title}</div>
              <div className="author">by {book.author}</div>
            </div>

            {/* overlay only visible on hover */}
            <div className="overlay">
              <button className="quick-view" onClick={() => setSelectedBook(book)}>
                + Quick View
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 28 }}>
        <button className="discover-btn">DISCOVER {activeTab.toUpperCase()}</button>
      </div>

      {/* Modal */}
      {selectedBook && (
        <div className="modal" onClick={() => setSelectedBook(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedBook(null)}>
              ✕
            </button>

            <div className="modal-body">
              <div className="modal-left">
                <img src={selectedBook.image} alt={selectedBook.title} />
              </div>

              <div className="modal-right">
                <h2 className="modal-title">{selectedBook.title}</h2>
                <p className="modal-author">By <strong>{selectedBook.author}</strong></p>
                <p className="modal-desc">{selectedBook.description}</p>
                <p className="modal-price">${selectedBook.price}</p>

                <div className="modal-actions">
                  <button className="back-btn" onClick={() => setSelectedBook(null)}>← Back</button>
                  <button className="cart-btn" onClick={() => handleAddToCart(selectedBook)}>🛒 Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default BookGrid;

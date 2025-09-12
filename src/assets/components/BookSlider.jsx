import React, { useRef, useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./BookSlider.css";

const books = [
  {
    id: 1,
    title: "Never Eat Alone",
    author: "Keith Ferrazzi",
    price: 32,
    description: "The bestselling classic on networking and success.",
    img: "/imgi_19_9780593578810.jpg",
  },
  {
    id: 2,
    title: "The Secret of Secrets",
    author: "Dan Brown",
    price: 28,
    description: "A thriller uncovering mysteries in ancient manuscripts.",
    img: "/imgi_21_9780735223608.jpg",
  },
  {
    id: 3,
    title: "Listening to the Law",
    author: "Amy Coney Barrett",
    price: 26,
    description: "Reflections on constitutional law and justice.",
    img: "/imgi_23_9780593734414.jpg",
  },
  {
    id: 4,
    title: "Creative Mind",
    author: "Jane Doe",
    price: 30,
    description: "Unlock creativity and imagination in daily life.",
    img: "/imgi_25_9780593312070.jpg",
  },
  {
    id: 5,
    title: "Wisdom in Action",
    author: "Ryan Holiday",
    price: 27,
    description: "Practical stoic philosophy for modern challenges.",
    img: "/imgi_27_9780593818558.jpg",
  },
  {
    id: 6,
    title: "Summer Picks",
    author: "Various Authors",
    price: 24,
    description: "Perfect reads to enjoy by the beach or poolside.",
    img: "/imgi_14_Summer_Readers_Picks_HP_1200x628.jpg",
  },
  {
    id: 7,
    title: "Mindset Shift",
    author: "Carol Dweck",
    price: 29,
    description: "The power of mindset in achieving success.",
    img: "/imgi_18_9780593474020.jpeg",
  },
  {
    id: 8,
    title: "Law & Order",
    author: "John Grisham",
    price: 31,
    description: "A thrilling courtroom drama full of suspense.",
    img: "/imgi_17_9780593549223.jpg",
  },
  {
    id: 5,
    title: "Wisdom in Action",
    author: "Ryan Holiday",
    price: 27,
    description: "Practical stoic philosophy for modern challenges.",
    img: "public/imgi_35_9780593820285.jpg",
  },
  {
    id: 5,
    title: "Wisdom in Action",
    author: "Ryan Holiday",
    price: 27,
    description: "Practical stoic philosophy for modern challenges.",
    img: "public/imgi_19_9780593578810.jpg",
  },
  {
    id: 5,
    title: "Wisdom in Action",
    author: "Ryan Holiday",
    price: 27,
    description: "Practical stoic philosophy for modern challenges.",
    img: "public/imgi_18_9780593886113.jpeg",
  },
];

function BookSlider() {
  const sliderRef = useRef(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);

  const scroll = (dir) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const handleAddToCart = (book) => {
    addToCart(book);
    navigate("/cart");
  };

  return (
    <div className="slider-wrap">
      <h1 className="rec-heading">FOR YOU</h1>

      <button className="arrow left" onClick={() => scroll("left")}>❮</button>

      <div className="slider" ref={sliderRef}>
        {books.map((b) => (
          <div key={b.id} className="card">
            <img src={b.img} alt={b.title} />
            <div className="overlay">
              <button className="quick-view-btn1" onClick={() => setSelectedBook(b)}>
                + Quick View
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={() => scroll("right")}>❯</button>

      {/* ✅ Modal Overlay */}
      {selectedBook && (
        <div className="modal-overlay" onClick={() => setSelectedBook(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedBook(null)}>&times;</span>
            <img src={selectedBook.img} alt={selectedBook.title} />
            <div className="modal-info">
              <h2>{selectedBook.title}</h2>
              <p><strong>By:</strong> {selectedBook.author}</p>
              <p>{selectedBook.description}</p>
              <p className="price"><strong>${selectedBook.price}</strong></p>
              <button className="add-btn" onClick={() => handleAddToCart(selectedBook)}>
                🛒 Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookSlider;

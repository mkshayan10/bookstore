import React from "react";
import "./BooksPage.css";

const books = [
  // --- Existing books ---
  { id: 1, title: "The Thursday Murder Club", author: "Richard Osman", price: 18, img: "public/imgi_15_9780593513033.jpg" },
  { id: 2, title: "How To Draw For Kids", author: "Alli Koch", price: 15, img: "public/imgi_14_9781963183290.jpg" },
  { id: 3, title: "Would You Rather", author: "Zeitgeist", price: 12, img: "public/imgi_18_9780593886113.jpeg" },
  { id: 4, title: "Titanic", author: "Bill Doyle", price: 14, img: "public/imgi_20_9780525644217.jpg" },
  { id: 5, title: "Colour With Stickers", author: "Jonny Marx", price: 16, img: "public/imgi_22_9781664340190.jpeg" },
  { id: 6, title: "Destroy This Book In The Name Of Science", author: "Mike Barfield", price: 20, img: "public/imgi_25_9781524771942.jpeg" },
  { id: 7, title: "Atomic Habits", author: "James Clear", price: 22, img: "public/imgi_17_9780593549223.jpg" },
  { id: 8, title: "Becoming", author: "Michelle Obama", price: 25, img: "public/becoming.jpg" },
  { id: 9, title: "Educated", author: "Tara Westover", price: 19, img: "public/educated.jpg" },
  { id: 10, title: "The Midnight Library", author: "Matt Haig", price: 17, img: "public/midnight_library.jpg" },
  { id: 11, title: "The Silent Patient", author: "Alex Michaelides", price: 21, img: "public/silent_patient.jpg" },
  { id: 12, title: "Project Hail Mary", author: "Andy Weir", price: 24, img: "public/project_hail_mary.jpg" },
  { id: 13, title: "Where the Crawdads Sing", author: "Delia Owens", price: 18, img: "public/crawdads.jpg" },
  { id: 14, title: "The Alchemist", author: "Paulo Coelho", price: 15, img: "public/alchemist.jpg" },
  { id: 15, title: "Dune", author: "Frank Herbert", price: 28, img: "public/dune.jpg" },
  { id: 16, title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling", price: 20, img: "public/hp1.jpg" },
  { id: 17, title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", price: 22, img: "public/hp2.jpg" },
  { id: 18, title: "Harry Potter and the Prisoner of Azkaban", author: "J.K. Rowling", price: 24, img: "public/hp3.jpg" },
  { id: 19, title: "The Hobbit", author: "J.R.R. Tolkien", price: 18, img: "public/hobbit.jpg" },
  { id: 20, title: "The Lord of the Rings", author: "J.R.R. Tolkien", price: 35, img: "public/lotr.jpg" },
  { id: 21, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 14, img: "public/gatsby.jpg" },
  { id: 22, title: "To Kill a Mockingbird", author: "Harper Lee", price: 16, img: "public/mockingbird.jpg" },
  { id: 23, title: "1984", author: "George Orwell", price: 15, img: "public/1984.jpg" },
  { id: 24, title: "Animal Farm", author: "George Orwell", price: 12, img: "public/animal_farm.jpg" },
  { id: 25, title: "The Catcher in the Rye", author: "J.D. Salinger", price: 17, img: "public/catcher.jpg" },
  
];

const BooksPage = ({ searchTerm }) => {
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="books-page">
      <h2>Books Collection</h2>
      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.img} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>${book.price}</p>
              <button className="add-cart-btn" onClick={() => addToCart(book)}>
  Add to Cart
</button>

            </div>
          ))
        ) : (
          <p>No books found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default BooksPage;

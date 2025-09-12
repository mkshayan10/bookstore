
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LiteraryTrip.css"; // Import CSS

const LiteraryTrip = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="literary-container">
      <h2>
        Books To Read if You Love <em>The Thursday Murder Club</em>
      </h2>
      <p className="editor">by PRH Editors</p>

      <p className="intro">
       Murder, mayhem, and four septuagenarians who solve a dastardly crime? Sign us up! Funny, moving, and suspenseful, it isn’t hard to see why The Thursday Murder Club series is so beloved by millions of readers worldwide. And now fans can see the story come to life in The Thursday Murder Club movie coming to Netflix this summer! If you’re anxiously awaiting the film — starring Helen Mirren, Pierce Brosnan, Ben Kingsley, and Celia Imrie — or looking to try and solve your own cold case, you’ll love this list of whodunnits.

      </p>

      <h3 className="book-title">
        <em>The Thursday Murder Club</em>
      </h3>
      <p className="author">
        by <strong>Richard Osman</strong>
      </p>

      <div className="book-details">
        {/* Book Cover */}
        <img
          src="/imgi_15_9780593513033.jpg"
          alt="The Thursday Murder Club"
          className="book-image"
        />

        {/* Book Description */}
        <div className="book-info">
          <p>
            In a peaceful retirement village, four unlikely friends meet weekly
            in the Jigsaw Room to discuss unsolved crimes. When a local
            developer is found dead with a mysterious photograph next to the
            body, the Thursday Murder Club suddenly find themselves in the
            middle of their first live case...
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
        <em>We Solve Murders</em>
      </h3>
      <p className="author">
        by <strong>Richard Osman</strong>
      </p>

      <div className="book-details">
        {/* Book Cover */}
        <img
          src="/imgi_15_9780593653241.jpg"
          alt="We Solve Murders"
          className="book-image"
        />

        {/* Book Description */}
        <div className="book-info">
          <p>
            Steve Wheeler is enjoying retired life. He still does the odd bit of investigation work, but he prefers his familiar routines. His days of adventure are over. Adrenaline is daughter-in-law Amy’s job now. Amy Wheeler thinks adrenaline is good for the soul. She’s currently on a remote island protecting mega-bestselling author Rosie D’Antonio, until a dead body and a bag of money mean trouble in paradise. So she sends an SOS to the only person she trusts … As a thrilling race around the world begins, can Amy and Steve outrun and outsmart a killer?
          </p>

          <p className="price">
            <em>Paperback $23.00</em>
          </p>

          <button onClick={handleAddToCart} className="add-cart-btn">
            ADD TO CART
          </button>
        </div>
      </div>
      <h3 className="book-title">
        <em>Vera Wong Unsolitated Advice for Murders</em>
      </h3>
      <p className="author">
        by <strong>Jesse Q. Sutanto</strong>
      </p>

      <div className="book-details">
        {/* Book Cover */}
        <img
          src="/imgi_17_9780593549223.jpg"
          alt="The Thursday Murder Club"
          className="book-image"
        />

        {/* Book Description */}
        <div className="book-info">
          <p>
            Vera Wong is a lonely little old lady who lives above her forgotten tea shop in the middle of San Francisco’s Chinatown. Then one morning, Vera trudges downstairs to find a curious thing — a dead man in the middle of her tea shop. In his outstretched hand, a flash drive and Vera sort of … swipes it. Why? Because Vera is sure she would do a better job than the police possibly could, because nobody sniffs out a wrongdoing quite like a suspicious Chinese mother with time on her hands. Vera knows the killer will be back; all she has to do is watch the increasing number of customers at her shop and figure out which one among them is a killer …
          </p>

          <p className="price">
            <em>Paperback $20.00</em>
          </p>

          <button onClick={handleAddToCart} className="add-cart-btn">
            ADD TO CART
          </button>
        </div>
      </div>
      <h3 className="book-title">
        <em>How TO Solve Your OWn Murder</em>
      </h3>
      <p className="author">
        by <strong> Kristen Perrin</strong>
      </p>

      <div className="book-details">
        {/* Book Cover */}
        <img
          src="/imgi_18_9780593474020.jpeg"
          alt="The Thursday Murder Club"
          className="book-image"
        />

        {/* Book Description */}
        <div className="book-info">
          <p>
            In 1965, Frances Adams is at an English country fair where a fortune-teller makes a bone-chilling prediction: One day, Frances will be murdered. It is a prediction that sparks her life’s work — trying to solve a crime that hasn’t happened yet. Nearly sixty years later, Frances is found murdered and her great-niece Annie is determined to catch the killer. Can Annie safely unravel the dark mystery or will dredging up the past throw her into the path of a killer?
          </p>

          <p className="price">
            <em>Paperback $19.00</em>
          </p>

          <button onClick={handleAddToCart} className="add-cart-btn">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiteraryTrip;

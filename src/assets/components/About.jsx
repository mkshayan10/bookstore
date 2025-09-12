import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <section className="about-hero">
        <h1>About TheBookStore</h1>
        <p>Your one-stop destination for books that inspire, educate, and entertain.</p>
      </section>

      {/* Our Story */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2020, TheBookStore began with a simple mission: to connect readers 
          with books that spark curiosity and imagination. What started as a small 
          community bookstore has grown into a trusted online platform with thousands of 
          titles across genres — from timeless classics to the latest bestsellers.
        </p>
        <p>
          We believe books are more than just pages — they’re experiences, journeys, and 
          lifelong companions. That’s why we carefully curate our collection to make 
          reading accessible and enjoyable for everyone.
        </p>
      </section>

      {/* What We Offer */}
      <section className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>📚 A vast collection of fiction, non-fiction, and children’s books</li>
          <li>🚚 Fast and reliable shipping across the globe</li>
          <li>💳 Secure payment options and easy returns</li>
          <li>⭐ Personalized recommendations based on your taste</li>
          <li>🎁 Gift cards and exclusive membership discounts</li>
        </ul>
      </section>

      {/* Our Mission */}
      <section className="about-section mission">
        <h2>Our Mission</h2>
        <p>
          At TheBookStore, we aim to build a global community of book lovers. 
          Our mission is to make reading a daily habit for people of all ages by 
          offering an engaging and accessible platform.
        </p>
        <blockquote>
          “A reader lives a thousand lives before he dies. The man who never reads lives only one.”  
          <br /> – George R.R. Martin
        </blockquote>
      </section>

      {/* Meet the Team */}
      <section className="about-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="public/imgi_19_9780593578810.jpg" alt="Founder" />
            <h3>Shayan Mk</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src="public/imgi_21_9780735223608.jpg" alt="Editor" />
            <h3>Emily Carter</h3>
            <p>Head of Editorial</p>
          </div>
          <div className="team-card">
            <img src="public/imgi_23_9780593734414.jpg" alt="Designer" />
            <h3>James Walker</h3>
            <p>Creative Director</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;

import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const categories = [
    {
      name: "Literary Fiction",
      img: "/imgi_48_triad-literary-fiction.png",
      desc: "Literary fiction focuses on deep themes, complex characters, and expressive storytelling."
    },
    {
      name: "Teen & Young Adult",
      img: "/imgi_49_triad-history.png",
      desc: "Stories for younger readers dealing with identity, growth, and adventure."
    },
    {
      name: "Romance",
      img: "/imgi_50_triad-womens-fiction.png",
      desc: "Romance novels focus on relationships, emotions, and love stories."
    },
    {
      name: "Biography & Memoir",
      img: "/imgi_51_triad-teen-young-adult.png",
      desc: "True stories of real people, their lives, struggles, and successes."
    },
    {
      name: "Spanish Language Fiction",
      img: "/imgi_53_triad-spanish-language-fiction.png",
      desc: "Spanish literature celebrating Hispanic culture and storytelling."
    },
    {
      name: "Nonfiction",
      img: "/imgi_52_triad-biography-memoir.png",
      desc: "Factual books about history, science, and real-world events."
    }
  ];

  return (
    <div className="cat-container">
      <h2 className="cat-title">Categories</h2>
      <div className="cat-grid">
        {categories.map((cat, index) => (
          <Link
            to={`/category/${encodeURIComponent(cat.name)}`}
            state={cat}
            key={index}
            className="cat-card"
          >
            <img src={cat.img} alt={cat.name} className="cat-img" />
            <p className="cat-name">{cat.name}</p>
          </Link>
        ))}
      </div>
      <a href="#" className="cat-explore">EXPLORE MORE CATEGORIES</a>
    </div>
  );
};

export default Categories;

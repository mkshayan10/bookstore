import React from "react";
import { useParams } from "react-router-dom";
import "./CategoryPage.css";

const categoryDetails = {
  "Literary Fiction": {
    img: "/imgi_48_triad-literary-fiction.png",
    desc: "Literary fiction is known for its depth, character development, and thought-provoking themes. It focuses on style, symbolism, and the exploration of the human condition.",
    features: [
      "Deep character development",
      "Symbolism and layered themes",
      "Focus on human experiences"
    ],
    books: [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { title: "Beloved", author: "Toni Morrison" },
      { title: "To Kill a Mockingbird", author: "Harper Lee" }
    ]
  },

  "Teen & Young Adult": {
    img: "/imgi_49_triad-history.png",
    desc: "Teen & YA fiction explores friendships, identity, first loves, and personal struggles. Loved by teens and adults for its relatability and fast-paced storytelling.",
    features: [
      "Relatable teenage protagonists",
      "Themes of growth and identity",
      "Often adventurous and emotional"
    ],
    books: [
      { title: "The Hunger Games", author: "Suzanne Collins" },
      { title: "Divergent", author: "Veronica Roth" },
      { title: "Eleanor & Park", author: "Rainbow Rowell" }
    ]
  },

  Romance: {
    img: "/imgi_50_triad-womens-fiction.png",
    desc: "Romance novels focus on love stories that captivate readers with emotional connections and heartfelt journeys, often ending on a hopeful or happy note.",
    features: [
      "Themes of love and relationships",
      "Emotional storytelling",
      "Happy or hopeful endings"
    ],
    books: [
      { title: "Pride and Prejudice", author: "Jane Austen" },
      { title: "Me Before You", author: "Jojo Moyes" },
      { title: "The Notebook", author: "Nicholas Sparks" }
    ]
  },

  "Biography & Memoir": {
    img: "/imgi_51_triad-teen-young-adult.png",
    desc: "Biographies and memoirs give insight into real lives, exploring struggles, achievements, and experiences of notable figures or everyday people.",
    features: [
      "True life stories",
      "Personal struggles and triumphs",
      "Inspirational and insightful"
    ],
    books: [
      { title: "Becoming", author: "Michelle Obama" },
      { title: "The Diary of a Young Girl", author: "Anne Frank" },
      { title: "Educated", author: "Tara Westover" }
    ]
  },

  "Spanish Language Fiction": {
    img: "/imgi_53_triad-spanish-language-fiction.png",
    desc: "Spanish Language Fiction showcases the richness of Hispanic literature, blending magical realism, cultural traditions, and contemporary storytelling.",
    features: [
      "Rich cultural heritage",
      "Magical realism and symbolism",
      "Influence of Latin American history"
    ],
    books: [
      { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez" },
      { title: "Like Water for Chocolate", author: "Laura Esquivel" },
      { title: "The Shadow of the Wind", author: "Carlos Ruiz Zafón" }
    ]
  },

  Nonfiction: {
    img: "/imgi_52_triad-biography-memoir.png",
    desc: "Nonfiction provides factual and informative content, covering history, science, philosophy, and real-world issues with accuracy and depth.",
    features: [
      "Based on real facts and events",
      "Educational and informative",
      "Covers wide range of subjects"
    ],
    books: [
      { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari" },
      { title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot" },
      { title: "Outliers", author: "Malcolm Gladwell" }
    ]
  }
};

const CategoryPage = () => {
  const { name } = useParams();
  const category = categoryDetails[name];

  if (!category) {
    return (
      <div className="catpage-container fade-in">
        <h1>Category Not Found</h1>
        <p>Sorry, we don’t have details for this category yet.</p>
      </div>
    );
  }

  return (
    <div className="catpage-container fade-in">
      <div className="catpage-hero">
        <img src={category.img} alt={name} className="catpage-img" />
        <h1 className="catpage-title">{name}</h1>
      </div>

      <div className="catpage-details">
        <p className="catpage-desc">{category.desc}</p>

        <h2>Key Features</h2>
        <ul className="catpage-features">
          {category.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <h2>Popular Books</h2>
        <div className="catpage-books">
          {category.books.map((b, i) => (
            <div key={i} className="book-card">
              <h3>{b.title}</h3>
              <p>by {b.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

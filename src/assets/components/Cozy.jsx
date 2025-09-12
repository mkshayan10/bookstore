import React from "react";
import "./Cozy.css";
import { useNavigate } from "react-router-dom";

const Cozy = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/nonfiction"); // 👈 goes to new page
  };

  return (
    <div className="box">
      <div className="left">
        <img 
          src="/imgi_14_PRH_ComingSoonFall-1200x628-Nonfiction.jpg" 
          alt="Books" 
          className="img" 
        />
      </div>
      <div className="right">
        <h2 className="title">The Most Anticipated Nonfiction of Fall 2025</h2>
        <p className="txt">
          Discover this fall’s most captivating nonfiction stories featuring 
          bold voices, sharp truths, and powerful ideas.
        </p>
        <button className="btn" onClick={handleNavigation}>
          SEE THE LIST
        </button>
      </div>
    </div>
  );
};

export default Cozy;

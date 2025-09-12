// import React, { useState } from "react";
// import "./Footer.css";

// const Footer = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Subscribed with: ${email}`);
//     setEmail("");
//   };

//   return (
//     <footer className="ft-container">
//       <div className="ft-columns">
        
//         <div className="ft-col">
//           <h4 className="ft-title">ABOUT US</h4>
//           <ul className="ft-list">
//             <li>Our Story</li>
//             <li>Our People</li>
//             <li>Our Contributors</li>
//             <li>Locations</li>
//             <li>Management</li>
//             <li>Social Impact</li>
//             <li>Accessibility Statement</li>
//             <li>Careers</li>
//             <li>Imprints</li>
//           </ul>
//         </div>

        
//         <div className="ft-col">
//           <h4 className="ft-title">QUICK LINKS</h4>
//           <ul className="ft-list">
//             <li>Partnerships</li>
//             <li>Media Queries</li>
//             <li>Influencers</li>
//             <li>Company Reads</li>
//             <li>PenguinRandomHouse.biz</li>
//             <li>Email Preferences</li>
//             <li>Terms of Use</li>
//             <li>Privacy Policy</li>
//             <li>CA Privacy Policy</li>
//             <li>Do Not Sell My Personal Info</li>
//             <li>Affiliate Program Disclosure</li>
//             <li>Avoid Publishing Scams</li>
//           </ul>
//         </div>

       
//         <div className="ft-col">
//           <h4 className="ft-title">HELP</h4>
//           <ul className="ft-list">
//             <li>Publishing Process</li>
//             <li>FAQ</li>
//             <li>Shopping & Shipping FAQ</li>
//             <li>For Educators</li>
//             <li>Subrights</li>
//             <li>Permissions</li>
//             <li>Estate Information</li>
//           </ul>
//         </div>

       
//         <div className="ft-col">
//           <h4 className="ft-title">CONNECT</h4>
//           <p className="ft-text">
//             Sign up for news about books, authors, and more from Penguin Random House
//           </p>

          
//           <form className="ft-form" onSubmit={handleSubmit}>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="ft-input"
//             />
//             <button type="submit" className="ft-submit">Subscribe</button>
//           </form>

//           <p className="ft-link">global.BookStore.com</p>
//           <p className="ft-copy">© 2025 Book Store</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Book Store | All Rights Reserved</p>
      <p>
        <a href="/privacy">Privacy Policy</a> | 
        <a href="/terms"> Terms of Use</a>
      </p>
    </footer>
  );
};

export default Footer;

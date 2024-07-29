import React from "react";
import { Link } from "react-router-dom";

const ContactNaf = ({ allSectionsRef }) => {
  return (
    <section id="contact-naf" className="section">
      <div className="contact-container">
        <div className="image-container">
          <img src="img/bedroom.JPG" alt="pict" />
        </div>
        <div className="text-container">
          <span>
            We are NAF, your favorite site to book all your hotels in one place
          </span>
          <Link to="/contact-us" className="contact-us-btn">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactNaf;

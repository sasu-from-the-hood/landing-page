import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./responsive.css";
import Navbar from "./components/Navbar.jsx";
import HeroComponent from "./components/HeroComponent.jsx";
import ContactNaf from "./components/ContactNaf.jsx";
import HotDeals from "./components/HotDeals.jsx";
import AboutUs from "./components/AboutUs.jsx";
import SpecialOffers from "./components/SpecialOffers.jsx";
import HappyClients from "./components/HappyClients.jsx";
import ContactUs from "./components/ContactUs.jsx";

export default function App() {
  const allSectionsRef = useRef([]);

  useEffect(() => {
    const revealSection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("section-hidden");
          observer.unobserve(entry.target);
        }
      });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.25,
    });

    allSectionsRef.current.forEach((section) => {
      if (section) {
        section.classList.add("section-hidden");
        sectionObserver.observe(section);
      }
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroComponent allSectionsRef={allSectionsRef} />
              <ContactNaf allSectionsRef={allSectionsRef} />
              <HotDeals allSectionsRef={allSectionsRef} />
              <AboutUs allSectionsRef={allSectionsRef} />
              <SpecialOffers allSectionsRef={allSectionsRef} />
              <HappyClients allSectionsRef={allSectionsRef} />
              <ContactUs allSectionsRef={allSectionsRef} />
            </>
          }
        />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

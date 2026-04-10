import React, { useEffect } from "react";
import "./style.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Particles from "./components/Particles";
import CustomCursor from "./components/CustomCursor";

/**
 * Main Application Component
 * Handles:
 * - Smooth scrolling for anchor links
 * - Page loaded state
 * - Layout rendering
 */

function App() {
  useEffect(() => {
    // Smooth scrolling handler
    const handleSmoothScroll = (event) => {
      const targetId = event.currentTarget.getAttribute("href");

      if (targetId?.startsWith("#")) {
        event.preventDefault();

        const targetElement = document.querySelector(targetId);

        targetElement?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Select all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    // Attach event listeners
    anchorLinks.forEach((link) =>
      link.addEventListener("click", handleSmoothScroll)
    );

    // Add page loaded class
    document.body.classList.add("loaded");

    // Developer console message
    console.info("🚀 Devraj Solanki Portfolio Loaded Successfully!");

    // Cleanup function
    return () => {
      anchorLinks.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);

  return (
    <div className="app-container">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Animated Background */}
      <div className="bg-animation" />

      {/* Floating Particles */}
      <Particles />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollTop />
    </div>
  );
}

export default App;
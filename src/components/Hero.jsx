import "./Hero.css";
import React, { useState, useEffect } from "react";
// import React from "react";
import { useNavigate } from "react-router-dom";

// Import your images
import logo from "../assets/Green Brown Illustration Clothes Fashion Logo for Store.png";
import peacock from "../assets/Eashan Crafts-Photoroom.png";
import lotus from "../assets/Serene Macramé Lotus Flower Wall Hanging (1)-Photoroom.png";
import plant from "../assets/download (18)-Photoroom.png";
import drawer from "../assets/74e87567e2d6008f2db0d220487a9e90-Photoroom.png";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";


const Hero = () => {
 const navigate = useNavigate();   //  ADD THIS

  return (
    <div className="hero-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Looma Logo" />
          <h1>LOOMA</h1>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Gallery</li>
          <li>About Us</li>
        </ul>
        {/* UPDATED BUTTON */}
        <button
          className="signup-btn"
          onClick={() => navigate("/login")}>Sign Up
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Explore <br />
            The pieces
            <br />made 
            <br />
            with care.
          </h1>

          <p>For Those Who Appreciate True Handcrafted Beauty.</p>

          <button className="shop-btn">Shop Now</button>
        </div>

        <div className="hero-right">
            <img src={lotus} alt="Macrame Lotus" className="lotus" />
            <img src={plant} alt="Macrame Plant" className="plant" />
            <img src={drawer} alt="Wood Drawer" className="drawer" />
          </div>

          
      </section>


      <div className="product-showcase">
            <h1>Product Gallery</h1>
            <div className="gallery">
              <div className="images">
                <img src={product1} alt="product1" className="product1" />
              <img src={product2} alt="product2" className="product2" />
              <img src={product3} alt="product3" className="product3" />
              <img src={product4} alt="product4" className="product4" />
              <img src={product5} alt="product5" className="product5" />
              <img src={product6} alt="product6" className="product6" />
              </div>
              <h3><a href="">see more... </a></h3>
            </div>
      </div>


    </div>

    
  );
};

export default Hero;

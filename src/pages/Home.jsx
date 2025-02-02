// src/pages/Home.jsx
import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Explore the World with Us</h1>
        <p>Your journey begins here.</p>
        <button>Book Now</button>
      </section>
      <section className="featured-tours">
        <h2>Featured Tour Packages</h2>
        <div className="tour-cards">
          {/* Add tour cards here */}
        </div>
      </section>
      <section className="popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-cards">
          {/* Add destination cards here */}
        </div>
      </section>
    </div>
  );
};

export default Home;

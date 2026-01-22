import React, { useEffect, useRef, useState } from "react";
import "./News.css";

const cards = [
  { id: 1, title: "Classical Dance Forms Require Precise Technique", img: "/news1.jpg" },
  { id: 2, title: "10 Tips For Taking Online Classic Dance Classes", img: "/news2.jpg" },
  { id: 3, title: "Community Centers, Gyms Or Cultural Centers", img: "/news3.jpg" },
  { id: 4, title: "The Opportunity, Share Videos Of Your Practice", img: "/news4.jpg" },
];

function News() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const visible = 3;
  const total = cards.length;

  // 🔹 Auto forward scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // 🔹 Forward-only infinite loop (NO backward)
  useEffect(() => {
    if (index === total) {
      const track = trackRef.current;
      if (!track) return;

      // Wait till slide animation completes
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(0);

        // Force browser repaint
        track.getBoundingClientRect();

        track.style.transition = "transform 0.8s ease-in-out";
      }, 800);
    }
  }, [index, total]);

  return (
<div>
    <p className="News-tag">
        <span></span>Blog & News<span></span>
      </p>

      <h2 className="News-title">Our Latest News & Articles</h2>

    
    
    <div className="slider-wrapper">
      <div
        ref={trackRef}
        className="slider-track"
        style={{
          transform: `translateX(-${index * (100 / visible)}%)`,
        }}
      >
        {/* Original cards */}
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <button>READ MORE</button>
          </div>
        ))}

        {/* Clone first 3 cards */}
        {cards.slice(0, visible).map((card) => (
          <div className="card" key={`clone-${card.id}`}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <button>READ MORE</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default News;

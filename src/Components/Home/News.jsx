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

  // Clone first 3 cards for smooth infinite loop
  const extendedCards = [...cards, ...cards.slice(0, visible)];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;

    if (index === total) {
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(0);
        track.style.transform = `translateX(0%)`;

        track.getBoundingClientRect(); // force repaint
        track.style.transition = "transform 0.8s ease-in-out";
      }, 800);
    }
  }, [index, total]);

  return (
    <section className="news-section">
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
          {extendedCards.map((card, i) => (
            <div className="card" key={i}>
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              <button>READ MORE</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;

import React, { useEffect, useRef } from "react";
import "./Offer.css";

const cards = [
  { id: 1, number: "01", title: "ON THE SPOT Discount", sub: "(Upto Rs. 500/- Off)" },
  { id: 2, number: "02", title: "24-HOURS Discount", sub: "(Upto Rs. 300/- Off)" },
  { id: 3, number: "03", title: "Opt EASY INSTALLMENTS", sub: "(2 Installments)" },
  { id: 4, number: "04", title: "MULTIPLE STYLE COMBOS", sub: "(Flat 10% Off)" },
  { id: 5, number: "05", title: "SALSA COUPLE Discount", sub: "(Rs. 500/- Off)" },
  { id: 6, number: "06", title: "FRIENDS GROUP Discount", sub: "(Rs. 200/- Off)" },
  { id: 7, number: "07", title: "REFER A FRIEND", sub: "(Rs. 5200/- Off)" },
];

function Offer() {
  const trackRef = useRef(null);

 useEffect(() => {
  const track = trackRef.current;
  let scrollAmount = 0;
  const speed = 2; // change speed here
  let animationFrame;
  let isPaused = false;

  const scroll = () => {
    if (!isPaused) {
      scrollAmount += speed;
      track.style.transform = `translateX(-${scrollAmount}px)`;

      if (scrollAmount >= track.scrollWidth / 2) {
        scrollAmount = 0;
      }
    }

    animationFrame = requestAnimationFrame(scroll);
  };

  animationFrame = requestAnimationFrame(scroll);

  // Pause on hover
  const pause = () => (isPaused = true);
  const resume = () => (isPaused = false);

  track.addEventListener("mouseenter", pause);
  track.addEventListener("mouseleave", resume);

  return () => {
    cancelAnimationFrame(animationFrame);
    track.removeEventListener("mouseenter", pause);
    track.removeEventListener("mouseleave", resume);
  };
}, []);


  return (
    <>
      {/* ===== Upper Section (NOT REMOVED) ===== */}
      <section className="upper">
        <div className="offer-title">
          <p className="smalline">
            <span></span>
            Thanks for choosing us to learn from
            <span></span>
          </p>
          <br />
          <h2>Attractive Discounts & Offers</h2>
        </div>

        <div className="offer-btn">
          <a href="#">View All Discounts</a>
        </div>
      </section>

      {/* ===== Cards Section ===== */}
      <section className="offercard">
        <div className="card-track" ref={trackRef}>
          {[...cards, ...cards].map((card, index) => (
            <div className="card" key={index}>
              <div className="card-number">{card.number}</div>

              <h2 className="card-title">
                {card.title} <br />
                <span>{card.sub}</span>
              </h2>

              <p className="card-text">Content</p>
              <button className="read-btn">READ MORE</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Offer;

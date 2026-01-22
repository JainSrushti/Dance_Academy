import React, { useState } from "react";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      image: "/master.jpg",
      text: "Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit.",
      name: "Jenifer Lopez",
      role: "Dance Student",
    },
    {
      id: 2,
      image: "/lavni.jpg",
      text: "Cras ultricies ligula sed magna dictum porta.",
      name: "Sophia Ray",
      role: "Hip Hop Dancer",
    },
    {
      id: 3,
      image: "/testi_3_3.png",
      text: "Donec sollicitudin molestie malesuada.",
      name: "Emily Watson",
      role: "Ballet Student",
    },
    {
      id: 4,
      image: "/testi_3_4.png",
      text: "Vivamus magna justo lacinia eget consectetur sed.",
      name: "Olivia Brown",
      role: "Contemporary Dancer",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div>
    <section className="heading">
      <p className="tag">
        <span></span>Testimonials<span></span>
      </p>

      <h2 className="tag-title">What Our Student Says?</h2>

      <div className="testimonial-wrapper">
        {/* LEFT ARROW */}
        <button className="arrow left" onClick={prev}>❮</button>

        {/* SINGLE IMAGE */}
        <div className="image-single">
          <img
            src={testimonials[current].image}
            alt="student"
          />
        </div>

        {/* RIGHT ARROW */}
        <button className="arrow right" onClick={next}>❯</button>

        {/* TEXT */}
        <p className="testimonial-text">
          {testimonials[current].text}
        </p>

        <h3>{testimonials[current].name}</h3>
        <span className="role">{testimonials[current].role}</span>
      </div>
    </section>

    

   <section className="mid-card">
  <div className="in-card">
    <div className="textarea">
      <h1>
        Sign Up For Modern <br /> Dance Classes
      </h1>

      <p>
        Train under the best dance choreographers. Sign up for dance lessons only
        at a dance studio and learn different dance styles from all over the world
        like tango, break, hiphop, waltz, ballet and more.
      </p>

      <div className="two-button">
        <button className="primary">SIGN UP</button>
        <button className="secondary">SIGN IN</button>
      </div>
    </div>

    <div className="mid-card-img">
      <img src="/moderndance.png" alt="dance" />
    </div>
  </div>
</section>




  </div>
  );
}

export default Testimonials;

import "./Hero.css";

function Hero() {

  return (
    <div>
      <div className="hero">
      <video
        src="/website_hero_master_v2.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>

    <div className="hero-overlay">
        <p className="tagline">Learn & Dance With Us
          <span></span>
        </p>

        <h1>
          Let's Make <span>DANCE</span><br />
          A New CULTURE !!
        </h1>

        <div className="hero-actions">
          <button className="primary-btn">
            NEW DANCE BATCHES STARTING
          </button>

          <a href="https://youtu.be/lVhjku9ABns" target="_blank" rel="noopener noreferrer">
          <button className="play-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>
          </button>
          </a>

          <span className="play-label">Play Video Now</span>
        </div>
      </div>
    </div>
  )
}

export default Hero;

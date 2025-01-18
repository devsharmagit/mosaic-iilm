import React, { useState, useEffect } from 'react';
import './App.css';
import  EventContainer  from './components/EventContainer';
import { EVENTS } from './config/constants';

// ------------ countdown timer starts here ------------
const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isMobile, setIsMobile] = useState(false);

  const calculateTimeLeft = () => {
    const eventDate = new Date("February 28, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
      return null; // ------------ event expires ------------
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); //  768px is the breakpoint for mobile
    };

    handleResize(); // Call once on initial load
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => window.removeEventListener('resize', handleResize); // Clean up the event listener
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = calculateTimeLeft();
      if (time) {
        setTimeLeft(time);
      } else {
        clearInterval(interval);
        setTimeLeft(null);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToEvent = (direction) => {
    const container = document.querySelector('.events-container');
    const scrollAmount = container.offsetWidth * (direction === 'left' ? -1 : 1);
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // ------------ countdown timer ends here ------------

  return (
    <div>
      {/* ------------ hero section starts here ------------ */}
      <section id="home" className="hero-section">
        <div className="image-section">
          <div className="hero-content">
            <img src="mosaic.png" alt="Logo" className="hero-logo" />
            <h2 id="dates">30th January, 31st January & 1st February 2025</h2>
            <div id="countdown-timer">
              {timeLeft ? (
                <>
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </>
              ) : (
                "EXPIRED"
              )}
            </div>
            <a href="#events" className="btn">Register</a>
          </div>
        </div>
      </section>

      {/* ------------ about mosaic mobile and desktop ------------ */}
      <section id="about" className="about-section">
        <h2>About Mosaic</h2>

        {isMobile ? (
          // ------------ mobile view content ------------
          <>
            <p>
              <strong>MOSAIC 2025</strong> – IILM University's three-day cultural extravaganza is here! 🎉 Join us on <strong>30th, 31st January, and 1st February</strong> for an unforgettable celebration of <strong>talent, creativity, and innovation</strong>.
              </p>

            <p>
              With over <strong>a decade of legacy</strong>, Mosaic features <strong>electrifying music</strong>, <strong>dance battles</strong>, <strong>drama</strong>, and <strong>artistic showcases</strong>, attracting <strong>5000+ daily visitors</strong>.
              <br/>
              This year, we’re raising the bar, bringing together participants and enthusiasts from across the country.
              <br/>
              Don’t miss the magic of <strong>MOSAIC 2025</strong> – where creativity and camaraderie shine! ✨</p>
          </>
        ) : (
          // ------------ desktop view content ------------
          <>
            <p>Brace yourselves for <strong>MOSAIC 2025</strong> – IILM University's grand three-day cultural extravaganza, happening on <strong>30th, 31st January, and 1st February</strong>!<br />
            Known as one of the most awaited events of the year, Mosaic is where <strong>talent meets creativity</strong>, and the <strong>spirit of youth</strong> shines bright.</p>

            <p>With a rich legacy of over a decade, Mosaic continues to be a vibrant platform that celebrates <strong>art, culture, and innovation</strong> through a series of exhilarating inter-college competitions and performances. From <strong>electrifying music</strong> and <strong>mesmerizing dance battles</strong> to <strong>thought-provoking drama</strong> and <strong>stunning artistic showcases</strong>, there’s something for everyone to enjoy and be inspired by.</p>

            <p>Every year, Mosaic attracts <strong>5000+ students and visitors daily</strong>, creating an atmosphere of infectious energy and unforgettable memories.</p>

            <p>In <strong>2025</strong>, we’re set to raise the bar even higher, bringing together a diverse mix of participants, professionals, and cultural enthusiasts from across the country.</p>

            <p>Don’t miss <strong>MOSAIC 2025</strong> – a three-day celebration of <strong>talent, creativity, and camaraderie</strong> that promises to leave you inspired and energized. Let’s create magic together!</p>
          </>
        )}
      </section>


<EventContainer heading={"Event Details"} dataArray={EVENTS} />
<EventContainer heading={"Singing Events"} dataArray={EVENTS} />
<EventContainer heading={"Theatre Events"} dataArray={EVENTS} />
<EventContainer heading={"Academics Events"} dataArray={EVENTS} />
<EventContainer heading={"Art and crafts Events"} dataArray={EVENTS} />
<EventContainer heading={"Fashion Events"} dataArray={EVENTS} />
<EventContainer heading={"Multimedia Events"} dataArray={EVENTS} />

      {/* Gallery Section */}
      <section>
        <div className="gallery-container" id="gallery">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            <div className="photo small"></div>
            <div className="photo large"></div>
            <div className="photo medium"></div>
            <div className="photo tall"></div>
            <div className="photo small2"></div>
            <div className="photo wide"></div>
            <div className="photo wide2"></div>
          </div>
        </div>
      </section>

      <section>
      <div className="footer-section" id="footer">
  <div className="footer-left">
    <h2>Contact Us</h2>
    <p>
      If you have any questions, feel free to reach out to us! <br />
      We'll make sure to reach back to you as soon as possible. <br />
    </p>
    <p style={{ textDecoration: "underline" }}>
  mosaic@iilm.edu
</p>
<p style={{ textDecoration: "underline" }}>
  Zulkar Nain: +91 8082882315,<br/>Nandani: +91 9354486770
</p>

    <br/>
    <h2>Follow Us On</h2>
    <div className="social-links">
    <a href="https://instagram.com/aaghaz_iilm/" target="_blank" rel="noopener noreferrer">
    <img src="insta.png" alt="" /> <span> <p>Aaghaaz IILM</p></span>
  </a>
  <a href="https://www.instagram.com/mosaic.annualfest/" target="_blank" rel="noopener noreferrer">
    <img src="insta.png" alt="" /> <span><p>Mosaic Annual Fest</p></span>
  </a>
  <a href="https://www.instagram.com/mosaic.annualfest/" target="_blank" rel="noopener noreferrer">
    <img src="unstop.png" alt="" /> <span><p>Unstop</p></span>
  </a>
  
</div>
  </div>

  <div className="footer-right">
    <p>IILM University</p>
    <p>Greater Noida, Knowledge Park</p>
    <a 
      href="https://www.google.com/maps/place/IILM+University,+Greater+Noida/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="location-link"
    >
      <img src="m11.png" alt="" />
      View on Google Maps
    </a>
  </div>
</div>

      </section>
    </div>
  );
};

export default HeroSection;

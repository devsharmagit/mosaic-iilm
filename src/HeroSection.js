import React, { useState, useEffect } from 'react';
import './App.css';


const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isMobile, setIsMobile] = useState(false);

  const calculateTimeLeft = () => {
    const eventDate = new Date("February 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
      return null; // Event expired
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is the breakpoint for mobile
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

  return (
    <div>
      {/* Hero Section */}
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

      {/* About Mosaic Section - Desktop and Mobile view */}
      <section id="about" className="about-section">
        <h2>About Mosaic</h2>

        {isMobile ? (
          // Mobile View Content
          <>
            <p><strong>MOSAIC 2025</strong> – IILM University's three-day cultural extravaganza is here! 🎉 Join us on <strong>30th, 31st January, and 1st February</strong> for an unforgettable celebration of <strong>talent, creativity, and innovation</strong>.</p>
            <p>With over <strong>a decade of legacy</strong>, Mosaic features <strong>electrifying music</strong>, <strong>dance battles</strong>, <strong>drama</strong>, and <strong>artistic showcases</strong>, attracting <strong>5000+ daily visitors</strong>.</p>
            <p>This year, we’re raising the bar, bringing together participants and enthusiasts from across the country.</p>
            <p>Don’t miss the magic of <strong>MOSAIC 2025</strong> – where creativity and camaraderie shine! ✨</p>
          </>
        ) : (
          // Desktop View Content
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

      {/* Events Section */}
      <section id="events" className="events-section">
  <h2>Event Details</h2>
  <div className="events-slider">
    <div className="events-container">
      {[
        {
          title: "Singing",
          date: "30th January 2025",
          time: "6:00 PM - 9:00 PM",
          venue: "Main Auditorium",
          buttonText: "Register Now",
          backgroundImage: "url('sing.png')"
        },
        {
          title: "Dance",
          date: "5th February 2025",
          time: "7:00 PM - 10:00 PM",
          venue: "Conference Hall",
          buttonText: "Sign Up",
          backgroundImage: "url('dance.png')"
        },
        {
          title: "Event 3",
          date: "12th February 2025",
          time: "8:00 PM - 11:00 PM",
          venue: "Lecture Hall",
          buttonText: "Join Now",
          backgroundImage: "url('party.png')"
        },
        {
          title: "Event 4",
          date: "15th February 2025",
          time: "5:00 PM - 8:00 PM",
          venue: "VIP Room",
          buttonText: "RSVP Now",
          backgroundImage: "url('path/to/image4.jpg')"
        },
        {
          title: "Event 5",
          date: "20th February 2025",
          time: "9:00 AM - 12:00 PM",
          venue: "Outdoor Stage",
          buttonText: "Register Now",
          backgroundImage: "url('path/to/image5.jpg')"
        },
        {
          title: "Event 6",
          date: "25th February 2025",
          time: "1:00 PM - 4:00 PM",
          venue: "Main Auditorium",
          buttonText: "Sign Up",
          backgroundImage: "url('path/to/image6.jpg')"
        },
        {
          title: "Event 7",
          date: "3rd March 2025",
          time: "3:00 PM - 6:00 PM",
          venue: "Lobby Area",
          buttonText: "Join Now",
          backgroundImage: "url('path/to/image7.jpg')"
        },
        {
          title: "Event 8",
          date: "10th March 2025",
          time: "10:00 AM - 1:00 PM",
          venue: "Conference Room A",
          buttonText: "RSVP Now",
          backgroundImage: "url('path/to/image8.jpg')"
        },
        {
          title: "Event 9",
          date: "17th March 2025",
          time: "11:00 AM - 2:00 PM",
          venue: "Event Hall",
          buttonText: "Register Now",
          backgroundImage: "url('path/to/image9.jpg')"
        }
      ].map((event, index) => (
        <div className={`event event-${index + 1}`} key={index} style={{ backgroundImage: event.backgroundImage }}>
          <h3>{event.title}</h3>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Venue: {event.venue}</p>
          <button className="btn1">{event.buttonText}</button>
        </div>
      ))}
    </div>
  </div>
</section>

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

    <br/>
    <h2>Follow Us On</h2>
    <div className="social-links">
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <img src="insta.png" alt="" /> <span>Instagram</span>
  </a>
  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
    <img src="twitter.png" alt="" /> <span>Twitter</span>
  </a>
  <a href="https://www.face.com/" target="_blank" rel="noopener noreferrer">
    <img src="m3.png" alt="" /> <span>Facebook</span>
  </a>
  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
    <img src="dance.png" alt="" className="yt" /> <span>Youtube</span>
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
      <img src="location.png" alt="" />
      View on Google Maps
    </a>
  </div>
</div>

      </section>
    </div>
  );
};

export default HeroSection;

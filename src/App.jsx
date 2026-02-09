import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  Camera,
  Video,
  Share2,
  TrendingUp,
  Mail,
  Instagram,
  Globe,
  ChevronRight,
  Play,
  CheckCircle2,
  Users,
  Eye,
  Award
} from 'lucide-react';
import './App.css';

const Navbar = () => (
  <nav className="navbar glass-morphism">
    <div className="container nav-content">
      <div className="logo">
        <span className="logo-text">THE HANDLER</span>
      </div>
      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#stats">Impact</a>
        <a href="#contact" className="btn-nav">Book Now</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero">
    <div className="hero-overlay"></div>
    <div className="container hero-content">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="hero-badge">HANDLER TI JI</span>
        <h1>We Don't Just Cover Events <span className="text-gradient">We Amplify Them.</span></h1>
        <p className="hero-subtitle">
          Professional media brand dedicated to documenting church and corporate events
          with strategy, speed, and storytelling.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-primary">
            Book Our Services <ChevronRight size={20} />
          </a>
          <a href="#services" className="btn-outline">
            What We Do
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="stats-section">
    <div className="container">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><Video size={24} /></div>
          <h3>30+</h3>
          <p>Major Events</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Eye size={24} /></div>
          <h3>100M+</h3>
          <p>Total Views</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><TrendingUp size={24} /></div>
          <h3>50M+</h3>
          <p>Monthly Reach</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Globe size={24} /></div>
          <h3>Global</h3>
          <p>Coverage</p>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Reels-First Content",
      desc: "Optimized for mobile viewing, designed to capture attention in the first 3 seconds.",
      icon: <Video className="service-icon" />,
    },
    {
      title: "High-Impact Videos",
      desc: "Cinematic quality storytelling that captures the spirit and power of your event.",
      icon: <Camera className="service-icon" />,
    },
    {
      title: "Strategic Posting",
      desc: "Daily management and posting across our massive internal distribution networks.",
      icon: <Share2 className="service-icon" />,
    },
    {
      title: "Viral Distribution",
      desc: "Leveraging our 50M+ monthly reach within the Christian digital space.",
      icon: <TrendingUp className="service-icon" />,
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="text-gradient font-heading">CORE OFFER</span>
          <h2>Our Specialized <span className="text-gradient">Services</span></h2>
          <p>Turning moments into content that travels far beyond the venue.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card glass-morphism"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => (
  <section id="portfolio" className="section-padding">
    <div className="container">
      <div className="section-header">
        <span className="text-gradient font-heading">OUR REACH</span>
        <h2>Proven <span className="text-gradient">Impact</span></h2>
        <p>Real results from real events. We make your vision go viral.</p>
      </div>
      <div className="portfolio-grid">
        <motion.div
          className="portfolio-item glass-morphism"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img src="/assets/portfolio_1.png" alt="Live Event Coverage" className="portfolio-img" />
          <div className="portfolio-info">
            <h4>Global Event Coverage</h4>
            <p>From church conferences to corporate launches across nations.</p>
          </div>
        </motion.div>
        <motion.div
          className="portfolio-item glass-morphism"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <img src="/assets/portfolio_2.png" alt="Viral Impact" className="portfolio-img" />
          <div className="portfolio-info">
            <h4>18-30M Monthly Views</h4>
            <p>Strategic distribution that makes the Body of Christ go viral.</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section-padding about-section">
    <div className="container">
      <div className="about-grid">
        <div className="about-image-wrapper">
          <img src="/assets/founder.jpg" alt="White Barry" className="founder-img" />
          <div className="about-badge glass-morphism">
            <h4>White Barry</h4>
            <p>Director, THE HANDLER</p>
          </div>
        </div>
        <div className="about-content">
          <span className="text-gradient font-heading">THE VISIONARY</span>
          <h2>Meet <span className="text-gradient">Son Of The Prophet</span></h2>
          <p className="lead">
            Also known as White Barry, the Director of THE HANDLER BRAND.
            A media leader helping to amplify events across the world.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <CheckCircle2 className="text-gradient" />
              <span>Documenting with strategy and speed</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 className="text-gradient" />
              <span>18-30 Million IG views monthly</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 className="text-gradient" />
              <span>Globally Established in 2026</span>
            </div>
          </div>
          <p>
            "If your event deserves visibility, excellence, and global reach,
            trust us to handle it professionally. We don't just cover events — we amplify them."
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section-padding contact-section">
    <div className="container">
      <div className="contact-card glass-morphism">
        <div className="contact-info">
          <h2>Ready to <span className="text-gradient">Amplify</span> Your Event?</h2>
          <p>Bookings are paid and intentional. Join the list of premium events we cover worldwide.</p>
          <div className="contact-methods">
            <div className="contact-item">
              <Mail className="text-gradient" />
              <div>
                <h4>Email Us Today</h4>
                <p>sonoftheprophet.whitebarry@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <Instagram className="text-gradient" />
              <div>
                <h4>Follow the Journey</h4>
                <p>@sonoftheprophet</p>
              </div>
            </div>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Tell us about your event" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn-primary w-full">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container footer-content">
      <div className="footer-logo">
        <h2 className="logo-text">THE HANDLER</h2>
        <p>Amplify your impact. Everywhere.</p>
      </div>
      <div className="footer-links">
        <div className="link-group">
          <h4>Navigation</h4>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#stats">Impact</a>
        </div>
        <div className="link-group">
          <h4>Social</h4>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p>&copy; 2026 THE HANDLER BRAND. All Rights Reserved. Globally Established.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

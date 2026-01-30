import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronRight } from "react-icons/fa";
import footerdata from "../../../data/footerdata";
import "./Footer.css";

const Footer = () => {
  const lang = useSelector((state) => state.language.langue) || "en";
  const isArabic = lang === "ar";


  const t = footerdata[lang];

  return (
    <footer className={`footer-glass ${isArabic ? "rtl" : ""}`}>
      <div className="footer-container">
        <div className="footer-main-grid">
          
          {/* Card 1: Brand */}
          <div className="footer-card brand-card">
            <h2 className="brand-logo">DEV.PORTFOLIO</h2>
            <p>{t.tagline}</p>
            <div className="status-badge">
              <span className="pulse-icon"></span> {t.status}
            </div>
          </div>

          {/* Card 2: Quick Links */}
          <div className="footer-card">
            <h3>{t.quickLinks}</h3>
            <ul className="footer-nav-list">
              <li><Link to="/"><FaChevronRight className="chevron"/> {t.nav.home}</Link></li>
              <li><Link to="/about"><FaChevronRight className="chevron"/> {t.nav.about}</Link></li>
              <li><Link to="/projects"><FaChevronRight className="chevron"/> {t.nav.projects}</Link></li>
              <li><Link to="/skills"><FaChevronRight className="chevron"/> {t.nav.skills}</Link></li>
              <li><Link to="/contact"><FaChevronRight className="chevron"/> {t.nav.contact}</Link></li>
            </ul>
          </div>

          <div className="footer-card">
            <h3>{t.specialized}</h3>
            <ul className="spec-list">
                {t.specialties.map((s)=>(
                  <li>{s}</li>
                ))}
            </ul>
          </div>

          <div className="footer-card contact-card">
            <h3>{t.getInTouch}</h3>
            <div className="social-icons-row">
              <a href="https://github.com/Mohamedredaber" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/mohamed-reda-berhouma-440a59373/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
            <Link to="/contact" className="footer-cta-btn">{t.contactBtn}</Link>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} — {t.rights}</p>
          <div className="tech-info">
            Built with <strong>React 19</strong> & <span className="laravel-tag">Laravel 11</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
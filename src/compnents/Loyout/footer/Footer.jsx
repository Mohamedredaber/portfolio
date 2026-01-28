import { useSelector } from "react-redux";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const lang = useSelector((state) => state.language.langue) || "en";
  const isArabic = lang === "ar";

  const content = {
    en: { rights: "All rights reserved.", status: "Available for work" },
    fr: { rights: "Tous droits réservés.", status: "Disponible pour travaill" },
    ar: { rights: "جميع الحقوق محفوظة.", status: "متاح للعمل " }
  };
  const t = content[lang];
  return (
    <footer className={`footer ${isArabic ? "rtl" : ""}`}>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">DEV.PORTFOLIO</span>
            <p className="footer-status">
              <span className="status-dot"></span> {t.status}
            </p>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com/Mohamedredaber" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mohamed-reda-berhouma-440a59373/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:ridabarhouma@gmail.com" target="_blank" ><FaEnvelope /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} — {t.rights}</p>
          <div className="footer-stack-info">
            Built with <span>React</span> & <span>Laravel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateLanguage } from "../../../features/language/languageslice";
import Logo from "../logo/logo";
import "./Header.css";


const labels = {
  en: { home: "Home", about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
  fr: { home: "Accueil", about: "À propos", skills: "Compétences", projects: "Projets", contact: "Contact" },
  ar: { home: "الرئيسية", about: "نبذة", skills: "المهارات", projects: "المشاريع", contact: "تواصل" },
};
export default function Header() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const lang = useSelector((s) => s.language.langue) || "en";
  const t = labels[lang] || labels.en;
  const isRTL = lang === "ar";

  const changeLang = (v) => {
    dispatch(updateLanguage(v));
    setOpen(false);
  };

  return (
    <header className={`site-header ${isRTL ? "rtl" : ""}`}>
      <div className="site-header__container">
        <NavLink to="/" className="site-header__logo" onClick={() => setOpen(false)}>
        <Logo/>

        </NavLink>

        {/* Desktop */}
        <nav className="site-header__nav">
          <ul className="site-header__links">
            <li><NavLink to="/" end>{t.home}</NavLink></li>
            <li><NavLink to="/about">{t.about}</NavLink></li>
            <li><NavLink to="/skills">{t.skills}</NavLink></li>
            <li><NavLink to="/projects">{t.projects}</NavLink></li>
            <li><NavLink to="/contact">{t.contact}</NavLink></li>
          </ul>

          <div className="site-header__lang">
            <button className={lang === "en" ? "active" : ""} onClick={() => changeLang("en")}>EN</button>
            <button className={lang === "fr" ? "active" : ""} onClick={() => changeLang("fr")}>FR</button>
            <button className={lang === "ar" ? "active" : ""} onClick={() => changeLang("ar")}>AR</button>
          </div>
        </nav>

        {/* Mobile burger */}
        <button
          className={`site-header__burger ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`site-header__drawer ${open ? "show" : ""}`}>
        <div className="site-header__panel">
          <div className="site-header__panelTop">
            <span>Menu</span>
            <button className="site-header__close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="site-header__lang mobile">
            <button className={lang === "en" ? "active" : ""} onClick={() => changeLang("en")}>EN</button>
            <button className={lang === "fr" ? "active" : ""} onClick={() => changeLang("fr")}>FR</button>
            <button className={lang === "ar" ? "active" : ""} onClick={() => changeLang("ar")}>AR</button>
          </div>

          <ul className="site-header__mobileLinks">
            <li><NavLink to="/" end onClick={() => setOpen(false)}>{t.home}</NavLink></li>
            <li><NavLink to="/about" onClick={() => setOpen(false)}>{t.about}</NavLink></li>
            <li><NavLink to="/skills" onClick={() => setOpen(false)}>{t.skills}</NavLink></li>
            <li><NavLink to="/projects" onClick={() => setOpen(false)}>{t.projects}</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setOpen(false)}>{t.contact}</NavLink></li>
          </ul>
        </div>

        <div className="site-header__overlay" onClick={() => setOpen(false)} />
      </div>
    </header>
  );
}

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroData from "../../data/heroData";
import "./Home.css";

export default function Home() {
  const [lang, setLang] = useState("en"); // "en" | "fr" | "ar"
  const t = useMemo(() => heroData[lang], [lang]);
  const isArabic = lang === "ar";
  const navigate = useNavigate();
  return (
    <section className={`hero-page ${isArabic ? "rtl" : ""}`}>
      <div className="hero-wrap">
        <div className="lang-switch">
          <button
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            className={lang === "fr" ? "active" : ""}
            onClick={() => setLang("fr")}
          >
            FR
          </button>
          <button
            className={lang === "ar" ? "active" : ""}
            onClick={() => setLang("ar")}
          >
            AR
          </button>
        </div>

        <div className="hero-grid">
          <div className="avatar-glow">
            <div className="avatar-ring">
              <img
                src="/images/profile/myprofile.png"
                alt="Mohamed Reda Berhouma"
                className="avatar-img"
                loading="eager"
              />
            </div>
          </div>

          <div className="hero-content">
            <span className="hero-badge">{t.badge}</span>

            <h1 className="hero-title">
              {t.hi} <span className="grad">{t.name}</span>
            </h1>

            <h2 className="hero-role">{t.role}</h2>

            <p className="hero-desc">{t.desc}</p>

            <div className="hero-actions">
              <button className="btn primary" onClick={() => navigate("/projects")}>
                {t.btnProjects} <span className="arrow">→</span>
              </button>

              <a className="btn ghost" href="/images/cv/CV.pdf" download>
                <span className="dl">⬇</span> {t.btnCV}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import heroData from "../../data/heroData";
import { useSelector } from "react-redux";
import "./Home.css";

export default function Home() {
  const lang = useSelector((state) => state.language.langue) || "en";

  const t = useMemo(() => heroData[lang] || heroData.en, [lang]);
  const isArabic = lang === "ar";
  const navigate = useNavigate();
  return (
    <section className={`hero-page ${isArabic ? "rtl" : ""}`}>
      <div className="hero-wrap">
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

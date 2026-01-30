import { useMemo } from "react";
import heroData from "../../data/heroData";
import ButtonvievProject from "../../compnents/common/ButtonvievProject";
import BtnDownload from "../../compnents/common/BtnDownload";
import { useSelector } from "react-redux";
import "./Home.css";
const base = import.meta.env.BASE_URL;

export default function Home() {
  const lang = useSelector((state) => state.language.langue) || "en";

  const t = useMemo(() => heroData[lang] || heroData.en, [lang]);
  const isArabic = lang === "ar";

  return (
    <section className={`hero-page ${isArabic ? "rtl" : ""}`}>
      <div className="hero-wrap">
        <div className="hero-grid">
          <div className="avatar-glow">
            <div className="avatar-ring">
              <img
                src={`${base}//images/profile/myprofile.png`}
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
              <ButtonvievProject />
              <BtnDownload />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useSelector } from "react-redux";
import { useMemo } from "react";
import aboutPageData from "../../data/aboutPageData";
import ButtonvievProject from "../../compnents/common/ButtonvievProject";
import Btncontact from "../../compnents/common/Btncontact";
import "./About.css";

function About() {
  const lang = useSelector((state) => state.language.langue) || "en";
  const t = useMemo(() => aboutPageData[lang] || aboutPageData.en, [lang]);
  const isArabic = lang === "ar";

  return (
    <section className={`about-page ${isArabic ? "rtl" : ""}`}>
      <div className="about-container">
        

        <div className="about-hero">
          <header className="about-header">
            <h1>{t.pageTitle}</h1>
      

            <p className="subtitle">{t.pageSubtitle}</p>
          
          </header>

          <div className="about-cta-main">
            <div>


            <ButtonvievProject />
            <Btncontact />
            </div>
          </div>
        </div>

        <div className="about-content-layout">
          
          {/* 2. STORY SECTION */}
          <article className="about-section bio">
            <h2 className="section-title">{t.cards.story.title}</h2>
            {t.cards.story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </article>

          {/* 3. TIMELINE GRID (Education & Experience) */}
          <div className="timeline-grid">
            <div className="about-section">
              <h2 className="section-title">{t.cards.education.title}</h2>
              <div className="professional-timeline">
                {t.cards.education.items.map((item, i) => (
                  <div className="timeline-node" key={i}>
                    <span className="node-date">{item.period}</span>
                    <h3>{item.title}</h3>
                    <span className="node-place">{item.place}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-section">
              <h2 className="section-title">{t.cards.experience.title}</h2>
              <div className="professional-timeline">
                {t.cards.experience.items.map((item, i) => (
                  <div className="timeline-node" key={i}>
                    <span className="node-date">{item.period}</span>
                    <h3>{item.title}</h3>
                    <span className="node-place">{item.place}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. ACHIEVEMENTS SECTION (Full Width Bottom) */}
          <article className="about-section achievements">
            <h2 className="section-title">{t.cards.achievements.title}</h2>
            <div className="achievements-grid">
              {t.cards.achievements.items.map((item, i) => (
                <div className="achievement-card" key={i}>
                  <span className="achievement-dot" />
                  <p className="achievement-text">{item}</p>
                </div>
              ))}
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default About;
import { useMemo } from "react";
import { useSelector } from "react-redux";
import skillsData from "../../data/skillsData";
import skillsPageData from "../../data/skillsPageData";
import "./Skills.css";
import Sectionheader from "../../compnents/common/sectionheader/Sectionheader";
export default function Skills() {
  const lang = useSelector((state) => state.language.langue) || "en";
  const isArabic = lang === "ar";
  const t = skillsPageData[lang] || skillsPageData.en;

  // Groupement des compétences par catégorie
  const grouped = useMemo(() => {
    return skillsData.items.reduce((acc, item) => {
      (acc[item.category] = acc[item.category] || []).push(item);
      return acc;
    }, {});
  }, []);

  const categoryOrder = ["frontend", "backend", "database", "devops", "tools", "other"];

  // Fonction pour obtenir la classe CSS du badge selon le niveau
  const getBadgeClass = (levelKey) => {
    const v = levelKey.toLowerCase();
    if (v.includes("beginner")) return "is-beginner";
    if (v.includes("intermediate")) return "is-intermediate";
    if (v.includes("advanced")) return "is-advanced";
    return "is-default";
  };

  return (
    <section className={`skills-page ${isArabic ? "rtl" : ""}`}>
      <div className="skills-container">
        <Sectionheader title={t.title} subtitule={t.description}/>
        <div className="skills-categories">
          {categoryOrder.map((catKey) => {
            const categoryItems = grouped[catKey] || [];
            if (categoryItems.length === 0) return null; // Ne pas afficher de catégorie vide

            return (
              <div className="skills-category" key={catKey}>
                <div className="skills-category-head">
                  <h2>{skillsData.categories[catKey][lang]}</h2>
                  <span className="skills-count">
                    {categoryItems.length} {t.items}
                  </span>
                </div>

                <div className="skills-grid">
                  {categoryItems.map((item) => (
                    <article className="skill-card" key={item.name}>
                      <div className="skill-left">
                        <div className="skill-icon-wrap">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="skill-icon"
                            loading="lazy"
                          />
                        </div>
                        <div className="skill-info">
                          <h3 className="skill-name">{item.name}</h3>
                          <p className="skill-sub">
                            {skillsData.categories[catKey][lang]}
                          </p>
                        </div>
                      </div>

                      <span className={`skill-badge ${getBadgeClass(item.level)}`}>
                        {skillsData.levels[item.level][lang]}
                      </span>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
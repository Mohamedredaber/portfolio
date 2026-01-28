import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import projectsData from "../../data/projectsdata";
import "./Projects.css";

function Projects() {
  const lang = useSelector((state) => state.language.langue) || "en";
  const t = useMemo(() => projectsData[lang] || projectsData.en, [lang]);
  const isArabic = lang === "ar";

  return (
    <section className={`projets-page ${isArabic ? "rtl" : ""}`}>
      <div className="projets-container">
        <header className="projets-header">
          <h1 className="projets-title">{t.meta.pageTitle}</h1>
          <p className="projets-subtitle">{t.meta.pageSubtitle}</p>
        </header>

        <div className="projects-grid">
          {t.items.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.slug}`}
              className="project-link"
              aria-label={`Open ${p.title}`}
            >
              <article className="projects-card">
                <div className="project-media">
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    className="project-img"
                    loading="lazy"
                  />
                </div>

                <div className="project-body">
                  <h2 className="project-title">{p.title}</h2>
                  <p className="project-desc">{p.shortDescription}</p>

                  {p.technologies?.length ? (
                    <div className="project-tech">
                      {p.technologies.slice(0, 4).map((tech) => (
                        <span className="tech-badge" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="project-cta">
                    <span className="btn-more">
                      {t.meta.labels.viewMore}{" "}
                      <span className="arrow">{isArabic ? "←" : "→"}</span>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

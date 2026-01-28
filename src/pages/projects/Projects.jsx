import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import projectsData from "../../data/projectsdata";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const lang = useSelector((state) => state.language.langue) || "en";
  const isArabic = lang === "ar";
  const t = useMemo(() => projectsData[lang] || projectsData.en, [lang]);

  return (
    <section className={`projets-page ${isArabic ? "rtl" : ""}`}>
      <div className="projets-container">
        <header className="projets-header">
          <h1 className="projets-title">{t.meta.pageTitle}</h1>
          <p className="projets-subtitle">{t.meta.pageSubtitle}</p>
        </header>

        <div className="projects-grid">
          {t.items.map((p) => (
            <article className="projects-card" key={p.id}>
              
              <div className="project-media">
                <Link to={`/projects/${p.slug}`} className="project-link">
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    className="project-img"
                    loading="lazy"
                  />
                </Link>

                {p.links?.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-icon"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="GitHub source code"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>

              <div className="project-body">
                <h2 className="project-title">{p.title}</h2>
                <p className="project-desc">{p.shortDescription}</p>

                <div className="project-tech">
                  {p.technologies?.slice(0, 4).map((tech) => (
                    <span className="tech-badge" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-cta">
                  <Link to={`/projects/${p.slug}`} className="btn-more">
                    {t.meta.labels.viewMore}
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

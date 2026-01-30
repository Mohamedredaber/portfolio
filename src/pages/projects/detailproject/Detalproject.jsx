import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import projectsData from "../../../data/projectsdata";
import Team from "../team/Team";
import "./ProjectDetails.css";

function isSafeHttpUrl(url) {
  if (!url) return false;
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export default function ProjectDetails() {
  const { slug } = useParams();

  const lang = useSelector((state) => state.language.langue) || "en";
  const safeLang = projectsData[lang] ? lang : "en";
  const t = useMemo(() => projectsData[safeLang], [safeLang]);  
  const isArabic = safeLang === "ar";
  const project = useMemo(() => {
    if (!slug) return null;
    return t.items.find((p) => p.slug === slug) || null;
  }, [t.items, slug]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const labels = t.meta.labels;
  const team = project.team || null; 
  return (
    <section className={`project-details ${isArabic ? "rtl" : ""}`}>
      <div className="details-container">
        <div className="details-top">
          <Link className="back-btn" to="/projects">
            {labels.back} {isArabic ? "→" : "←"}
          </Link>
        </div>

        <header className="details-header">
          <h1 className="details-title">{project.title}</h1>
          <p className="details-sub">{project.shortDescription}</p>
        </header>
        {team && <Team team={team} isArabic={isArabic}  labels ={labels}/>}

        <div className="details-hero">
          <img
            src={project.coverImage}
            alt={project.title}
            className="details-img"
            loading="lazy"
          />
        </div>

        <div className="details-actions">
          {isSafeHttpUrl(project.links?.demo) ? (
            <a
              className="details-btn"
              href={project.links.demo}
              target="_blank"
              rel="noreferrer noopener"
            >
              {labels.liveDemo} ↗
            </a>
          ) : null}

          {isSafeHttpUrl(project.links?.github) ? (
            <a
              className="details-btn ghost"
              href={project.links.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              {labels.sourceCode} ↗
            </a>
          ) : null}
        </div>

        <article className="details-card">
          <h2 className="details-h2">{labels.technologies}</h2>
          <div className="chips">
            {(project.technologies || []).map((tech) => (
              <span className="chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </article>

        <article className="details-card">
          <h2 className="details-h2">{labels.features}</h2>
          <ul className="details-list">
            {(project.features || []).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </article>

        {project.gallery?.length ? (
          <article className="details-card">
            <h2 className="details-h2">{labels.gallery}</h2>

            <div className="gallery-grid">
              {project.gallery.map((g, i) => (
                <figure className="gallery-item" key={i}>
                  <img src={g.image} alt={g.title} loading="lazy" />
                  <figcaption>
                    <strong>{g.title}</strong>
                    <span>{g.description}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </article>
        ) : null}

        <article className="details-card">
          <p className="details-full">{project.fullDescription}</p>
        </article>
      </div>
    </section>
  );
}



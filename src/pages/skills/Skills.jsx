// import "./Skills.css";
import "./Skillscopy.css";
import skills from "../../data/skills";

export default function Skills() {
  return (
    <section className="skills-page">
      <div className="skills-container">
        <header className="skills-header">
          <h1>Skills</h1>
          <p>
            Here are my technical skills grouped by category. I'm continuously
            learning and improving.
          </p>
        </header>

        <div className="skills-categories">
          {skills.map((group) => (
            <div className="skills-category" key={group.category}>
              <div className="skills-category-head">
                <h2>{group.category}</h2>
                <span className="skills-count">{group.items.length} items</span>
              </div>

              <div className="skills-grid">
                {group.items.map((item) => (
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
                        <h3 className="skill-name" title={item.name}>
                          {item.name}
                        </h3>
                        <p className="skill-sub">{group.category}</p>
                      </div>
                    </div>

                    <span className={`skill-badge ${badgeClass(item.level)}`}>
                      {item.level}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Convert level to a css class for badge styling */
function badgeClass(level) {
  const v = (level || "").toLowerCase();
  if (v.includes("beginner")) return "is-beginner";
  if (v.includes("intermediate")) return "is-intermediate";
  if (v.includes("advanced")) return "is-advanced";
  return "is-default";
}

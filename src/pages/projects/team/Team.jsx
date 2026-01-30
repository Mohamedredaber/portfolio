import {
//   FaGithub,
  FaLinkedin,
//   FaEnvelope,
//   FaPhoneAlt,
  FaUsers,
} from "react-icons/fa";
import "./Team.css";

function safeHttp(url) {
  if (!url) return false;
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export default function Team({ team, labels, isArabic }) {
  if (!team || !team.members?.length) return null;

  const L = labels || {};

  return (
    <article className={`details-card team-card ${isArabic ? "rtl" : ""}`}>
      <div className="team-head">
        <div className="team-icon">
          <FaUsers />
        </div>

        <div className="team-head-text">
          <h2 className="details-h2 team-title">
            {team.title || L.team || "Team"}
          </h2>
          {team.subtitle ? (
            <p className="team-sub">{team.subtitle}</p>
          ) : L.teamSubtitle ? (
            <p className="team-sub">{L.teamSubtitle}</p>
          ) : null}
        </div>
      </div>

      <div className="team-grid">
        {team.members.map((m) => {
        //   const github = m?.contact?.github;
          const linkedin = m?.contact?.linkedin;
        //   const email = m?.contact?.email;
        //   const phone = m?.contact?.phone;
          const avatar = m?.avatar;

          return (
            <div className="team-member" key={m.id || m.name}>
              <div className="member-top">
                <div className="member-avatar">
                  {avatar ? (
                    <img src={avatar} alt={m.name} loading="lazy" />
                  ) : (
                    <span className="member-initial">
                      {(m?.name || "?").trim().slice(0, 1)}
                    </span>
                  )}
                </div>

                <div className="member-meta">
                  <h3 className="member-name">{m.name}</h3>
                  {m.role ? <p className="member-role">{m.role}</p> : null}
                </div>
              </div>

              {m.description ? (
                <p className="member-desc">{m.description}</p>
              ) : null}

              <div className="member-contacts">
                {/* {
                email ? (
                  <a className="contact-pill" href={`mailto:${email}`}>
                    <FaEnvelope />
                    <span>{L.email || "Email"}</span>
                  </a>
                ) : null} */}
{/* 
                {phone ? (
                  <a className="contact-pill" href={`tel:${phone}`}>
                    <FaPhoneAlt />
                    <span>{L.phone || "Phone"}</span>
                  </a>
                ) : null} */}

                {/* {safeHttp(github) ? (
                  <a
                    className="contact-pill"
                    href={github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaGithub />
                    <span>{L.github || "GitHub"}</span>
                  </a>
                ) : null} */}

                {safeHttp(linkedin) ? (
                  <a
                    className="contact-pill"
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaLinkedin />
                    <span>{L.linkedin || "LinkedIn"}</span>
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

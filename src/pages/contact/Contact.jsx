import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Mail, Phone, MapPin } from "lucide-react";
import contactPageData from "../../data/contactPageData";
import "./Contact.css";
export default function Contact() {
  const lang = useSelector((state) => state.language.langue) || "en";
  const t = useMemo(() => contactPageData[lang] || contactPageData.en, [lang]);
  const isArabic = lang === "ar";

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // later: EmailJS integration
    console.log("FORM DATA:", form);
    alert(t.form.success);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className={`contact-page ${isArabic ? "rtl" : ""}`}>
      <div className="contact-container">
 
        <header className="contact-header">
          <h1 className="contact-title">{t.pageTitle}</h1>
          <p className="contact-subtitle">{t.pageSubtitle}</p>
          <p className="contact-intro">{t.intro}</p>
        </header>

        <div className="contact-grid">
    
          <aside className="contact-card">
            <h2 className="card-title">{t.pageTitle}</h2>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon"><Mail size={20}/></div>
                <div className="info-text">
                  <span className="info-label">{t.info.emailLabel}</span>
                  <a className="info-value" href={`mailto:${t.info.emailValue}`}>
                    {t.info.emailValue}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Phone size={20}/></div>
                <div className="info-text">
                  <span className="info-label">{t.info.phoneLabel}</span>
                  <a className="info-value" href={`tel:${t.info.phoneValue}`}>
                    {t.info.phoneValue}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><MapPin size={20}/></div>
                <div className="info-text">
                  <span className="info-label">{t.info.locationLabel}</span>
                  <span className="info-value">{t.info.locationValue}</span>
                </div>
              </div>
            </div>

            <div className="social-block">
              <h3 className="social-title">{t.social.title}</h3>
              <div className="social-links">
                {t.social.items.map((s) => (
                  <a
                    key={s.name}
                    className="social-link"
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.name} <span className="ext">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
          <div className="contact-card form-card">
            <h2 className="card-title">{t.form.title}</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field-grid">
                <div className="field">
                  <label>{t.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.form.name}
                    required
                  />
                </div>

                <div className="field">
                  <label>{t.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.form.email}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label>{t.form.subject}</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={t.form.subject}
                  required
                />
              </div>

              <div className="field">
                <label>{t.form.message}</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.form.message}
                  rows="6"
                  required
                />
              </div>

              <button className="send-btn" type="submit">
                {t.form.button} <span className="arrow">{isArabic ?'←' : "→" } </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useMemo } from "react";
import viewproject from "../../data/viewproject";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ButtonvievProject.css";

function ButtonvievProject() {
  const navigate = useNavigate();
  const lang = useSelector((state) => state.language.langue) || "en";
  const t = useMemo(() => viewproject[lang] || viewproject.en, [lang]);
  return (
 
      <button className="btn primary" onClick={() => navigate("/projects")}>
        {t.btnProjects} <span className="arrow">→</span>
      </button>

  );
}

export default ButtonvievProject;

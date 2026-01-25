import { useSelector } from "react-redux";
import btncontactdata from "../../data/btncontactdata";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import "./BtnDownload.css";
function Btncontact() {
  const navigate =useNavigate()
  const lang = useSelector((state) => state.language.langue) || "en";
  const t = useMemo(
    () => btncontactdata[lang] || btncontactdata.en,
    [lang],
  );
  return (
    <>
      <button className="btn ghost" onClick={() => navigate("/contact")}>
        {t.contact} <span className="arrow">→</span>
      </button>
    </>
  );
}
export default Btncontact;
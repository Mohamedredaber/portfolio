import downloadcvbtndata from "../../data/downloadcvbtndata";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import "./BtnDownload.css";

function BtnDownload() {
  const base = import.meta.env.BASE_URL;
  const lang = useSelector((state) => state.language.langue) || "en";
  const t = useMemo(
    () => downloadcvbtndata[lang] || downloadcvbtndata.en,
    [lang],
  );
  return (
    <a className="btn ghost" href={`${base}images/cv/cv.pdf`} download>
      <span className="dl">⬇</span> {t.btnCV}
    </a>
  );
}

export default BtnDownload;

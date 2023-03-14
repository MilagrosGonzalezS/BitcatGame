import "../styles/style.scss";
import roadmap from "../imgs/roadmap.png";
import roadmapES from "../imgs/roadmapSPANISH.png";
import Skills from "../imgs/skills.png";
import SkillsES from "../imgs/skillsSPANISH.png";
import { useTranslation } from "react-i18next";
import { isSpanish } from "../utils";

function Roadmap() {
  const { t, i18n } = useTranslation();

  const esp = isSpanish(i18n);

  return (
    <div>
      <div className="roadmap" id="roadmap">
        <img src={esp ? roadmapES : roadmap} alt="roadmap" />
        <img src={esp ? SkillsES : Skills} alt={t("skills")} />
      </div>
    </div>
  );
}

export default Roadmap;

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import computer from "./imgs/computer.png";
import "./styles/style.scss";
import "./styles/download.scss";
import logo from "./imgs/logo-bitcat.webp";
import PC from "./imgs/PC.png";
import browser from "./imgs/browser.png";
import android from "./imgs/android.png";

function MenuItem({ href, title, onClickHandler }) {
  return (
    <li className="nav_link" onClick={onClickHandler}>
      <a href={href}>{title}</a>
    </li>
  );
}

function DownloadPage() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang === "spanish" ? "es" : "en");
  };
  return (
    <>
      <div className="header">
        <nav className="nav">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="bitcat logo" />
            </Link>
          </div>
          <ul className="nav-open">
            <MenuItem title={t("home_page")} href="/" />
            <li className="nav_link">
              <label htmlFor="languages">Languages</label>
              <select
                onChange={(e) => handleChangeLanguage(e)}
                name="languages"
                id="languages"
                defaultValue="english"
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
      <div className="down-page">
        <div className="download-links-container">
          <h2>{t("develop_skills")}</h2>
          <div>
            <button>
              <a
                href={process.env.REACT_APP_PC}
                target="_blank"
                rel="noreferrer"
              >
                <img src={PC} alt="icon pc" />
                {t("download")}
                <span>PC</span>
              </a>
            </button>
            <button id="gray">
              <a
              // href={process.env.REACT_APP_BROWSER}
              // target="_blank"
              // rel="noreferrer"
              >
                <img src={browser} alt="icon browser" />
                {t("play_in")}
                <span>{t("browser")}</span>
              </a>
            </button>
            <button>
              <a
                href={process.env.REACT_APP_ANDROID}
                target="_blank"
                rel="noreferrer"
              >
                <img src={android} alt="icon android" />
                {t("download")}
                <span>Android</span>
              </a>
            </button>
          </div>
        </div>
        <div className="computer-img">
          <img src={computer} alt={t("computer")} />
        </div>
      </div>
    </>
  );
}

export default DownloadPage;

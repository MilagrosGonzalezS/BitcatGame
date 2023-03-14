import { useTranslation } from "react-i18next";
import "./styles/style.scss";
import "./styles/successReg.scss";
import logo from "./imgs/logo-bitcat.webp";
import sadCat from "./imgs/sadCat.png";

function MenuItem({ href, title, onClickHandler }) {
  return (
    <li className="nav_link" onClick={onClickHandler}>
      <a href={href}>{title}</a>
    </li>
  );
}

function FailedReg () {
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
            <a href="#home">
              <img src={logo} alt="bitcat logo" />
            </a>
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
      <div className="success">
        <div>
            <img src={sadCat} alt="cat with sunglasses" />
            <p>{t("sorry")}</p>
            <p>{t("invalid")}</p>
            
        </div>
      </div>
    </>
  )
}

export default FailedReg;
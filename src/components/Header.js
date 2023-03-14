import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { isSpanish } from "../utils";
import logo from "../imgs/logo-bitcat.webp";
import hamburger from "../imgs/hamburger.webp";
import play from "../imgs/play.png";
import playES from "../imgs/playSPANISH.png";
import "../styles/style.scss";

function MenuItem({ href, title, onClickHandler }) {
  return (
    <li className="nav_link" onClick={onClickHandler}>
      <a href={href}>{title}</a>
    </li>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const esp = isSpanish(i18n);

  function buttonClick() {
    setMenuOpen(!menuOpen);
  }

  const handleChangeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang === "spanish" ? "es" : "en");
  };

  return (
    <div>
      <div className="header">
        <nav className="nav">
          <div className="logo">
            <a href="#home">
              <img src={logo} alt="bitcat logo" />
            </a>
          </div>
          <ul className={`${menuOpen ? "nav-open nav-menu" : "nav-menu"}`}>
            <MenuItem
              title={t("home_page")}
              href="/#home"
              onClickHandler={buttonClick}
            />
            <MenuItem
              title={t("about")}
              href="/#about"
              onClickHandler={buttonClick}
            />
            <MenuItem
              title={t("register")}
              href="/#register"
              onClickHandler={buttonClick}
            />
            <MenuItem
              title={t("buy_tokens")}
              href="/#buy-tokens"
              onClickHandler={buttonClick}
            />
            <MenuItem
              title={t("tokenomics")}
              href="/#tokenomics"
              onClickHandler={buttonClick}
            />
            <MenuItem
              title={t("roadmap")}
              href="/#roadmap"
              onClickHandler={buttonClick}
            />
            <MenuItem
              title={t("subscribe")}
              href="/#social-media"
              onClickHandler={buttonClick}
            />
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
            <li className="nav_link">
              <Link to="/download-page">
                <img
                  src={esp ? playES : play}
                  className="play-soon"
                  alt={t("alt_play_soon")}
                />
              </Link>
            </li>
          </ul>
          <button className="nav--toggle" onClick={buttonClick}>
            <img
              className="hamburger"
              src={hamburger}
              alt={t("alt_hamburger_menu")}
            />
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Header;

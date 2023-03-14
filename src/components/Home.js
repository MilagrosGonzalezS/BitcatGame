import "../styles/style.scss";
import { useTranslation } from "react-i18next";
import React from "react";

import { isSpanish } from "../utils";

function Home() {
  const { t, i18n } = useTranslation();
  const esp = isSpanish(i18n);

  return (
    <div>
      <div className="home-container">
        <div className="home" id="home">
          <h1>
            {t("home_title_1")} <br />
            {t("home_title_2")}
          </h1>
          <div className="p-container">
            <p>{t("home_paragraph")}</p>
              <button>
                <a className="buy-now-home" href="#register" rel="noreferrer">
                  {t("register")}
                </a>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

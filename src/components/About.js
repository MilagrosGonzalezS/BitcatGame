import "../styles/style.scss";
import about from "../imgs/about.webp";
import aboutmobile from "../imgs/about-mobile.png";
// import stainmobile from "../imgs/stain-mobile.png";
import about1 from "../imgs/bg-about.png";
import about1ES from "../imgs/bg-aboutSPANISH.png";
import aboutMobile from "../imgs/bg-about-mobile.png";
import aboutMobileES from "../imgs/bg-about-mobileSPANISH.png";
import { useTranslation } from "react-i18next";
import { isSpanish } from "../utils";
import  QuickPlay from "../imgs/quickplay.png";
import  PrivateMatch from "../imgs/privatematch.png";
import  KingOfBitcat from "../imgs/kingofbitcat.png";
import feedbackCat from "../imgs/feedback-cat.png";
import playControl from "../imgs/play-control.png";

function About() {
  const { t, i18n } = useTranslation();

  const esp = isSpanish(i18n);

  return (
    <div>
      <div className="about" id="about">
        <div className="about1">
          <div className="square">
            <img src={esp ? about1ES : about1} alt={t("alt_about")} />
            <img className="about-mobile" src={esp ? aboutMobileES : aboutMobile} alt={t("alt_about")} />
          </div>
          <div className="img-container">
            <img src={about} alt={t("alt_cat_with_gun")} />
            <img
              className="about-mobile"
              src={aboutmobile}
              alt={t("alt_cat_with_gun")}
            />
          </div>
        </div>
        <div className="game-modes">
          <div>{t("game_modes1")}</div>
          <div>{t("game_modes2")}</div>
          <div>{t("game_modes3")}</div>
        </div>
        <div className="about2">
          <div className="container-modes">
            <div className="modes">
              <img src={QuickPlay} alt=".."/>
              <h4 className="mode1">{t("mode1")}</h4>
            </div>
            <p>{t("mode1_p")} <br/>
            <span className="beta-live">{t("beta_live")}</span>
            </p>
          </div>
          {/* <img src={stainmobile} alt="decoration" /> */}
          <div className="container-modes">
            <div className="modes">
              <img src={PrivateMatch} alt=".."/>
              <h4 className="mode2">{t("mode2")}</h4>
            </div>
            <p> {t("mode2_p")}
            </p>
          </div>
          {/* <img src={stainmobile} alt="decoration" /> */}
          <div className="container-modes">
            <div className="modes">
              <img className="king" src={KingOfBitcat} alt=".."/>
              <h4 className="mode3">{t("mode3")}</h4>
            </div>
            <p>{t("mode3_p")}
            </p>
          </div>
          {/* <img src={stainmobile} alt={t("alt_stain")} /> */}
        </div>
        <div className="feedback">
          <div>
            <img className="happy-cat" src={feedbackCat} alt="happy-cat"></img>
          </div>
          <div clasName="feedback-container">
            <p className="feed-title">{t("feedback_title")} </p>
            <p className="feed-p">  {t("feedback_p")}</p>
            <a href={esp ? "https://forms.gle/mZg5h5eyGGcZvWga8" : "https://forms.gle/Nqj9o6sJ8rYhFjGo7"} rel="noreferrer" target="_blank" >{t("give_feedback")}</a>
          </div>
          <div>
            <img src={playControl} alt="play control"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

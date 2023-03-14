import "../styles/style.scss";
import React, { useState } from "react";
import catsWebsite from "../imgs/catsWebsite.png";
import twitter from "../imgs/twitter.webp";
import telegram1 from "../imgs/telegram1.webp";
import telegram2 from "../imgs/telegram2.webp";
import discord from "../imgs/discord.webp";
import youtube from "../imgs/youtube.webp";
import subscribe from "../imgs/whitelisting.webp";
import subscribeES from "../imgs/whitelistingSPANISH.png";
import medium from "../imgs/medium.png";
import github from "../imgs/github.png";
import tiktok from "../imgs/tiktok.png";
import purpleBoxes from "../imgs/purple-boxes.png";
import playControl from "../imgs/play-control.png";
import SubscribeForm from "./SubscribeForm";
import { useTranslation } from "react-i18next";
import { isSpanish } from "../utils";


function SocialMedia() {
  const [openModal, setOpenModal] = useState(false);
  const { t,i18n } = useTranslation();

  const esp = isSpanish(i18n);
  return (
    <div>
      <div className="social-media" id="social-media">
        <div className="subscribe-container">
          <img src={playControl} alt="play station arrow control" />
          <h2>{t("subscribe_title")}</h2>
          <img src={purpleBoxes} alt={t("boxes")}/>
        </div>
        <div className="social-media-container">
          <div className="cats-social-media">
            <p>{t("subscribe_paragraph")}
            </p>
            <div>
              <img src={catsWebsite} alt={t("alt_cat_with_gun")} />
            </div>
            <button onClick={() => setOpenModal(true)}>
              <img className="subscribe " src={esp ? subscribeES : subscribe} alt={t("subscribe_form")} />
            </button>
            <SubscribeForm
              openModal={openModal}
              closeModal={() => setOpenModal(false)}
            />
          </div>
          <div className="social-media-half">
            <h4 className="channels-title">.</h4>
            <ul className="social-media-list">
              <li>
                <a
                  href="https://twitter.com/bitcatgame"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="twitter logo" />
                  <p className="principal">Twitter</p>
                </a>
              </li>
              <li>
                <a href="https://discord.gg/P2gP6P5knx">
                  <img src={discord} alt="discord logo" />
                  <p className="principal">Discord</p>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/bitcatgame"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={telegram1} alt="telegram logo" />
                  <p className="principal">Telegram (channel)</p>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/bitcatnews"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={telegram2} alt="telegram logo" />
                  <p className="principal">Telegram group</p>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@bitcatgame"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={youtube} alt="youtube logo" />
                  <p className="principal">Youtube</p>
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@bitcatgame"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={medium} alt="medium logo" />
                  <p className="principal">Medium</p>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/bitcatgame/token"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="github logo" />
                  <p className="principal">Github</p>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@bitcatgame"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={tiktok} alt="tiktok logo" />
                  <p className="principal">Tiktok</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;

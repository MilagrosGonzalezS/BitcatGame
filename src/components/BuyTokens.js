import "../styles/style.scss";
import purpleBoxes from "../imgs/purple-boxes.png";
// import { CONTRACT_ADDRESS } from "../index.js";
// import { Copy } from "react-feather";
import { useTranslation } from "react-i18next";
// import { useAlert } from "react-alert";
// import { useState } from "react";

function BuyTokens() {
  const { t } = useTranslation();
  // const alertMsg = useAlert();
  // const [completed, setCompleted] = useState(false);
  // const copyToClipboardHandler = async () => {
  //   try {
  //     await navigator.clipboard.writeText(CONTRACT_ADDRESS);
  //     alertMsg.success(t("copy_address_success"));
  //   } catch (error) {
  //     alertMsg.error(t("copy_address_error"));
  //   }
  // }

  return (
    <div>
      <div className="buy-tokens" id="buy-tokens">
        <div className="buy-container">
          <div className="buy-video">
            <iframe
              src="https://www.youtube.com/embed/7937HqnLEmc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="buy">
            <h3>
              {t("buy")} <img src={purpleBoxes} alt={t("boxes")} />
              <br />
              {t("tokens")}
            </h3>
            <p className="smart">{t("smart")}</p>
            <p className="address">{t("address")}</p>
            {/* <CopyIcon
                onClick={copyToClipboardHandler}
              /> */}
            <a
              className="buy-now"
              href="https://pancakeswap.finance/swap?outputCurrency=0xCa8C7B9ae56b7C5E49F9b6149B693F69800E27Be"
              target="_blank"
              rel="noreferrer"
            >
              {t("buy_now")}
            </a>
          </div>
        </div>
        <div className="buy-mobile">
          <h3>
            {t("buy")}
            {t("tokens")}
          </h3>
          <img src={purpleBoxes} alt={t("boxes")} />
          <div className="buy-video">
            <iframe
              src="https://www.youtube.com/embed/7937HqnLEmc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <p className="smart">{t("smart")}</p>
          <p className="address">{t("address")}</p>
          <a
            className="buy-now"
            href="https://pancakeswap.finance/swap?outputCurrency=0xCa8C7B9ae56b7C5E49F9b6149B693F69800E27Be"
            target="_blank"
            rel="noreferrer"
          >
            {t("buy_now")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default BuyTokens;

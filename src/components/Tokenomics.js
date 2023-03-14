import "../styles/style.scss";
import tokenomics1 from "../imgs/tokenomics1.png";
import tokenomics1ES from "../imgs/tokenomics1SPANISH.png";
import tokenomics2 from "../imgs/tokenomics2.png";
import tokenomics2ES from "../imgs/tokenomics2SPANISH.png";
import tokenomicsmobile from "../imgs/tokenomics-mobile.png";
import tokenomicsmobileES from "../imgs/tokenomics-mobileSPANISH.png";
import { isSpanish } from "../utils";
import { useTranslation } from "react-i18next";

function Tokenomics() {

  const { i18n } = useTranslation();

  const esp = isSpanish(i18n);

  return (
    <div>
      <div className="tokenomics" id="tokenomics">
        <h2>Tokenomics</h2>
        <div className="toks-container">
          <div>
            <img src={esp ? tokenomics1ES : tokenomics1} alt="tokenomics" />
          </div>
          <div>
            <img src={esp? tokenomics2ES : tokenomics2} alt="tokenomics" />
          </div>
        </div>
        <div className="toks-mobile">
          <img src={esp ? tokenomicsmobileES : tokenomicsmobile} alt="tokenomics" />
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;

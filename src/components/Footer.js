import FooterCat from "../imgs/footer-cat.png";
import FooterLogo from "../imgs/logo-footer.webp";
import Litepaper from "../media/LitepaperBitcat.pdf";
import TermsConditions from "../media/TermsConditions.pdf";
import PrivacyPolicies from "../media/PrivacyPolicies.pdf";
import { useTranslation } from "react-i18next";


function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="footer">
        <img  className="footer-cat" src={FooterCat} alt={t("alt_footer_cat")} />
        <ul className="footer-list">
          <li>
            <a href={TermsConditions}
            target="_blank"
                  rel="noreferrer"
                  >{t("terms_of_use")}</a>
          </li>
          <li>
            <a href={PrivacyPolicies}
            target="_blank"
                  rel="noreferrer"
                  >{t("privacy_policy")}</a>
          </li>
          <li>
            <a href={Litepaper}target="_blank"
                  rel="noreferrer">Litepaper</a>
          </li>
          <li>
            <a href="https://medium.com/@bitcatgame"
                  target="_blank"
                  rel="noreferrer">Blog</a>
          </li>
          <li>
            <a href="https://linktr.ee/bitcatgame"
                target="_blank"
                rel="noreferrer">Link tree</a>
          </li>
        </ul>
        <div className="contact">
          {t("contact")}<br />
          <a href="mailto:info@bitcatgame.com">info@bitcatgame.com</a>
        </div>

        <a href="#home"><img className="footer-logo"src={FooterLogo} alt="bitcat logo" /></a>
      </div>
    </div>
  );
}

export default Footer;

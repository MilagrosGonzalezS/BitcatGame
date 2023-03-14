import { useState } from "react";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "../styles/style.scss";
import { useTranslation } from "react-i18next";

export default function SubscribeForm({ openModal, closeModal }) {
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [validated, setValidated] = useState(false);
  const { t } = useTranslation();

  function validateEmail() {
    setValidated(email.indexOf("@") > -1 && email.indexOf(".") > -1);
  }

  return (
    <ModalUnstyled className="ModalForm" open={openModal}>
      <div className="mc__form-container">
        <MailchimpSubscribe
          url={process.env.REACT_APP_MAILCHIMP_URL}
          render={({ subscribe, status, message }) => (
            <form className="SubscribeForm">
              <h2>{t("please_enter_email")}</h2>
              <p className="state">{status}</p>
              <p className="state">{message}</p>
              <label>
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail();
                  }}
                ></input>
              </label>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  subscribe({ EMAIL: email });
                }}
                // disabled={!validated}
              >
                {t("subscribe_form")}
              </button>
              <p className="CloseModal" onClick={() => closeModal()}>
                x
              </p>
            </form>
          )}
        />
      </div>
    </ModalUnstyled>
  );
}

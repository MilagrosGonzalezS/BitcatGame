import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import logo from "./imgs/logo-bitcat.webp";
import "./styles/style.scss";
import "./styles/forgotPassword.scss";

function MenuItem({ href, title, onClickHandler }) {
  return (
    <li className="nav_link" onClick={onClickHandler}>
      <a href={href}>{title}</a>
    </li>
  );
}

function ForgotPasswordPage() {
  const { t, i18n } = useTranslation();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm();

  const handleChangeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang === "spanish" ? "es" : "en");
  };

  const onSubmit = async (data) => {
    const { email } = data;
    console.log({ email });
    const response = await fetch("/reset-request", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.status === "OK") {
      toast.success(result.message);
      reset();
    } else {
      toast.error(result.message);
    }
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
      <div className="password-page">
        <div className="password-links-container">
          <h2>{t("forgot_password_header")}</h2>
          <div className="register-form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="email">{t("email")}</label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", {
                  required: true,
                  maxLength: 120,
                })}
              />
              <div className="form-buttons">
                <input type="submit" value={t("forgot_password_button")} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordPage;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Await, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { base64, signMessage } from "./utils";

import logo from "./imgs/logo-bitcat.webp";
import "./styles/style.scss";
import "./styles/successReg.scss";
import "./styles/forgotPassword.scss";

function MenuItem({ href, title, onClickHandler }) {
  return (
    <li className="nav_link" onClick={onClickHandler}>
      <a href={href}>{title}</a>
    </li>
  );
}

function ChangePasswordPage() {
  const { t, i18n } = useTranslation();
  const [nickname, setNickname] = useState("");
  const [valid, setValid] = useState(0);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("/status");
      const result = await response.json();
      if (response.status === 200 && result.valid === 1) {
        setNickname(result.nickname);
        setValid(result.valid);
      } else {
        toast.error("Invalid change password request");
      }
    }
    fetchData();
  }, []);

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
    if (!window.ethereum.isMetaMask) {
      toast.error(t("metamask_install"));
      return;
    }
    const sig = await signMessage({
      message: `nickname: ${nickname}\npassword: ${base64(`${data.password}`)}`,
    });

    if (sig) {
      const { address, signature, password } = {
        ...data,
        ...sig,
      };
      const body = {
        address,
        signature,
        password: base64(password),
      };
      console.log(body);

      const id = toast.loading("Changing password, please wait...");
      const url = "/change-password";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        toast.update(id, {
          render: "Password changed successfully 👌",
          type: "success",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
        });
        reset();
      } else {
        const data = await response.json();
        toast.update(id, {
          render: `${data.error} 🤯`,
          type: "error",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
        });
      }
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
          <h2>{t("changes_password_header")}</h2>
          <div className="register-form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="password">
                <span>*</span> {t("password")}
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  maxLength: 40,
                  minLength: 8,
                })}
              />
              {errors.password && (
                <p style={{ color: "white" }}>{errors.password.message}</p>
              )}

              <label htmlFor="passwordConfirmation">
                <span>*</span> {t("conf-pass")}
              </label>
              <input
                type="password"
                {...register("passwordConfirmation", {
                  required: true,
                  maxLength: 40,
                  minLength: 8,
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { password } = getValues();
                      return password === value || "Passwords should match!";
                    },
                  },
                })}
              />
              {errors.passwordConfirmation && (
                <p style={{ color: "white" }}>
                  {errors.passwordConfirmation.message}
                </p>
              )}
              <div className="form-buttons">
                <input type="submit" value={t("change_password_button")} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePasswordPage;

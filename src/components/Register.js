import React from "react";
import { ethers } from "ethers";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import moreInfo from "../imgs/more-info.png";
import playControl from "../imgs/play-control.png";
import title from "../imgs/register-title.png";
import { useTranslation } from "react-i18next";
import { isSpanish } from "../utils";
import { base64 } from "../utils";
import registerSteps from "../media/Register.pdf";
import registerESP from "../media/RegisterSPANISH.pdf";
import { signMessage } from "../utils";

function Register() {
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm();
  const esp = isSpanish(i18n);
  const onSubmit = async (data) => {
    if (!window.ethereum?.isMetaMask) {
      toast.error(t("metamask_install"));
      return;
    }
    const sig = await signMessage({
      message: `nickname: ${data.nickname}\npassword: ${base64(
        `${data.password}`
      )}`,
    });

    if (sig) {
      const { nickname, email, address, signature, password } = {
        ...data,
        ...sig,
      };
      const body = {
        nickname,
        email,
        address,
        signature,
        password: base64(password),
      };

      const id = toast.loading("Registering player, please wait...");
      const url = "/api/players/register";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        toast.update(id, {
          render: "Player registered successfully 👌",
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
      <div className="register" id="register">
        <div className="register-left">
          <div>
            <img src={title} alt={t("register-now-title")} />
          </div>
          <div className="register-p">
            <p>{t("register_p")}</p>
          </div>
          <div className="more-info">
            <button>
              <a
                href={esp ? registerESP : registerSteps}
                rel="noreferrer"
                target="_blank"
              >
                <img src={moreInfo} alt="more info" />
              </a>
            </button>
            <img src={playControl} alt="play control" />
          </div>
        </div>
        <div className="register-right">
          <div className="register-form-wrapper">
            <div className="register-form-container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="wallets">
                  <span>*</span>
                  {t("choose_wallet")}
                </label>
                <br />
                <select
                  name="wallets"
                  id="wallets"
                  defaultValue="metamask"
                  {...register("wallet_name", { required: true })}
                >
                  <option value="metamask">Metamask</option>
                  <option value="binance">Binance Chain Wallet</option>
                </select>
                <br />
                <label htmlFor="nickname">
                  <span>*</span> {t("nickname")}
                </label>
                <input
                  type="text"
                  {...register("nickname", { required: true, maxLength: 40 })}
                />

                <label htmlFor="email">
                  <span>*</span> {t("email")}
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    maxLength: 120,
                  })}
                />

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
                  <input type="submit" value={t("register")} />
                </div>
                <div className="form-buttons">
                  <Link className="link-button" to="/forgot-password">
                    I forgot my password
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

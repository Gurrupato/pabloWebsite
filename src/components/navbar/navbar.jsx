import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [selectedLanguaje, setSelectedLanguaje] = useState("en");
  const [hamburger, setHamburger] = useState(false);
  return (
    <div className={styles["container"]}>
      <div className={styles["containerInterno"]}>
        <div className={styles["logoContainer"]}>
          <img className={styles["logo"]} src={logo}></img>
        </div>
        <div className={styles["containerLinks"]}>
          <Link
            to="/"
            onClick={() => {
              setActiveTab("home");
            }}
            className={
              activeTab === "home" ? styles["linksSelected"] : styles["links"]
            }
          >
            {t("navigation.inicio")}
          </Link>
          <Link
            to="/sobremi"
            onClick={() => {
              setActiveTab("sobre mi");
            }}
            className={
              activeTab === "sobre mi"
                ? styles["linksSelected"]
                : styles["links"]
            }
          >
            {t("navigation.sobreMi")}
          </Link>
          <Link
            to="/experiencias"
            onClick={() => {
              setActiveTab("experiencias");
            }}
            className={
              activeTab === "experiencias"
                ? styles["linksSelected"]
                : styles["links"]
            }
          >
            {t("navigation.experiencias")}
          </Link>

          <Link
            to="/voluntariado"
            onClick={() => {
              setActiveTab("voluntariado");
            }}
            className={
              activeTab === "voluntariado"
                ? styles["linksSelected"]
                : styles["links"]
            }
          >
            {t("navigation.voluntariado")}
          </Link>

          <Link
            to="/formacion"
            onClick={() => {
              setActiveTab("formacion");
            }}
            className={
              activeTab === "formacion"
                ? styles["linksSelected"]
                : styles["links"]
            }
          >
            {t("navigation.formacion")}
          </Link>
          {/* <Link
            to="/contacto"
            onClick={() => {
              setActiveTab("contacto");
            }}
            className={
              activeTab === "contacto"
                ? styles["linksSelected"]
                : styles["links"]
            }
          >
            {t("navigation.contacto")}
          </Link> */}
        </div>
        <div className={styles["lenguajeContainer"]}>
          <button
            className={
              selectedLanguaje === "en"
                ? styles["englishButtonSelected"]
                : styles["englishButton"]
            }
            onClick={() => {
              i18n.changeLanguage("en");
              setSelectedLanguaje("en");
            }}
          ></button>
          <button
            className={
              selectedLanguaje === "es"
                ? styles["spanishButtonSelected"]
                : styles["spanishButton"]
            }
            onClick={() => {
              i18n.changeLanguage("es");
              setSelectedLanguaje("es");
            }}
          ></button>
        </div>
      </div>
      <div className={styles["containerInternoMovil"]}>
        {hamburger === false ? (
          <button
            className={styles["hamburgerButton"]}
            onClick={() => {
              setHamburger(true);
            }}
          >
            | | |
          </button>
        ) : (
          <></>
        )}
        {hamburger === true ? (
          <div className={styles["containerLinksMovil"]}>
            <Link
              to="/"
              onClick={() => {
                setHamburger(false);
                setActiveTab("home");
              }}
              className={
                activeTab === "home" ? styles["linksSelected"] : styles["links"]
              }
            >
              {t("navigation.inicio")}
            </Link>
            <Link
              to="/sobremi"
              onClick={() => {
                setActiveTab("sobre mi");
                setHamburger(false);
              }}
              className={
                activeTab === "sobre mi"
                  ? styles["linksSelected"]
                  : styles["links"]
              }
            >
              {t("navigation.sobreMi")}
            </Link>
            <Link
              to="/experiencias"
              onClick={() => {
                setActiveTab("experiencias");
                setHamburger(false);
              }}
              className={
                activeTab === "experiencias"
                  ? styles["linksSelected"]
                  : styles["links"]
              }
            >
              {t("navigation.experiencias")}
            </Link>

            <Link
              to="/voluntariado"
              onClick={() => {
                setActiveTab("voluntariado");
                setHamburger(false);
              }}
              className={
                activeTab === "voluntariado"
                  ? styles["linksSelected"]
                  : styles["links"]
              }
            >
              {t("navigation.voluntariado")}
            </Link>

            <Link
              to="/formacion"
              onClick={() => {
                setActiveTab("formacion");
                setHamburger(false);
              }}
              className={
                activeTab === "formacion"
                  ? styles["linksSelected"]
                  : styles["links"]
              }
            >
              {t("navigation.formacion")}
            </Link>
            {/* <Link
            to="/contacto"
            onClick={() => {
              setActiveTab("contacto");
            }}
            className={
              activeTab === "contacto"
                ? styles["linksSelected"]
                : styles["links"]
            }
          >
            {t("navigation.contacto")}
          </Link> */}
          </div>
        ) : (
          <div></div>
        )}

        <div className={styles["lenguajeContainer"]}>
          <button
            className={
              selectedLanguaje === "en"
                ? styles["englishButtonSelected"]
                : styles["englishButton"]
            }
            onClick={() => {
              i18n.changeLanguage("en");
              setSelectedLanguaje("en");
            }}
          ></button>
          <button
            className={
              selectedLanguaje === "es"
                ? styles["spanishButtonSelected"]
                : styles["spanishButton"]
            }
            onClick={() => {
              i18n.changeLanguage("es");
              setSelectedLanguaje("es");
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./home.module.css";
import workingonit from "../../assets/Captura.png";
import portada from "../../assets/portada.png";
import { Icon } from "@iconify/react";
//import gmail from "../../assets/gmail.png";
import { useTranslation, Trans } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["container"]}>
      <div className={styles["contenido"]}>
        <div className={styles["titulo"]}>
          <h1 className={styles["nombre"]}>Pablo de Quinta Asián</h1>
          <h2 className={styles["titulacion"]}>{t("navigation.psicologo")}</h2>
        </div>
        <div className={styles["imagenContainer"]}>
          <img
            className={styles["imagen"]}
            src={portada}
            lat="working on it"
          ></img>
        </div>
        <div className={styles["contactContainer"]}>
          <div className={styles["contactContainerPrimeraLinea"]}>
            {t("navigation.contactanos")}
          </div>
          <div className={styles["contactContainerEnlaces"]}>
            <a
              href="https://www.linkedin.com/in/pablo-de-quinta-asi%C3%A1n-74650a27a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              target="_blank"
            >
              <Icon className="linkedinIcon" icon="fa:linkedin-square" />{" "}
              LinkedIn
            </a>
            <a href="mailto:pablodequintaasian@gmail.com">
              <Icon className="gmailIcon" icon="mdi:gmail" />{" "}
              pablodequintaasian@gmail.com
            </a>
            <a
              href="https://www.instagram.com/trabajo_y_mente/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="ph:instagram-logo-bold" /> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

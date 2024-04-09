import React from "react";
import styles from "./voluntariado.module.css";
import workingonit from "../../assets/Captura.png";
import { useTranslation } from "react-i18next";
import logoPunto from "../../assets/logoSinNombre.png";
export const Voluntariado = () => {
  const { t } = useTranslation();
  return (
    <div className={styles["container"]}>
      <div className={styles["contenido"]}>
        {t("voluntariado", { returnObjects: true }).map((item, index) => (
          <div key={index}>
            <div className={styles["tituloPuntuado"]}>
              <img className={styles["logoPunto"]} src={logoPunto}></img>
              <h2>{item.titulo}</h2>
            </div>
            <div className={styles["contenidoExperiencia"]}>
              {" "}
              <h3 className={styles["subtitulo"]}>{item.subtitulo}</h3>
              <ul className={styles["lista"]}>
                {item.contenido.map((detalle, idx) => (
                  <li key={idx}>{detalle}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

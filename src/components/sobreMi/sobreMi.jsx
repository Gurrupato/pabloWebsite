import React from "react";
import styles from "./sobreMi.module.css";
import workingonit from "../../assets/Captura.png";
import { useTranslation, Trans } from "react-i18next";
import foto from "../../assets/fotoPabloSinFondo.png";

export const Sobremi = () => {
  const { t } = useTranslation();
  const bold = (chunks) => <strong>{chunks}</strong>;
  return (
    <div className={styles["container"]}>
      <div className={styles["containerInterno"]}>
        <div className={styles["containerImagen"]}>
          <img src={foto} className={styles["imagen"]}></img>
        </div>
        <div className={styles["containerTexto"]}>
          <div className={styles["titulo"]}>{t("sobreMi.titulo")}</div>
          <div className={styles["nombre"]}>Pablo de Quinta Asian</div>
          <div className={styles["contenido"]}>
            {t("sobreMi.contenido", { returnObjects: true }).map(
              (parrafo, index) => (
                <p key={index}>{parrafo}</p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./formacion.module.css";
import workingonit from "../../assets/Captura.png";
import { useTranslation } from "react-i18next";
import logoPunto from "../../assets/logoSinNombre.png";
import { useState } from "react";

export const Formacion = () => {
  const { t } = useTranslation();
  const [desplegable, setDespleglable] = useState("");
  return (
    <div className={styles["container"]}>
      <div className={styles["contenido"]}>
        {t("formacion", { returnObjects: true }).map((item, index) => (
          <div className={styles["experienciaContainer"]} key={index}>
            <div className={styles["columnaIzquierda"]}>
              <div className={styles["tituloPuntuado"]}>
                <img className={styles["logoPunto"]} src={logoPunto}></img>
                <h2 className={styles["titulo"]}>{item.titulo}</h2>
              </div>
              <h3 className={styles["ubicacion"]}>{item.ubicacion}</h3>
              <ul className={styles["lista"]}>
                {item.contenido[0] === ""
                  ? ""
                  : item.contenido.map((detalle, idx) => (
                      <li key={idx}>{detalle}</li>
                    ))}
              </ul>
            </div>
            <div className={styles["columnaDerecha"]}>
              <h2 className={styles["fecha"]}>{item.fecha}</h2>
              <h3 className={styles["horas"]}>{item.horas}</h3>
            </div>
          </div>
        ))}
        <div className={styles["noRegladaContainer"]}>
          {t("formacionNoReglada", { returnObjects: true }).map(
            (item, index) => (
              <div
                className={styles["experienciaNoRegladaContainer"]}
                key={index}
              >
                <div
                  onClick={() => {
                    desplegable === item.titulo
                      ? setDespleglable("")
                      : setDespleglable(item.titulo);
                  }}
                  className={styles["tituloPuntuadoDesplegable"]}
                >
                  <div className={styles["tituloPuntuado"]}>
                    <img className={styles["logoPunto"]} src={logoPunto}></img>

                    <h2 className={styles["titulo"]}>{item.titulo}</h2>
                  </div>
                  <h3>V</h3>
                </div>{" "}
                {desplegable === item.titulo ? (
                  <div className={styles["containerDesplegable"]}>
                    {item.contenido.map((cont) => (
                      <div className={styles["containerDesplegableInterno"]}>
                        <div className={styles["columnaIzquierda"]}>
                          <h3>{cont.subtitulo}</h3> <p>{cont.ubicacion}</p>
                        </div>
                        <div className={styles["columnaDerecha"]}>
                          <h3 className={styles["fecha"]}>{cont.fecha}</h3>
                          <h3 className={styles["horas"]}>{cont.duracion}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

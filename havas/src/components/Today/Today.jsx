import TodayStyles from "./today.module.scss";
import birthdaySvg from "../../Assets/Images/Today/picto_birthday.svg";
import peopleSvg from "../../Assets/Images/Today/picto_people.svg";
import afriqueSvg from "../../Assets/Images/Today/picto_afrique.svg";
import smileySvg from "../../Assets/Images/Today/picto_smiley.svg";
import courseSvg from "../../Assets/Images/Today/picto_course.svg";
import villeSvg from "../../Assets/Images/Today/picto_ville.svg";

import birthdaySvg2 from "../../Assets/Images/Today/picto_birthday2.svg";
import peopleSvg2 from "../../Assets/Images/Today/picto_people2.svg";
import afriqueSvg2 from "../../Assets/Images/Today/picto_afrique2.svg";
import smileySvg2 from "../../Assets/Images/Today/picto_smiley2.svg";
import courseSvg2 from "../../Assets/Images/Today/picto_course2.svg";
import villeSvg2 from "../../Assets/Images/Today/picto_ville2.svg";

import { useState } from "react";

import React from "react";

const Today = () => {

  const [cursorHover, setCursorHover] = useState(false);

  const handleMouseMove = (e) => {
    document.documentElement.style.setProperty(
      "--x",
      e.clientX + window.scrollX + "px"
    );
    document.documentElement.style.setProperty(
      "--y",
      e.clientY + window.scrollY + "px"
    );
  };

  return (
    <section onMouseMove={handleMouseMove} className={TodayStyles.content}>
   
        <div className={TodayStyles.background}>
          <h1 className={TodayStyles.content__title}>GVA Aujourd'hui</h1>
          <div className={TodayStyles.grid}>
            <div className={TodayStyles.grid__item}>
              <img className={TodayStyles.item___img} src={birthdaySvg}></img>
              <p className={TodayStyles.item___title}>6 ans</p>
              <p className={TodayStyles.item__subtitle}>d'activité</p>
            </div>
            <div className={TodayStyles.grid__item}>
              <img className={TodayStyles.item___img} src={peopleSvg}></img>
              <p className={TodayStyles.item___title}>1 200</p>
              <p className={TodayStyles.item__subtitle}>collaborateurs</p>
            </div>
            <div className={TodayStyles.grid__item}>
              <img className={TodayStyles.item___img} src={afriqueSvg}></img>
              <p className={TodayStyles.item___title}>7 pays</p>
              <p className={TodayStyles.item__subtitle}>
                Gabon, Togo, Congo, Cote d'Ivoir, Rwanda, Burkina Faso, RDC
              </p>
            </div>
            <div className={TodayStyles.grid__item}>
              <img className={TodayStyles.item___img} src={smileySvg}></img>
              <p className={TodayStyles.item___title}>87%</p>
              <p className={TodayStyles.item__subtitle}>
                de satisfaction des clients CANALBOX
              </p>
            </div>
            <div className={TodayStyles.grid__item}>
              <img  className={TodayStyles.item___img} src={courseSvg}></img>
              <p className={TodayStyles.item___title}>30 000km</p>
              <p className={TodayStyles.item__subtitle}>
                de fibre optique déployée
              </p>
            </div>
            <div className={TodayStyles.grid__item}>
              <img className={TodayStyles.item___img} src={villeSvg}></img>
              <p className={TodayStyles.item___title}>1 200 000</p>
              <p className={TodayStyles.item__subtitle}>
                foyers et entreprise éligible
              </p>
            </div>
          </div>
        </div>
        <div className={TodayStyles.calcque}>
          <div id={TodayStyles.cursor} className={`${cursorHover ? TodayStyles.cursor__hover : '' }`}>
          <h1 className={TodayStyles.content__title}>GVA Aujourd'hui</h1>
          <div className={TodayStyles.grid} onMouseEnter={() => setCursorHover(true)} onMouseLeave={() => setCursorHover(false)}>
            <div className={TodayStyles.grid__item}>
              <img className={TodayStyles.item___img} src={birthdaySvg2}></img>
              <p className={TodayStyles.item___title}>6 ans</p>
              <p className={TodayStyles.item__subtitle}>d'activité</p>
            </div>
            <div className={TodayStyles.grid__item}>
              <img className={TodayStyles.item___img} src={peopleSvg2}></img>
              <p className={TodayStyles.item___title}>1 200</p>
              <p className={TodayStyles.item__subtitle}>collaborateurs</p>
            </div>
            <div className={TodayStyles.grid__item}>
              <img className={TodayStyles.item___img} src={afriqueSvg2}></img>
              <p className={TodayStyles.item___title}>7 pays</p>
              <p className={TodayStyles.item__subtitle}>
                Gabon, Togo, Congo, Cote d'Ivoir, Rwanda, Burkina Faso, RDC
              </p>
            </div>
            <div className={TodayStyles.grid__item}>
              <img className={TodayStyles.item___img} src={smileySvg2}></img>
              <p className={TodayStyles.item___title}>87%</p>
              <p className={TodayStyles.item__subtitle}>
                de satisfaction des clients CANALBOX
              </p>
            </div>
            <div className={TodayStyles.grid__item}>
              <img className={TodayStyles.item___img} src={courseSvg2}></img>
              <p className={TodayStyles.item___title}>30 000km</p>
              <p className={TodayStyles.item__subtitle}>
                de fibre optique déployée
              </p>
            </div>
            <div className={TodayStyles.grid__item}>
              <img className={TodayStyles.item___img} src={villeSvg2}></img>
              <p className={TodayStyles.item___title}>1 200 000</p>
              <p className={TodayStyles.item__subtitle}>
                foyers et entreprise éligible
              </p>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
};

export default Today;

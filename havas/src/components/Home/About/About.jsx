import { useState, useRef } from "react";
import AboutStyles from "./About.module.scss";

import { useInView } from "react-intersection-observer";

const About = () => {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const cell1 = useRef(null);
  const cell2 = useRef(null);
  const cell3 = useRef(null);
  const cell4 = useRef(null);

  const [sectionRef, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.3,
    delay: 200,
    triggerOnce: true,
  });

  const handleMouseMove = (event, cell) => {
    let infos = cell.current.getBoundingClientRect();
    let offsetTop = infos.y;
    let offsetLeft = infos.x;

    setTranslate({
      x: event.clientX - offsetLeft,
      y: event.clientY - offsetTop,
    });
  };

  return (
    <section id={AboutStyles.about} ref={sectionRef}>
      <div
        className={`${AboutStyles.container} ${
          inView && AboutStyles.inView
        } testclass`}
      >
        <div>
          <div>
            <h1>
              <span>gva</span> aujourd’hui et demain
            </h1>
            <p>
              Rendre accessible le très haut débit en Afrique pour décupler
              l’impact positif d’Internet
            </p>
          </div>
        </div>
        <div ref={cell1} onMouseMove={(event) => handleMouseMove(event, cell1)}>
          Home
          <p className={AboutStyles.test}>À propos de GVA</p>
          <p className={AboutStyles.arrow}>&rarr;</p>
          <div
            style={{
              transform: `translate(${translate.x / 4}px, ${
                translate.y / 4
              }px)`,
            }}
            className={AboutStyles.circle}
          ></div>
        </div>
        <div ref={cell2} onMouseMove={(event) => handleMouseMove(event, cell2)}>
          <p>Notre Activité</p>
          <p className={AboutStyles.arrow}>&rarr;</p>
          <div
            style={{
              transform: `translate(${translate.x / 4}px, ${
                translate.y / 4
              }px)`,
            }}
            className={`${AboutStyles.circle} ${AboutStyles.circle2}`}
          ></div>
        </div>
        <div ref={cell3} onMouseMove={(event) => handleMouseMove(event, cell3)}>
          <p>Notre mission</p>
          <p className={AboutStyles.arrow}>&rarr;</p>
          <div
            style={{
              transform: `translate(${translate.x / 4}px, ${
                translate.y / 4
              }px)`,
            }}
            className={`${AboutStyles.circle} ${AboutStyles.circle3}`}
          ></div>
        </div>
        <div ref={cell4} onMouseMove={(event) => handleMouseMove(event, cell4)}>
          <p>Gouvernance</p>
          <p className={AboutStyles.arrow}>&rarr;</p>
          <div
            style={{
              transform: `translate(${translate.x / 4}px, ${
                translate.y / 4
              }px)`,
            }}
            className={`${AboutStyles.circle} ${AboutStyles.circle4}`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;

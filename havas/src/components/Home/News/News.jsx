import NewsStyles from "./News.module.scss";
import img1 from "../../../Assets/Images/Home/image1.png";
import img2 from "../../../Assets/Images/Home/image2.png";
import img3 from "../../../Assets/Images/Home/image3.png";
import img4 from "../../../Assets/Images/Home/image4.png";

import { useInView } from "react-intersection-observer";

const News = () => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.4,
    delay: 500,
    triggerOnce: true,
  });

  const [ref2, inView2, entry2] = useInView({
    /* Optional options */
    threshold: 0.6,
    delay: 100,
    triggerOnce: true,
  });

  const [ref3, inView3, entry3] = useInView({
    /* Optional options */
    threshold: 0.6,
    delay: 1000,
    triggerOnce: true,
  });

  const [ref4, inView4, entry4] = useInView({
    /* Optional options */
    threshold: 0.6,
    delay: 1500,
    triggerOnce: true,
  });

  return (
    <section id="news">
      <div className={NewsStyles.container}>
        <div
          ref={ref}
          className={`${NewsStyles.cell} ${inView && "slideNews"}`}
        >
          <div className={NewsStyles.description}>
            <p className={NewsStyles.date}>02.04.2021</p>
            <p className={NewsStyles.title}>
              L’offre CANALBOX au service des écoliers Togolais
            </p>
          </div>
          <div className={NewsStyles.image}>
            <img src={img2}></img>
          </div>
        </div>
        <div
          ref={ref2}
          className={`${NewsStyles.cell} ${inView2 && "slideNews"}`}
        >
          <div className={NewsStyles.description}>
            <p className={NewsStyles.date}>02.04.2021</p>
            <p className={NewsStyles.content}>
              Armand la direction du Vivendi Africa au Togo loem ipsum sit (78
              caract max ).
            </p>
          </div>
          <div className={NewsStyles.image}>
            <img src={img4}></img>
          </div>
        </div>
        <div
          ref={ref3}
          className={`${NewsStyles.cell} ${inView3 && "slideNews"}`}
        >
          <div className={NewsStyles.description}>
            <p className={NewsStyles.date}>02.04.2021</p>
            <p className={NewsStyles.content}>
              L’offre CANALBOX disponible au Togo
            </p>
          </div>
          <div className={NewsStyles.image}>
            <img src={img3}></img>
          </div>
        </div>
        <div
          ref={ref4}
          className={`${NewsStyles.cell} ${inView4 && "slideNews"}`}
        >
          <div className={NewsStyles.description}>
            <p className={NewsStyles.date}>02.04.2021</p>
            <p className={NewsStyles.content}>
              Osiane 2021 : Brazzaville accueille les acteurs clés du numérique
              de l’Afrique centrale
            </p>
          </div>
          <div className={NewsStyles.image}>
            <img src={img1}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

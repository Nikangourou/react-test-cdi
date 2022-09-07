import Layout from "../../components/Layout/Layout";
import HomeStyles from "./Home.module.scss";
import img1 from "../../Assets/Images/Home/image1.png";
import img2 from "../../Assets/Images/Home/image2.png";
import img3 from "../../Assets/Images/Home/image3.png";
import img4 from "../../Assets/Images/Home/image4.png";

const Home = () => {
  return (
    <Layout>
      <section id="news">
        <div className={HomeStyles.container}>
          <div className={HomeStyles.cell}>
            <div className={HomeStyles.description}>
              <p className={HomeStyles.date}>02.04.2021</p>
              <p className={HomeStyles.title}>
                L’offre CANALBOX au service des écoliers Togolais
              </p>
            </div>
            <img src={img2}></img>
          </div>
          <div className={HomeStyles.cell}>
            <div className={HomeStyles.description}>
              <p className={HomeStyles.date}>02.04.2021</p>
              <p className={HomeStyles.content}>
                Armand la direction du Vivendi Africa au Togo loem ipsum sit (78
                caract max ).
              </p>
            </div>
            <img src={img4}></img>
          </div>
          <div className={HomeStyles.cell}>
            <div className={HomeStyles.description}>
              <p className={HomeStyles.date}>02.04.2021</p>
              <p className={HomeStyles.content}>
                L’offre CANALBOX disponible au Togo
              </p>
            </div>
            <img src={img3}></img>
          </div>
          <div className={HomeStyles.cell}>
            <div className={HomeStyles.description}>
              <p className={HomeStyles.date}>02.04.2021</p>
              <p className={HomeStyles.content}>
                Osiane 2021 : Brazzaville accueille les acteurs clés du
                numérique de l’Afrique centrale
              </p>
            </div>
            <img src={img1}></img>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

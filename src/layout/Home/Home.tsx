import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Sobre from "../../components/Sobre";


import * as Styles from "./Home.styles";

const Home = () => {
  return (
    <Styles.Container>
      <Banner />
      <Sobre />
      <Contact />
    </Styles.Container>
  );
};

export default Home;

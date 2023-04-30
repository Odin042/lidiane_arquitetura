import Banner from "../../components/Banner";
import Sobre from "../../components/Sobre";
import WhoAmI from "../../components/WhoAmI";

import * as Styles from "./Home.styles";

const Home = () => {
  return (
    <Styles.Container>
      <Banner />
      <Sobre />
    </Styles.Container>
  );
};

export default Home;

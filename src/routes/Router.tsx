import { Route, Routes } from "react-router-dom";
import Home from "../layout/Home";
import Sobre from "../components/Sobre";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;

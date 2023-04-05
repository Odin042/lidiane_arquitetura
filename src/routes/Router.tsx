import { Route, Routes } from "react-router-dom";
import Home from "../layout/Home";
import Sobre from "../layout/Sobre";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
};

export default Router;

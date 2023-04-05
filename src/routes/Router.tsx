import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
};

export default Router;

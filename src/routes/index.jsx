import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../pages/layout/Layout";
import NotFound from "../pages/not-found/NotFound";
import Wishes from "../pages/wishes/Wishes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/wishlist" element={<Wishes />} />
      </Route>
    </Routes>
  );
};

export default Router;

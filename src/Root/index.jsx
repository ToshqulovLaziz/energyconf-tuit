import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ContactUs from "../components/Contact";
import NavbarMenu from "../components/NavbarMenu";
import Hotelapge from "../pages/HotelPage";
import TourPage from "../pages/TourPage";

const Root = () => {
  return (
    <>
      <Header />
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-cipoc" element={<AboutPage />} />
        <Route path="/hotel" element={<Hotelapge />} />
        <Route path="/tour" element={<TourPage />} />
      </Routes>
      <ContactUs />
    </>
  );
};

export default Root;
